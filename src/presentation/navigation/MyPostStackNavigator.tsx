import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyPostListScreen } from '../views/post/myList/MyPostList';
import { PostCreateScreen } from '../views/post/create/PostCreate';

export type MyPostStackParamList = {
    MyPostListScreen: undefined,
    PostCreateScreen: undefined,
};

const Stack = createNativeStackNavigator<MyPostStackParamList>();

export const MyPostStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='MyPostListScreen' component={MyPostListScreen} />
            <Stack.Screen name='PostCreateScreen' component={PostCreateScreen} />
        </Stack.Navigator>
    )
};