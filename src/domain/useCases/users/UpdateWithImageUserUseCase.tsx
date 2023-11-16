import { UsersRepository } from '../../../data/repository/UsersRepository';
import { User } from '../../models/User';
import { Asset } from 'react-native-image-picker';

export interface UpdateWithImageUserUseCase {
    run(id: string, user: User, file: Asset): Promise<{
        result: boolean | null;
        error: any;
    }>
}

export const UpdateWithImageUserUseCase = ({ UsersRepository }: { UsersRepository: UsersRepository }) => {
    return {
        async run(id: string, user: User, file: Asset) {
            const { result, error } = await UsersRepository.updateWithImage(id, user, file);
            return { result, error };
        }
    }
}