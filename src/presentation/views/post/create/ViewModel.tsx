import { useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { CreatePostUseCase } from '../../../../domain/useCases/posts/CreatePostUseCase';
import { GetUserUseCase } from '../../../../domain/useCases/auth/GetUserUseCase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

const PostCreateViewModel = ({ CreatePostUseCase, GetUserUseCase }: { CreatePostUseCase: CreatePostUseCase, GetUserUseCase: GetUserUseCase }) => {

    const [values, setValues] = useState({
        image: '',
        name: '',
        description: '',
        category: '',
        idUser: ''
    });

    const [response, setResponse] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const [categories, setCategories] = useState([
        {
            name: 'PC',
            selected: false,
            image: require('../../../../../assets/img/icon_pc.png')
        },
        {
            name: 'PLAYSTATION',
            selected: false,
            image: require('../../../../../assets/img/icon_ps4.png')
        },
        {
            name: 'XBOX',
            selected: false,
            image: require('../../../../../assets/img/icon_xbox.png')
        },
        {
            name: 'NINTENDO',
            selected: false,
            image: require('../../../../../assets/img/icon_nintendo.png')
        }
    ]);

    const [file, setFile] = useState<any>(null);

    const getUser = async () => {
        const { error, result } = await GetUserUseCase.run();
        const myUser = result as FirebaseAuthTypes.User
        onChange('idUser', myUser.uid);
    };

    const createPost = async () => {
        setLoading(true);
        const { result, error } = await CreatePostUseCase.run(values, file);
        setResponse(result!);
        setError(error);
        setLoading(false);

        if (result === true) resetForm();
    };

    const onRadioChange = (item: any) => {
        const updateState = categories.map((category) =>
            category.name === item.name
                ? { ...category, selected: true }
                : { ...category, selected: false }
        );

        setCategories(updateState);
        onChange('category', item.name);
    }

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

    const resetForm = () => {
        const updateState = categories.map((category) => {
            return { ...category, selected: false }
        });

        setCategories(updateState);
        setValues({
            ...values,
            image: '',
            name: '',
            description: '',
            category: ''
        });

        setFile(null);
        setResponse(false);
        setError('');
    };

    return {
        ...values,
        file,
        onChange,
        pickImage,
        takePhoto,
        onRadioChange,
        categories,
        createPost,
        response,
        error,
        setResponse,
        setError,
        getUser,
        loading
    }
}

export default PostCreateViewModel;