// INFORMACION
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { User } from '../../../domain/models/User';

export interface AuthDataSource {
    login(email: string, password: string): Promise<{
        error: null;
        result: FirebaseAuthTypes.UserCredential;
    } | {
        error: any;
        result: null;
    }>;
    register:  (user: User) => Promise<{
        error: null;
        result: FirebaseAuthTypes.UserCredential;
    } | {
        error: any;
        result: null;
    }>;
}

export const login = async (email: string, password: string) => {
    try {
        const data = await auth().signInWithEmailAndPassword(email, password);

        return Promise.resolve({error: null, result: data});
    } catch(error: any) {
        return Promise.resolve({error: 'Invalid Credentials', result: null});
    }
}

export const register = async (user: User) => {
    try {
        const data = await auth().createUserWithEmailAndPassword(user.email, user.password);

        return Promise.resolve({error: null, result: data});
    } catch(error: any) {
        return Promise.resolve({error: error.message, result: null});
    }
}