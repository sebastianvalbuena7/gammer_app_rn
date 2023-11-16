import { UsersDataSource } from '../datasource/remote/UsersDataSource';
import { User } from '../../domain/models/User';
import { Asset } from 'react-native-image-picker';

export interface UsersRepository {
    getUserById(id: string, callback: Function): void;
    update(id: string, user: User): Promise<{
        error: any;
        result: boolean | null;
    }>;
    updateWithImage(id: string, user: User, file: Asset): Promise<{
        error: any;
        result: boolean | null;
    }>;
};

export const UsersRepository = ({ UsersDataSource }: { UsersDataSource: UsersDataSource }) => {
    return {
        getUserById(id: string, callback: Function) {
            UsersDataSource.getUserById(id, ({ result, error }: any) => {
                callback({ result, error })
            });
        },
        async update(id: string, user: User) {
            const { error, result } = await UsersDataSource.update(id, user);
            return { error, result };
        },
        async updateWithImage(id: string, user: User, file: Asset) {
            const { error, result } = await UsersDataSource.updateWithImage(id, user, file);
            return { error, result };
        }
    }
}