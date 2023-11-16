import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { User } from '../../../domain/models/User';
import { Asset } from 'react-native-image-picker';

export interface UsersDataSource {
    getUserById: (id: string, callback: Function) => void;
    updateWithImage: (id: string, user: User, file: Asset) => Promise<{
        error: null;
        result: boolean;
    } | {
        error: any;
        result: null;
    }>;
    update: (id: string, user: User) => Promise<{
        error: null;
        result: boolean;
    } | {
        error: any;
        result: null;
    }>;
}

export const getUserById = (id: string, callback: Function) => {
    firestore().collection('Users')
        .doc(id)
        .onSnapshot(
            snapshot => {
                const user = snapshot.data() as User;
                callback({ result: user, error: null });
            },
            error => {
                console.log('Error firestore ', error);
                callback({ result: null, error: 'Ha ocurrido un error' });
            }
        );
};

export const updateWithImage = async (id: string, user: User, file: Asset) => {
    try {
        const reference = storage().ref(`/Users/${file.fileName}`);
        const task = await reference.putFile(file.uri!, {
            contentType: 'image/jpg'
        });
        const url = await reference.getDownloadURL();

        await firestore()
            .collection('Users')
            .doc(id).update({
                image: url,
                username: user.username
            });

        return Promise.resolve({ error: null, result: true })
    } catch (error: any) {
        return Promise.resolve({ error: error.message, result: null });
    }
};

export const update = async (id: string, user: User) => {
    try {
        await firestore()
            .collection('Users')
            .doc(id).update({
                username: user.username
            });

        return Promise.resolve({ error: null, result: true })
    } catch (error: any) {
        return Promise.resolve({ error: error.message, result: null });
    }
};