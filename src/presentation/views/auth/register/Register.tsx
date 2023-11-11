import { useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Platform, Alert, ToastAndroid } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/MainStackNavigator";
import styles from './Styles';
import { Path, Svg } from "react-native-svg";
import { MyColors } from "../../../theme/AppTheme";
import { DefaultTextInput } from '../../../components/DefaultTextInput';
import { DefaultButton } from '../../../components/DefaultButton';
import DI from '../../../../di/ioc';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { };

export const RegisterScreen = ({ navigation, route }: Props) => {
    const { email, password, username, confirmPassword, onChange, error, register, setError } = DI.resolve('RegisterViewModel');

    useEffect(() => {
        if (error !== '') {
            if (Platform.OS === 'android') {
                ToastAndroid.show(error, ToastAndroid.LONG);
            } else {
                Alert.alert(error);
            }
            setError('')
        }
    }, [error])

    return (
        <View style={styles.container}>
            <View style={styles.svgContainer}>
                <Svg style={styles.svg} viewBox="0 0 1440 320" height={400} width={Dimensions.get('screen').width}>
                    <Path fill={MyColors.primary} fill-opacity="1" d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,117.3C840,64,960,32,1080,42.7C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
                </Svg>

                <Text style={styles.title}>
                    REGISTER
                </Text>
                <Text style={styles.title}>
                    TO PLAY
                </Text>

                <Image
                    source={require('../../../../../assets/img/game_con_black.png')}
                    style={styles.image}
                />
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowBackContainer}>
                    <Image
                        source={require('../../../../../assets/img/left-arrow.png')}
                        style={styles.arrowBack}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 40 }}>
                <View style={{ flex: 1 }} />

                <DefaultTextInput
                    placeholder='Username'
                    image={require('../../../../../assets/img/user_image.png')}
                    property='username'
                    value={username}
                    onChangeText={onChange}
                />

                <DefaultTextInput
                    placeholder='Email'
                    image={require('../../../../../assets/img/email.png')}
                    property='email'
                    value={email}
                    onChangeText={onChange}
                    keyboardType='email-address'
                />

                <DefaultTextInput
                    placeholder='Password'
                    image={require('../../../../../assets/img/password.png')}
                    property='password'
                    value={password}
                    onChangeText={onChange}
                    secureTextEntry={true}
                />

                <DefaultTextInput
                    placeholder='Confirm Password'
                    image={require('../../../../../assets/img/password.png')}
                    property='confirmPassword'
                    value={confirmPassword}
                    onChangeText={onChange}
                    secureTextEntry={true}
                />

                <DefaultButton onPress={register} text='Register' />
            </View>
        </View>
    )
}