import { PostRepository } from '../../../data/repository/PostRepository';
import { Post } from '../../models/Post';
import { Asset } from 'react-native-image-picker';

export interface CreatePostUseCase {
    run(post: Post, file: Asset): Promise<{
        result: boolean | null;
        error: any;
    }>;
};

export const CreatePostUseCase = ({ PostRepository }: { PostRepository: PostRepository }) => {
    return {
        async run(post: Post, file: Asset) {
            const { result, error } = await PostRepository.create(post, file);
            return { result, error };
        }
    }
};