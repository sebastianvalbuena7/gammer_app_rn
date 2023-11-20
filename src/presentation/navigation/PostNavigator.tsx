import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostListScreen } from '../views/post/list/PostList';
import { PostDetailScreen } from '../views/post/detail/PostDetail';
import { Post } from '../../domain/models/Post';

export type PostStackParamList = {
    PostListScreen: JSX.Element,
    PostDetailScreen: {post: Post}
};

const Stack = createNativeStackNavigator<PostStackParamList>();

export const PostStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='PostListScreen' component={PostListScreen} />
            <Stack.Screen name='PostDetailScreen' component={PostDetailScreen} />
        </Stack.Navigator>
    )
};