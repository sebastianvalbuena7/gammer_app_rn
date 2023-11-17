import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";
import styles from './Styles';
import { MyPostStackParamList } from "../../../navigation/MyPostStackNavigator";

interface Props extends StackScreenProps<MyPostStackParamList, 'PostCreateScreen'> { };

export const PostCreateScreen = ({ navigation, route }: Props) => {
    return (
        <View style={styles.container}>
            <Text>Post Create Screen</Text>
        </View>
    )
}