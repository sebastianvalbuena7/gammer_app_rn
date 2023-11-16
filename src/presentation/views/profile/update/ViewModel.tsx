import { useState } from 'react';
// import { SignOutUseCase } from '../../../domain/useCases/auth/SignOutUseCase';

const ProfileUpdateViewModel = () => {
    const [values, setValues] = useState({
        username: '',
        image: ''
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const onChange = (prop: string, value: any) => {
        setValues({...values, [prop]: value});
    };

    return {
        ...values,
        setValues,
        error,
        setError, 
        loading,
        onChange
    }
}

export default ProfileUpdateViewModel;