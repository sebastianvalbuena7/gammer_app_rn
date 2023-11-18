import { useState } from 'react';
import { GetPostsUseCase } from '../../../../domain/useCases/posts/GetPostsUseCase';
import { Post } from '../../../../domain/models/Post';

const PostListViewModel = ({ GetPostsUseCase }: { GetPostsUseCase: GetPostsUseCase }) => {

    const [response, setResponse] = useState<Post[]>();

    const [error, setError] = useState('');

    const getPosts = () => {
        GetPostsUseCase.run(({ result, error }: any) => {
            setResponse(result);
            setError(error);
        })
    }

    return {
        response,
        error,
        getPosts,
        setError
    }
}

export default PostListViewModel;