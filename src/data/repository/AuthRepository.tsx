import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { AuthDataSource, signOut } from '../datasource/remote/AuthRemoteDataSource';
import { User } from '../../domain/models/User';

export interface AuthRepository {
    login(email: string, password: string): Promise<{
        error: null;
        result: FirebaseAuthTypes.UserCredential;
    } | {
        error: any;
        result: null;
    }>;
    register(user: User): Promise<{
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
    getUser(): Promise<{
        error: string | null;
        result: FirebaseAuthTypes.User | null;
    }>
}

export const AuthRepository = ({ AuthDataSource }: { AuthDataSource: AuthDataSource }) => {
    return {
        async getUser() {
            const { error, result } = await AuthDataSource.getUser();
            return { error, result };
        },
        async login(email: string, password: string): Promise<{
            error: null;
            result: FirebaseAuthTypes.UserCredential;
        } | {
            error: any;
            result: null;
        }> {
            const { error, result } = await AuthDataSource.login(email, password);

            return { error, result };
        },
        async register(user: User): Promise<{
            error: null;
            result: FirebaseAuthTypes.UserCredential;
        } | {
            error: any;
            result: null;
        }> {
            const { error, result } = await AuthDataSource.register(user);

            return { error, result };
        },
        async signOut(): Promise<{
            error: null;
            result: boolean;
        } | {
            error: any;
            result: null;
        }> {
            const { error, result } = await AuthDataSource.signOut();
            return { error, result };
        }
    }
};