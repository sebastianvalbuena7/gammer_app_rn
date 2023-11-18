import { StackScreenProps } from "@react-navigation/stack";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import styles from './Styles';
import { MyPostStackParamList } from "../../../navigation/MyPostStackNavigator";
import DI from '../../../../di/ioc';
import { DefaultTextInput } from "../../../components/DefaultTextInput";
import { RadioButton } from "../../../components/RadioButton";
import { DefaultButton } from "../../../components/DefaultButton";
import { MyColors, MyStyles } from "../../../theme/AppTheme";
import { useEffect } from "react";
import Toast from 'react-native-simple-toast';

interface Props extends StackScreenProps<MyPostStackParamList, 'PostCreateScreen'> { };

export const PostCreateScreen = ({ navigation, route }: Props) => {
    const { image, name, description, category, file, onChange, pickImage, takePhoto, onRadioChange, categories, createPost, response, error, setResponse, setError, getUser, loading } = DI.resolve('PostCreateViewModel');

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        if (error !== null) {
            if (error !== '') {
                Toast.show(error, Toast.SHORT);
                setError('');
            };
        }
    }, [error]);

    useEffect(() => {
        if (response !== null && response !== undefined) {
            if (response !== '' && response === true) {
                Toast.show('The post has been created!', Toast.SHORT);
            };
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backgroundImage} onPress={pickImage}>
                {
                    image == undefined || image == ''
                        ? <View>
                            <Image source={require('../../../../../assets/img/add-image.png')} style={styles.selectImage} />

                            <Text style={styles.textImage}>SELECCIONA UNA IMAGEN</Text>
                        </View>
                        : <Image
                            style={styles.fileImage}
                            source={{ uri: image }} />
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowBackContainer}>
                <Image
                    source={require('../../../../../assets/img/left-arrow.png')}
                    style={styles.arrowBack}
                />
            </TouchableOpacity>

            <View style={{ marginTop: 30 }} />

            <DefaultTextInput placeholder="Name game" value={name} onChangeText={onChange} property="name" image={require('../../../../../assets/img/console.png')} />

            <DefaultTextInput placeholder="Description" value={description} onChangeText={onChange} property="description" image={require('../../../../../assets/img/checklist.png')} />

            <Text style={styles.textCategory}>CATEGORIAS</Text>

            <View>
                {categories.map((category: any) => (
                    <RadioButton key={category.name} children={category.name} selected={category.selected} onPress={() => onRadioChange(category)} image={category?.image} />
                ))}
            </View>

            <View style={{ marginTop: 80 }}>
                <DefaultButton color={MyColors.primary} text="Create Post" onPress={createPost} />
            </View>

            {
                loading &&
                <ActivityIndicator size='large' color={MyColors.primary} style={MyStyles.stylesLoading} />
            }
        </View>
    )
}