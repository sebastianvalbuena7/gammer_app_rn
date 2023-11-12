import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AuthRepository } from '../../../data/repository/AuthRepository';

export interface LoginUseCase {
    run(email: string, password: string): Promise<{
        error: null;
        result: FirebaseAuthTypes.UserCredential;
    } | {
        error: any;
        result: null;
    }>;
}

export const LoginUseCase = ({ AuthRepository }: { AuthRepository: AuthRepository }) => {
    return {
        async run(email: string, password: string) {
            const {error, result} = await AuthRepository.login(email, password);

            return {error, result};
        }
    }
}