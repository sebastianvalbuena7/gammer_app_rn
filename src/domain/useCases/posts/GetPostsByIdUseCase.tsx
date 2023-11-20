import { PostRepository } from '../../../data/repository/PostRepository';

export interface GetPostsByIdUseCase {
    run(idUser: string, callback: Function): void;
};

export const GetPostsByIdUseCase = ({PostRepository}: {PostRepository: PostRepository}) => {
    return {
        run(idUser: string, callback: Function) {
            PostRepository.getPostsById(idUser, ({result, error}: any) => {
                callback({result, error});;
            });
        }
    }
};