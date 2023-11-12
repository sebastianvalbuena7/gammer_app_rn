import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    title: {
        fontSize: 30,
        marginLeft: 30,
        color: MyColors.background
    },
    image: {
        width: 170,
        height: 170,
        transform: [{
            rotate: '35deg'
        }],
        alignSelf: 'flex-end'
    },
    textRegister: {
        marginTop: 20,
        fontSize: 16,
        color: MyColors.secondary,
        textAlign: 'center',
        marginBottom: 50
    },
    svgContainer: {
        backgroundColor: MyColors.primary,
        height: 310,
        paddingTop: 30
    },
    svg: {
        position: 'absolute',
        top: 145
    }
});

export default LoginStyles;