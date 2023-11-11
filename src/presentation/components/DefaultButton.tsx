import { TouchableOpacity, View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native"
import { MyColors } from "../theme/AppTheme"

interface Props {
    text: string;
    onPress: () => void;
    image?: ImageSourcePropType
}

export const DefaultButton = ({ onPress, text, image = require('../../../assets/img/right-arrow.png') }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View />
            <Text style={styles.textButton}>{text}</Text>
            <Image source={image} style={styles.buttonIcon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: MyColors.primary,
        color: '#000000',
        marginVertical: 50,
        marginHorizontal: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 15,
        flexDirection: 'row',
    },
    textButton: {
        color: MyColors.background,
        fontSize: 19,
        marginLeft: 20
    },
    buttonIcon: {
        height: 30,
        width: 30
    }
})