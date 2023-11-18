import { PostDataSource } from '../datasource/remote/PostDataSource';
import { Post } from '../../domain/models/Post';
import { Asset } from 'react-native-image-picker';

export interface PostRepository {
    create(post: Post, file: Asset): Promise<{
        result: boolean | null;
        error: any;
    }>;
    getPosts(callback: Function): void;
};

export const PostRepository = ({ PostDataSource }: { PostDataSource: PostDataSource }) => {
    return {
        async create(post: Post, file: Asset) {
            const { result, error } = await PostDataSource.create(post, file);
            return { result, error };
        },
        getPosts(callback: Function) {
            PostDataSource.getPosts(({result, error}: any) => {
                callback({result, error});
            });
        }
    }
};