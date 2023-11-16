import { useState } from 'react';
import { SignOutUseCase } from '../../../../domain/useCases/auth/SignOutUseCase';
import { GetUserByIdUseCase } from '../../../../domain/useCases/users/GetUserByIdUseCase';
import { GetUserUseCase } from '../../../../domain/useCases/auth/GetUserUseCase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { User } from '../../../../domain/models/User';

const ProfileInfoViewModel = ({ SignOutUseCase, GetUserByIdUseCase, GetUserUseCase }: { SignOutUseCase: SignOutUseCase, GetUserByIdUseCase: GetUserByIdUseCase, GetUserUseCase: GetUserUseCase }) => {
    const [result, setResult] = useState(false);

    const [user, setUser] = useState<User>();

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const getUserSession = async () => {
        const { result, error } = await GetUserUseCase.run();

        const myUser = result as FirebaseAuthTypes.User;
        getUserById(myUser.uid);
    };

    const getUserById = (id: string) => {
        GetUserByIdUseCase.run(id, ({ result, error }: any) => {
            setError(error);
            setUser(result);
        })
    };

    const logout = async () => {
        setLoading(true);
        const { result, error } = await SignOutUseCase.run();
        setResult(result!);
        setError(error);
        setLoading(false);
    };

    return {
        result,
        setResult,
        error,
        setError,
        user,
        logout,
        loading,
        getUserSession
    };
}

export default ProfileInfoViewModel;