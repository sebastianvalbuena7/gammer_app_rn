import { useState } from "react";
import { LoginUseCase } from '../../../../domain/useCases/auth/LoginUseCase';
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

const LoginViewModel = ({ LoginUseCase }: { LoginUseCase: LoginUseCase }) => {
    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [result, setResult] = useState<FirebaseAuthTypes.UserCredential>();

    const onChange = (prop: string, value: any) => {
        setValues({ ...values, [prop]: value })
    };

    const login = async () => {
        if (isValidForm()) {
            setLoading(true);
            const {error, result} = await LoginUseCase.run(values.email, values.password);
            setResult(result!);
            setError(error);
            setLoading(false);
        }
    };

    const isValidForm = (): boolean => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (values.email === '') {
            setError('The field email has not be empty');
            return false;
        }

        if (values.password === '') {
            setError('The field password has not be empty');
            return false;
        }

        if (values.password.length < 6) {
            setError('the password has be length 6 characters');
            return false;
        }
        if (reg.test(values.email) === false) {
            setError('The email is not valid');
            return false;
        }

        return true;
    };

    return {
        ...values,
        onChange,
        login,
        error,
        setError, 
        result,
        setResult,
        loading
    }
};

export default LoginViewModel;