import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostListScreen } from "../views/post/list/PostList";
import { MyPostListScreen } from "../views/post/myList/MyPostList";
import { MyColors } from "../theme/AppTheme";
import { ProfileStackNavigator } from './ProfileStackNavigator';

export type TabParamList = {
    PostListScreen: JSX.Element,
    MyPostListScreen: JSX.Element,
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
            <Tab.Screen name='PostListScreen' component={PostListScreen} options={{
                title: 'Posts',
                tabBarLabel: 'Posts',
                tabBarIcon: () => <Image source={require('../../../assets/img/my_list.png')} style={{ height: 25, width: 25 }} />,
                tabBarActiveTintColor: "white"
            }} />

            <Tab.Screen name='MyPostListScreen' component={MyPostListScreen} options={{
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