import firestore from '@react-native-firebase/firestore';
import { User } from '../../../domain/models/User';

export interface UsersDataSource {
    getUserById: (id: string, callback: Function) => void;
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
                callback({ result: null, error: error });
            }
        );
}