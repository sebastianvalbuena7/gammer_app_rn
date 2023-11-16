import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { ImageBackground, View, Text, Image, ActivityIndicator } from 'react-native';
import styles from './Styles';
import DI from '../../../../di/ioc';
import { DefaultButton } from "../../../components/DefaultButton";
import { MyColors, MyStyles } from "../../../theme/AppTheme";
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../../navigation/MainStackNavigator";
import Toast from 'react-native-simple-toast';
import { ProfileStackParamList } from "../../../navigation/ProfileStackNavigator";

interface Props extends StackScreenProps<ProfileStackParamList, 'ProfileInfoScreen'> { };

export const ProfileInfoScreen = ({ navigation, route }: Props) => {
    const { result, user, error, setError, logout, loading, getUserSession } = DI.resolve('ProfileInfoViewModel');

    const nav = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (error !== null) {
            if (error !== '') {
                Toast.show(error, Toast.SHORT);
                setError('');
            };
        }
    }, [error]);

    useEffect(() => {
        getUserSession();
    }, []);

    useEffect(() => {
        if (result) nav.replace('LoginScreen', { key: '', props: '', type: '' })
    }, [result]);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../../assets/img/fifa.jpg')} style={styles.backgroundImage}>
                <View style={styles.darkness}></View>
            </ImageBackground>

            <Text style={styles.title}>Perfil de Usuario</Text>


            {
                user.image == undefined || user.image == ''
                    ? <Image
                        style={styles.profileImage}
                        source={require('../../../../../assets/img/user_image.png')} />
                    : <Image
                        style={styles.profileImage}
                        source={{ uri: user.image }} />
            }

            {(user != null && user != undefined) && (
                <>
                    <Text style={styles.usernameText}>{user.username}</Text>
                    <Text style={styles.emailText}>{user.email}</Text>
                </>
            )}

            <View style={{ flex: 1 }} />

            <View style={{ marginBottom: 15 }}>
                <DefaultButton text="Edit Profile" onPress={() => navigation.navigate('ProfileUpdateScreen', { user })} />
            </View>

            <View style={{ marginBottom: 30 }}>
                <DefaultButton
                    text="Log Out"
                    onPress={logout}
                    color={MyColors.secondary}
                    image={require('../../../../../assets/img/shutdown.png')}
                />
            </View>

            {
                loading &&
                <ActivityIndicator size='large' color={MyColors.primary} style={MyStyles.stylesLoading} />
            }
        </View>
    )
}