import { useEffect } from 'react';
import { Image, View, Text, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Path, Svg } from 'react-native-svg'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation/MainStackNavigator'
import { MyColors, MyStyles } from '../../../theme/AppTheme'
import { DefaultButton } from '../../../components/DefaultButton';
import { DefaultTextInput } from '../../../components/DefaultTextInput';
import styles from './Styles';
import DI from '../../../../di/ioc';
import Toast from 'react-native-simple-toast';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> { }

export const LoginScreen = ({ navigation, route }: Props) => {
    const { email, password, error, setError, onChange, login, result, setResult, loading } = DI.resolve('LoginViewModel');

    useEffect(() => {
        if (error !== null) {
            if (error !== '') {
                Toast.show(error, Toast.SHORT);
                setError('');
            };
        }
    }, [error]);

    useEffect(() => {
        if (result !== undefined && result !== null) {
            Toast.show('User logged', Toast.SHORT);
            setResult(undefined);
        };
    }, [result])

    return (
        <View style={styles.container}>
            <View style={styles.svgContainer}>
                <Svg style={styles.svg} viewBox="0 0 1440 320" height={400} width={Dimensions.get('screen').width}>
                    <Path fill={MyColors.primary} fill-opacity="1" d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,117.3C840,64,960,32,1080,42.7C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
                </Svg>

                <Text style={styles.title}>
                    SIGN IN
                </Text>
                <Text style={styles.title}>
                    TO PLAY
                </Text>

                <Image
                    source={require('../../../../../assets/img/game_con_black.png')}
                    style={styles.image}
                />
            </View>

            <View style={{ flex: 1 }} />

            <View>
                <DefaultTextInput
                    placeholder="Email"
                    image={require('../../../../../assets/img/email.png')}
                    value={email}
                    property='email'
                    onChangeText={onChange}
                    keyboardType='email-address'
                />
                <DefaultTextInput
                    placeholder="Password"
                    image={require('../../../../../assets/img/password.png')}
                    value={password}
                    property='password'
                    onChangeText={onChange}
                    secureTextEntry={true}
                />

                <DefaultButton
                    text="Login"
                    onPress={() => login()}
                />

                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen', {
                    props: '',
                    type: '',
                    key: ''
                })}>
                    <Text style={styles.textRegister}>
                        REGISTER NOW
                    </Text>
                </TouchableOpacity>
                {
                    loading &&
                    <ActivityIndicator size='large' color={MyColors.primary} style={MyStyles.stylesLoading} />
                }
            </View>
        </View>
    )
}