import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";

const MyPostListStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    fabContainer: {
        width: 55,
        height: 55,
        backgroundColor: MyColors.primary,
        position: 'absolute',
        bottom: 25,
        right: 25,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fab: {
        width: 30,
        height: 30,
        alignSelf: 'center'
    }
});

export default MyPostListStyles;