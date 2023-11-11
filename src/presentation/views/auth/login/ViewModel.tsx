import { useState } from "react";

const LoginViewModel = () => {
    const [error, setError] = useState('')

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const onChange = (prop: string, value: any) => {
        setValues({ ...values, [prop]: value })
    };

    const login = () => {
        if (isValidForm()) {
            console.log(`Email ${values.email}`)
            console.log(`Password ${values.password}`)
        }
    };

    const isValidForm = (): boolean => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
        setError
    }
};

export default LoginViewModel;