// INFORMACION
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { User } from '../../../domain/models/User';
import firestore from '@react-native-firebase/firestore';

export interface AuthDataSource {
    login(email: string, password: string): Promise<{
        error: null;
        result: FirebaseAuthTypes.UserCredential;
    } | {
        error: any;
        result: null;
    }>;
    register: (user: User) => Promise<{
        error: null;
        result: FirebaseAuthTypes.UserCredential;
    } | {
        error: any;
        result: null;
    }>;
    signOut(): Promise<{
        error: null;
        result: boolean;
    } | {
        error: any;
        result: null;
    }>;
    getUser: () => Promise<{
        error: null;
        result: FirebaseAuthTypes.User | null;
    }> | Promise<{
        error: string;
        result: null;
    }>
}

export const getUser = async () => {
    try {
        const data = await auth().currentUser;
        
        return Promise.resolve({ error: null, result: data });
    } catch (error: any) {
        return Promise.resolve({ error: 'Error unexpected', result: null });
    }
}

export const login = async (email: string, password: string) => {
    try {
        const data = await auth().signInWithEmailAndPassword(email, password);

        return Promise.resolve({ error: null, result: data });
    } catch (error: any) {
        return Promise.resolve({ error: 'Invalid Credentials', result: null });
    }
}

export const register = async (user: User) => {
    try {
        const data = await auth().createUserWithEmailAndPassword(user.email, user.password);

        const id = (await getUser()).result?.uid; // Uuid

        await firestore().collection('Users').doc(id).set({
            'email': user.email,
            'username': user.username
        });

        return Promise.resolve({ error: null, result: data });
    } catch (error: any) {
        return Promise.resolve({ error: error.message, result: null });
    }
}

export const signOut = async () => {
    try {
        await auth().signOut();
        return Promise.resolve({ error: null, result: true });
    } catch (error: any) {
        return Promise.resolve({ error: error.message, result: null });
    }
}