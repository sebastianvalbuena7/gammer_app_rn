import { StackScreenProps } from "@react-navigation/stack";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ProfileStackParamList } from "../../../navigation/ProfileStackNavigator";
import { useEffect } from "react";
import DI from '../../../../di/ioc';
import styles from './Styles'
import { DefaultButton } from "../../../components/DefaultButton";
import { DefaultTextInput } from "../../../components/DefaultTextInput";

interface Props extends StackScreenProps<ProfileStackParamList, 'ProfileUpdateScreen'> { };

export const ProfileUpdateScreen = ({ navigation, route }: Props) => {
    const { user } = route.params;

    const { username, image, onChange, setValues } = DI.resolve('ProfileUpdateViewModel');

    useEffect(() => {
        setValues(user);
    }, []);

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

            <Image
                style={styles.profileImage}
                source={require('../../../../../assets/img/user_image.png')} />

            <View style={{marginTop: 80}}>
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
                <DefaultButton text="Update Profile" onPress={() => navigation.navigate('ProfileUpdateScreen', { user })} />
            </View>
        </View>
    );
}