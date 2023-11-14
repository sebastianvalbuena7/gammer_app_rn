import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../views/auth/login/Login';
import { RegisterScreen } from '../views/auth/register/Register';
import { HomeScreen } from '../views/home/Home';
import { TabsNavigator } from './TabsNavigator';

export type RootStackParamList = {
    LoginScreen: JSX.Element,
    RegisterScreen: JSX.Element,
    HomeScreen: JSX.Element,
    TabsNavigator: JSX.Element
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>

            <Stack.Screen name='TabsNavigator' component={TabsNavigator}/>
        </Stack.Navigator>
    )
};