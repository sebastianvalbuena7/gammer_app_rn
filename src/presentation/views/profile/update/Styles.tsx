import { Dimensions, StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";

const ProfileUpdateStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    backgroundImage: {
        width: Dimensions.get('screen').width,
        height: 300
    },
    darkness: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        width: Dimensions.get('screen').width,
        height: 300
    },
    title: {
        color: 'white',
        fontSize: 28,
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        top: 25
    },
    profileImage: {
        width: 130,
        height: 130,
        position: 'absolute',
        top: 230,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    usernameText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        marginTop: 100
    },
    emailText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 17
    },
    arrowBackContainer: {
        position: 'absolute',
        top: 55,
        left: 15
    },
    arrowBack: {
        width: 30,
        height: 30
    }
});

export default ProfileUpdateStyles;