import { Text, View, Image, TouchableOpacity } from "react-native";
import { PostStackParamList } from "../../../navigation/PostNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import styles from './Styles';
import DI from '../../../../di/ioc';
import { useEffect } from "react";

interface Props extends StackScreenProps<PostStackParamList, 'PostDetailScreen'> { };

export const PostDetailScreen = ({ navigation, route }: Props) => {
    const { post } = route.params;

    const { user, getUserById } = DI.resolve('PostDetailViewModel');

    useEffect(() => {
        getUserById(post.idUser);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{ uri: post.image }} style={styles.postImage} />

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowBackContainer}>
                <Image
                    source={require('../../../../../assets/img/back.png')}
                    style={styles.arrowBack}
                />
            </TouchableOpacity>

            <View style={styles.userContainer}>
                {
                    (user !== undefined && user !== null) && (
                        <>
                            <Image source={{ uri: user.image }} style={styles.userImage} />
                            <View style={styles.userInfo}>
                                <Text style={styles.username}>{user.username}</Text>
                                <Text style={styles.email}>{user.email}</Text>
                            </View>
                        </>
                    )
                }
            </View>

            <Text style={styles.postName}>{post.name}</Text>
            <View style={styles.categoryContainer}>
                {
                    post.category === 'PLAYSTATION'
                    &&
                    <Image source={require('../../../../../assets/img/icon_ps4.png')} style={styles.categoryImage} />
                }
                {
                    post.category === 'PC'
                    &&
                    <Image source={require('../../../../../assets/img/icon_pc.png')} style={styles.categoryImage} />
                }
                {
                    post.category === 'XBOX'
                    &&
                    <Image source={require('../../../../../assets/img/icon_xbox.png')} style={styles.categoryImage} />
                }
                {
                    post.category === 'NINTENDO'
                    &&
                    <Image source={require('../../../../../assets/img/icon_nintendo.png')} style={styles.categoryImage} />
                }
                <Text style={styles.textCategory}>{post.category}</Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{post.description}</Text>
        </View>
    );
}