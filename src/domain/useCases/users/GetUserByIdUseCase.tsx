import { UsersRepository } from '../../../data/repository/UsersRepository';

export interface GetUserByIdUseCase {
    run(id: string, callback: Function): void;
}

export const GetUserByIdUseCase = ({ UsersRepository }: { UsersRepository: UsersRepository }) => {
    return {
        run(id: string, callback: Function) {
            UsersRepository.getUserById(id, ({ result, error }: any) => {
                callback({result, error});
            });
        }
    }
}