import { StackScreenProps } from "@react-navigation/stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './Styles';
import { MyPostStackParamList } from "../../../navigation/MyPostStackNavigator";

interface Props extends StackScreenProps<MyPostStackParamList, 'MyPostListScreen'> { };

export const MyPostListScreen = ({ navigation, route }: Props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('PostCreateScreen')} style={styles.fabContainer}>
                <Image source={require('../../../../../assets/img/add.png')} style={styles.fab}/>
            </TouchableOpacity>
        </View>
    )
}