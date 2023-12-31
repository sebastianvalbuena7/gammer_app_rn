import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyColors } from "../theme/AppTheme";
import { ProfileStackNavigator } from './ProfileStackNavigator';
import { MyPostStackNavigator } from "./MyPostStackNavigator";
import { PostStackNavigator } from './PostNavigator';

export type TabParamList = {
    PostStackNavigator: JSX.Element,
    MyPostStackNavigator: JSX.Element,
    ProfileStackNavigator: JSX.Element
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: MyColors.background,
            }
        }}>
            <Tab.Screen name='PostStackNavigator' component={PostStackNavigator} options={{
                title: 'Posts',
                tabBarLabel: 'Posts',
                tabBarIcon: () => <Image source={require('../../../assets/img/my_list.png')} style={{ height: 25, width: 25 }} />,
                tabBarActiveTintColor: "white"
            }} />

            <Tab.Screen name='MyPostStackNavigator' component={MyPostStackNavigator} options={{
                title: 'My Posts',
                tabBarLabel: 'My Posts',
                tabBarIcon: () => <Image source={require('../../../assets/img/checklist.png')} style={{ height: 25, width: 25 }} />,
                tabBarActiveTintColor: 'white'
            }} />

            <Tab.Screen name='ProfileStackNavigator' component={ProfileStackNavigator} options={{
                title: 'Profile',
                tabBarLabel: 'Profile',
                tabBarIcon: () => <Image source={require('../../../assets/img/user.png')} style={{ height: 25, width: 25 }} />,
                tabBarActiveTintColor: 'white'
            }} />
        </Tab.Navigator>
    )
}