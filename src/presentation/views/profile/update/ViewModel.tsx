import { useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { GetUserUseCase } from '../../../../domain/useCases/auth/GetUserUseCase';
import { UpdateUserUseCase } from '../../../../domain/useCases/users/UpdateUserUseCase';
import { UpdateWithImageUserUseCase } from '../../../../domain/useCases/users/UpdateWithImageUserUseCase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { User } from '../../../../domain/models/User';

const ProfileUpdateViewModel = ({ GetUserUseCase, UpdateUserUseCase, UpdateWithImageUserUseCase }: { GetUserUseCase: GetUserUseCase, UpdateUserUseCase: UpdateUserUseCase, UpdateWithImageUserUseCase: UpdateWithImageUserUseCase }) => {
    const [values, setValues] = useState({
        username: '',
        image: ''
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const [file, setFile] = useState<any>(null);

    const [response, setResponse] = useState(false);

    const getUser = async () => {
        const { error, result } = await GetUserUseCase.run();
        const myUser = result as FirebaseAuthTypes.User
        return myUser;
    };

    const update = () => {
        if(file === null || file === undefined) {
            updateWithoutImage();
        } else {
            updateWithImage();
        }
    }

    const updateWithoutImage = async () => {
        setLoading(true);
        const {error, result} = await UpdateUserUseCase.run((await getUser()).uid, values as User);
        setResponse(result!);
        setError(error);
        setLoading(false);
    };

    const updateWithImage = async () => {
        const {error, result} = await UpdateWithImageUserUseCase.run((await getUser()).uid, values as User, file);
        setLoading(true);
        setResponse(result!);
        setError(error);
        setLoading(false);
    };

    const onChange = (prop: string, value: any) => {
        setValues({ ...values, [prop]: value });
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibrary({
            mediaType: 'photo',
            quality: 1
        });

        if (!result.didCancel) {
            if (result.assets !== undefined) {
                onChange('image', result.assets[0].uri)
                setFile(result.assets[0]);
            }
        }
    }

    const takePhoto = async () => {
        const result = await ImagePicker.launchCamera({
            mediaType: 'photo',
            quality: 1
        });

        if (!result.didCancel) {
            if (result.assets !== undefined) {
                onChange('image', result.assets[0].uri)
                setFile(result.assets[0]);
            }
        }
    }

    return {
        ...values,
        setValues,
        update,
        getUser,
        error,
        setError,
        loading,
        onChange,
        file,
        pickImage,
        takePhoto
    }
}

export default ProfileUpdateViewModel;