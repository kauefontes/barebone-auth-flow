import { Text, View } from "react-native";
import { Button } from "../components/Button";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'

export function Settings(){
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Settings
            </Text>
            <Button 
                onPress={() => console.log('logout')}
                style={{backgroundColor: 'red'}}
                title='Log out'
            />
        </View>
    )
}