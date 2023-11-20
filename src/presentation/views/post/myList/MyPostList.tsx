import { StackScreenProps } from "@react-navigation/stack";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from './Styles';
import { MyPostStackParamList } from "../../../navigation/MyPostStackNavigator";
import DI from '../../../../di/ioc';
import { MyPostListItem } from "./Item";
import { useEffect } from "react";
import Toast from 'react-native-simple-toast';

interface Props extends StackScreenProps<MyPostStackParamList, 'MyPostListScreen'> { };

export const MyPostListScreen = ({ navigation, route }: Props) => {
    const { response, error, setError, getUserSession, getPostsById } = DI.resolve('MyPostListViewModel');

    useEffect(() => {
        if (error !== null) {
            if (error !== '') {
                Toast.show(error, Toast.SHORT);
                setError('');
            };
        }
    }, [error]);

    useEffect(() => {
        getUserSession();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={response}
                    keyExtractor={(post) => post.id}
                    renderItem={({ item }) => <MyPostListItem post={item} navigation={navigation} />}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('PostCreateScreen')} style={styles.fabContainer}>
                <Image source={require('../../../../../assets/img/add.png')} style={styles.fab} />
            </TouchableOpacity>
        </View>
    )
}