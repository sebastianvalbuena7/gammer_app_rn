import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";
import styles from './Styles';
import { TabParamList } from "../../../navigation/TabsNavigator";

interface Props extends StackScreenProps<TabParamList, 'MyPostListScreen'> { };

export const MyPostListScreen = ({ navigation, route }: Props) => {

    return (
        <View style={styles.container}>
            <Text>MyPostListScreen</Text>
        </View>
    )
}