import { AuthRepository } from '../../../data/repository/AuthRepository';
import { User } from '../../models/User';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface RegisterUseCase {
    run(user: User): Promise<{
        error: any;
        result: FirebaseAuthTypes.UserCredential | null;
    }>
}

export const RegisterUseCase = ({AuthRepository}: {AuthRepository: AuthRepository}) => {
    return {
        async run(user: User) {
            const {error, result} = await AuthRepository.register(user);

            return {error, result};
        }
    }
}