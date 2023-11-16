import { StackScreenProps } from "@react-navigation/stack";
import { ActivityIndicator, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ProfileStackParamList } from "../../../navigation/ProfileStackNavigator";
import { useEffect } from "react";
import DI from '../../../../di/ioc';
import styles from './Styles'
import { DefaultButton } from "../../../components/DefaultButton";
import { DefaultTextInput } from "../../../components/DefaultTextInput";
import Toast from 'react-native-simple-toast';
import { MyColors, MyStyles } from "../../../theme/AppTheme";

interface Props extends StackScreenProps<ProfileStackParamList, 'ProfileUpdateScreen'> { };

export const ProfileUpdateScreen = ({ navigation, route }: Props) => {
    const { user } = route.params;

    const { username, image, onChange, setValues, takePhoto, pickImage, file, update, error, response, loading, setError } = DI.resolve('ProfileUpdateViewModel');

    useEffect(() => {
        setValues(user);
    }, []);

    useEffect(() => {
        if (error !== null) {
            if (error !== '') {
                Toast.show(error, Toast.SHORT);
                setError('');
            };
        }
    }, [error]);

    useEffect(() => {
        if (response !== null && response !== undefined) {
            if (response !== '') {
                Toast.show(response, Toast.SHORT);
            };
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../../assets/img/fifa.jpg')} style={styles.backgroundImage}>
                <View style={styles.darkness}></View>
            </ImageBackground>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowBackContainer}>
                <Image
                    source={require('../../../../../assets/img/left-arrow.png')}
                    style={styles.arrowBack}
                />
            </TouchableOpacity>

            <Text style={styles.title}>Perfil de Usuario</Text>

            <TouchableOpacity style={styles.profileImageContainer}
                // onPress={takePhoto}
                onPress={pickImage}
            >
                {
                    image == undefined || image == ''
                        ? <Image
                            style={styles.profileImage}
                            source={require('../../../../../assets/img/user_image.png')} />
                        : <Image
                            style={styles.profileImage}
                            source={{ uri: image }} />
                }
            </TouchableOpacity>

            <View style={{ marginTop: 80 }}>
                <DefaultTextInput
                    placeholder="Username"
                    property="username"
                    onChangeText={onChange}
                    value={username}
                    image={require('../../../../../assets/img/user_image.png')}
                />
            </View>

            <View style={{ flex: 1 }} />

            <View style={{ marginBottom: 30 }}>
                <DefaultButton text="Update Profile" onPress={update} />
            </View>

            {
                loading &&
                <ActivityIndicator size='large' color={MyColors.primary} style={MyStyles.stylesLoading} />
            }
        </View>
    );
}