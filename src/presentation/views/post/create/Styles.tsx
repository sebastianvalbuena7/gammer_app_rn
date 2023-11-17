import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";

const PostCreateStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    backgroundImage: {
        height: '30%',
        width: '100%',
        backgroundColor: MyColors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectImage: {
        width: 130,
        height: 130
    },
    textImage: {
        fontSize: 20
    },
    textCategory: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20
    },
    arrowBackContainer: {
        position: 'absolute',
        top: 30,
        left: 30
    },
    arrowBack: {
        width: 30,
        height: 30
    }
});

export default PostCreateStyles;