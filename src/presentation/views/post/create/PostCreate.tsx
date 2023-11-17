import { StackScreenProps } from "@react-navigation/stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './Styles';
import { MyPostStackParamList } from "../../../navigation/MyPostStackNavigator";
import { DefaultTextInput } from "../../../components/DefaultTextInput";
import { RadioButton } from "../../../components/RadioButton";

interface Props extends StackScreenProps<MyPostStackParamList, 'PostCreateScreen'> { };

export const PostCreateScreen = ({ navigation, route }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundImage}>
                <Image source={require('../../../../../assets/img/add-image.png')} style={styles.selectImage} />

                <Text style={styles.textImage}>SELECCIONA UNA IMAGEN</Text>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowBackContainer}>
                    <Image
                        source={require('../../../../../assets/img/left-arrow.png')}
                        style={styles.arrowBack}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }} />

            <DefaultTextInput placeholder="Name of game" value="" onChangeText={() => { }} property="" image={require('../../../../../assets/img/console.png')} />

            <DefaultTextInput placeholder="Description" value="" onChangeText={() => { }} property="" image={require('../../../../../assets/img/checklist.png')} />

            <Text style={styles.textCategory}>CATEGORIAS</Text>

            <View>
                <RadioButton children='PC' selected={false} onPress={() => { }} image={require('../../../../../assets/img/icon_pc.png')} />

                <RadioButton children='PLAYSTATION' selected={false} onPress={() => { }} image={require('../../../../../assets/img/icon_ps4.png')} />

                <RadioButton children='XBOX' selected={false} onPress={() => { }} image={require('../../../../../assets/img/icon_xbox.png')} />

                <RadioButton children='NINTENDO' selected={false} onPress={() => { }} image={require('../../../../../assets/img/icon_nintendo.png')} />
            </View>
        </View>
    )
}