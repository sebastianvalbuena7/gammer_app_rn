import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Post } from '../../../../domain/models/Post';

export const PostListItem = (post: Post) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{uri: post.image}} style={styles.postImage}/>
            <Text style={styles.name}>{post.name}</Text>
            <Text style={styles.username}>{post.idUser}</Text>
            <Text style={styles.description}>{post.description}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: '#2b2d37',
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center'
    },
    postImage: {
        width: '100%',
        height: 200
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10
    },
    username: {
        color: 'gray',
        marginLeft: 20,
        marginTop: 10
    },
    description: {
        color: 'white',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 10
    }
});