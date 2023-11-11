import { Image, ImageSourcePropType, StyleSheet, TextInput, View } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
    placeholder: string;
    image: ImageSourcePropType;
    value: string;
    onChangeText: (prop: string, value: any) => void;
    property: string;
}

export const DefaultTextInput = ({ placeholder, image, value, onChangeText, property }: Props) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <TextInput 
                placeholder={placeholder} 
                style={styles.textInput} 
                placeholderTextColor={MyColors.placeholder}
                value={value}
                onChangeText={text => onChangeText(property, text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginTop: 20,
        fontSize: 18,
        marginHorizontal: 30,
        color: MyColors.secondary,
        flex: 1
    },
    image: {
        width: 25,
        height: 25,
        marginTop: 30,
        marginLeft: 20
    }
})