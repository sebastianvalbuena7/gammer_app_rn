import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
    onPress: () => void,
    selected: boolean,
    children: string,
    image?: any
}

export const RadioButton = ({ onPress, selected, children, image }: Props) => {
    return (
        <View style={styles.radioButtonContainer}>
            <TouchableOpacity onPress={onPress} style={styles.radioButton}>
                {
                    selected
                        ? <View style={styles.radioButtonIcon} />
                        : null
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.radioButtonText}>{children}</Text>
            </TouchableOpacity>
            <Image
                source={image}
                style={styles.icon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45,
        marginLeft: 20,
        marginTop: 15,
        top: 20
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center",
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: MyColors.primary
    },
    radioButtonText: {
        width: 120,
        fontSize: 16,
        marginLeft: 16,
        color: 'white'
    },
    icon: {
        width: 27,
        height: 27,
    }
})

