import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { Asset } from "react-native-image-picker";
import { Post } from "../../../domain/models/Post";

export interface PostDataSource {
    create: (post: Post, file: Asset) => Promise<{
        error: null;
        result: boolean;
    } | {
        error: any;
        result: null;
    }>;
    getPosts: (callback: Function) => void;
    getPostsById: (idUser: string, callback: Function) => void;
}

export const create = async (post: Post, file: Asset) => {
    try {
        const reference = storage().ref(`/Posts/${file.fileName}`);
        const task = await reference.putFile(file.uri!, {
            contentType: 'image/jpg'
        });
        const url = await reference.getDownloadURL();

        const myPost = { ...post, image: url };

        await firestore()
            .collection('Posts')
            .add(myPost);

        return Promise.resolve({ error: null, result: true })
    } catch (error: any) {
        return Promise.resolve({ error: error.message, result: null });
    }
};

export const getPosts = (callback: Function) => {
    firestore().collection('Posts')
        .onSnapshot(
            snapshot => {
                const posts = snapshot.docs.map((doc) => {
                    const post = doc.data() as Post;
                    const id = doc.id;
                    return { ...post, id }
                });
                callback({ result: posts, error: null });
            },
            error => {
                console.log('Error firestore ', error);
                callback({ result: null, error: 'Ha ocurrido un error' });
            }
        );
};

export const getPostsById = (idUser: string, callback: Function) => {
    firestore().collection('Posts')
        .where('idUser', '==', idUser)
        .onSnapshot(
            snapshot => {
                const posts = snapshot.docs.map((doc) => {
                    const post = doc.data() as Post;
                    const id = doc.id;
                    return { ...post, id }
                });
                callback({ result: posts, error: null });
            },
            error => {
                console.log('Error firestore ', error);
                callback({ result: null, error: 'Ha ocurrido un error' });
            }
        );
};