import { StyleSheet } from 'react-native';
import { MyColors } from '../../../theme/AppTheme';

const stylesRegister =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    svgContainer: {
        backgroundColor: MyColors.primary,
        height: 250,
        paddingTop: 30
    },
    svg: {
        position: 'absolute',
        top: 85
    },
    title: {
        fontSize: 30,
        marginLeft: 50,
        color: MyColors.background
    },
    image: {
        width: 130,
        height: 130,
        transform: [{
            rotate: '35deg'
        }],
        alignSelf: 'flex-end'
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

export default stylesRegister;