import { StackScreenProps } from "@react-navigation/stack";
import { FlatList, View } from "react-native";
import styles from './Styles';
import DI from '../../../../di/ioc';
import { useEffect } from "react";
import Toast from 'react-native-simple-toast';
import { PostListItem } from "./Item";
import { PostStackParamList } from "../../../navigation/PostNavigator";

interface Props extends StackScreenProps<PostStackParamList, 'PostListScreen'> { };

export const PostListScreen = ({ navigation, route }: Props) => {
    const {
        response,
        error,
        getPosts,
        setError
    } = DI.resolve('PostListViewModel');

    useEffect(() => {
        if (error !== null) {
            if (error !== '') {
                Toast.show(error, Toast.SHORT);
                setError('');
            };
        }
    }, [error]);

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={response}
                keyExtractor={(post) => post.id}
                renderItem={({item}) => <PostListItem post={item} navigation={navigation}/>}
            />
        </View>
    )
}