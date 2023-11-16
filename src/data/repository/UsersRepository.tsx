import { UsersDataSource } from '../datasource/remote/UsersDataSource';

export interface UsersRepository {
    getUserById(id: string, callback: Function): void
};

export const UsersRepository = ({ UsersDataSource }: { UsersDataSource: UsersDataSource }) => {
    return {
        getUserById(id: string, callback: Function) {
            UsersDataSource.getUserById(id, ({result, error}: any) => {
                callback({result, error})
            });
        }
    }
}