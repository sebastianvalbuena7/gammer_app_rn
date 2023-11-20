import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";

const PostDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    postImage: {
        width: '100%',
        height: '30%'
    },
    userContainer: {
        flexDirection: 'row',
        backgroundColor: '#2b2d37',
        borderRadius: 10,
        margin: 20,
        padding: 15
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    username: {
        color: 'white',
        fontSize: 17
    },
    email: {
        color: 'white'
    },
    userInfo: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    postName: {
        color: MyColors.primary,
        fontSize: 19,
        marginLeft: 20
    },
    categoryContainer: {
        backgroundColor: '#2b2d37',
        width: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        borderRadius: 20,
        padding: 5,
        marginTop: 15
    },
    categoryImage: {
        height: 30,
        width: 30
    },
    textCategory: {
        color: 'white',
        marginLeft: 7
    },
    divider: {
        alignSelf: 'center',
        width: '90%',
        height: 1,
        backgroundColor: '#2b2d37',
        marginTop: 20
    },
    descriptionTitle: {
        color: 'white',
        fontSize: 19,
        marginLeft: 20,
        marginTop: 15
    },
    description: {
        color: 'white',
        marginLeft: 20,
        marginTop: 10
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

export default PostDetailStyles;