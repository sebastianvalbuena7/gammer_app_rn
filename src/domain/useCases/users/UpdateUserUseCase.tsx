import { UsersRepository } from '../../../data/repository/UsersRepository';
import { User } from '../../models/User';

export interface UpdateUserUseCase {
    run(id: string, user: User): Promise<{
        result: boolean | null;
        error: any;
    }>
}

export const UpdateUserUseCase = ({ UsersRepository }: { UsersRepository: UsersRepository }) => {
    return {
        async run(id: string, user: User) {
            const { result, error } = await UsersRepository.update(id, user);
            return { result, error };
        }
    }
}