import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AuthRepository } from '../../../data/repository/AuthRepository';

export interface GetUserUseCase {
    run(): Promise<{
        error: string | null;
        result: FirebaseAuthTypes.User | null;
    }>;
}

export const GetUserUseCase = ({ AuthRepository }: { AuthRepository: AuthRepository }) => {
    return {
        async run() {
            const { error, result } = await AuthRepository.getUser();
            return { error, result };
        }
    }
}