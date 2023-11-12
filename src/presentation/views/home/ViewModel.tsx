import { useState } from 'react';
import { SignOutUseCase } from '../../../domain/useCases/auth/SignOutUseCase';

const HomeViewModel = ({ SignOutUseCase }: { SignOutUseCase: SignOutUseCase }) => {
    const [result, setResult] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('')

    const logout = async () => {
        setLoading(true);
        const {result, error} = await SignOutUseCase.run();
        setResult(result!);
        setError(error);
        setLoading(false);
    }

    return {
        result,
        setResult,
        error,
        setError, 
        logout,
        loading
    }
}

export default HomeViewModel;