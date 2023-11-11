import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../views/auth/login/Login';
import { RegisterScreen } from '../views/auth/register/Register';

export type RootStackParamList = {
    HomeScreen: JSX.Element,
    RegisterScreen: JSX.Element
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='HomeScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
        </Stack.Navigator>
    )
};