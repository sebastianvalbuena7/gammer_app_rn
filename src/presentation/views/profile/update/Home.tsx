// import { StackScreenProps } from "@react-navigation/stack";
// import { RootStackParamList } from "../../navigation/MainStackNavigator";
// import { ActivityIndicator, Text, View } from "react-native";
// import styles from './Styles';
// import { DefaultButton } from "../../components/DefaultButton";
// import DI from '../../../di/ioc';
// import { useEffect } from "react";
// import { MyColors, MyStyles } from "../../theme/AppTheme";

// interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> { };

// export const HomeScreen = ({ navigation, route }: Props) => {
//     const { result, setResult, error, setError, logout, loading } = DI.resolve('SignOutViewModel')

//     useEffect(() => {
//         if(result) navigation.replace('LoginScreen', {
//             key: '', props: '', type: ''
//         })
//     }, [result])

//     return (
//         <View style={styles.container}>
//             <DefaultButton text="Log Out" onPress={logout} />
//             {
//                 loading &&
//                 <ActivityIndicator size='large' color={MyColors.primary} style={MyStyles.stylesLoading} />
//             }
//         </View>
//     )
// }