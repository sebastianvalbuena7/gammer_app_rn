import { GetPostsByIdUseCase } from '../../../../domain/useCases/posts/GetPostsByIdUseCase';
import { GetUserUseCase } from '../../../../domain/useCases/auth/GetUserUseCase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useState } from 'react';
import { Post } from '../../../../domain/models/Post';

const MyPostListViewModel = ({ GetPostsByIdUseCase, GetUserUseCase }: { GetPostsByIdUseCase: GetPostsByIdUseCase, GetUserUseCase: GetUserUseCase }) => {

    const [response, setResponse] = useState<Post[]>();
    const [error, setError] = useState('')

    const getUserSession = async () => {
        const { result, error } = await GetUserUseCase.run();
        const myUser = result as FirebaseAuthTypes.User;
        getPostsById(myUser.uid);
    };

    const getPostsById = (idUser: string) => {
        GetPostsByIdUseCase.run(idUser, ({result, error}: any) => {
            setResponse(result!);
            setError(error);
        })
    }

    return {
        response,
        error,
        setError,
        getUserSession,
        getPostsById
    }
}

export default MyPostListViewModel;