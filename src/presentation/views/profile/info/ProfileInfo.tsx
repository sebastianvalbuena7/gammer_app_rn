import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { ImageBackground, View, Text, Image, ActivityIndicator } from 'react-native';
import styles from './Styles';
import DI from '../../../../di/ioc';
import { TabParamList } from "../../../navigation/TabsNavigator";
import { DefaultButton } from "../../../components/DefaultButton";
import { MyColors, MyStyles } from "../../../theme/AppTheme";
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../../navigation/MainStackNavigator";

interface Props extends StackScreenProps<TabParamList, 'ProfileInfoScreen'> { };

export const ProfileInfoScreen = ({ navigation, route }: Props) => {
    const { result, setResult, error, setError, logout, loading } = DI.resolve('ProfileInfoViewModel');

    const nav = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (result) nav.replace('LoginScreen', {
            key: '', props: '', type: ''
        })
    }, [result])

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../../assets/img/fifa.jpg')} style={styles.backgroundImage}>
                <View style={styles.darkness}></View>
            </ImageBackground>

            <Text style={styles.title}>Perfil de Usuario</Text>

            <Image
                style={styles.profileImage}
                source={require('../../../../../assets/img/user_image.png')} />

            <Text style={styles.usernameText}>Nombre del usuario</Text>
            <Text style={styles.emailText}>Correo electronico</Text>

            <View style={{ flex: 1 }} />

            <View style={{ marginBottom: 15 }}>
                <DefaultButton text="Edit Profile" onPress={() => { }} />
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