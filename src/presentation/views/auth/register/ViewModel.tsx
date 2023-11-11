import { useState } from "react";

const RegisterViewModel = () => {
    const [error, setError] = useState('');
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (prop: string, value: any) => {
        setValues({ ...values, [prop]: value })
    };

    const register = () => {
        if(isValidForm()) {
            console.log(values);
        }
    }

    const isValidForm = (): boolean => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (values.username === '') {
            setError('The field username has not be empty');
            return false;
        }

        if (values.email === '') {
            setError('The field email has not be empty');
            return false;
        }

        if (values.password === '') {
            setError('The field password has not be empty');
            return false;
        }

        if (values.confirmPassword === '') {
            setError('The field confirm password has not be empty');
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

        if(values.password !== values.confirmPassword) {
            setError('The passwords do not match');
            return false;
        }

        return true;
    };

    return {
        ...values,
        onChange,
        error,
        setError,
        register
    }
};

export default RegisterViewModel;