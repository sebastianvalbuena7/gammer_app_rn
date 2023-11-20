import { UsersRepository } from '../../../data/repository/UsersRepository';
import { User } from '../../models/User';

export interface GetUserByIdOnceUseCase {
    run(id: string): Promise<{
        error: any;
        result: User | null;
    }>
}

export const GetUserByIdOnceUseCase = ({ UsersRepository }: { UsersRepository: UsersRepository }) => {
    return {
        async run(id: string) {
            const { error, result } = await UsersRepository.getUserByIdOnce(id);
            return { error, result };
        }
    }
}