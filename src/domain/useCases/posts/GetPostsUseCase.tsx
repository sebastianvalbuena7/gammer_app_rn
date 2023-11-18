import { PostRepository } from '../../../data/repository/PostRepository';

export interface GetPostsUseCase {
    run(callback: Function): void
};

export const GetPostsUseCase = ({PostRepository}: {PostRepository: PostRepository}) => {
    return {
        run(callback: Function) {
            PostRepository.getPosts(({result, error}: any) => {
                callback({result, error});;
            });
        }
    }
};