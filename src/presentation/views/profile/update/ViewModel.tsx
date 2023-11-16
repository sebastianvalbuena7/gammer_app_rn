import { useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';

const ProfileUpdateViewModel = () => {
    const [values, setValues] = useState({
        username: '',
        image: ''
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const [file, setFile] = useState<any>(null)

    const onChange = (prop: string, value: any) => {
        setValues({...values, [prop]: value});
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibrary({
            mediaType: 'photo',
            quality: 1
        });

        if(!result.didCancel) {
            if(result.assets !== undefined) {
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

        if(!result.didCancel) {
            if(result.assets !== undefined) {
                onChange('image', result.assets[0].uri)
                setFile(result.assets[0]);
            }
        }
    }

    return {
        ...values,
        setValues,
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