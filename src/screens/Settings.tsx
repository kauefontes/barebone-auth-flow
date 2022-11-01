import { Text, View } from "react-native";
import { Button } from "../components/Button";
import { styles } from "./styles";
import { useAuth } from "../contexts/Auth";

export function Settings(){
    const { signOut } = useAuth()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Settings
            </Text>
            <Button 
                onPress={signOut}
                style={{backgroundColor: 'red'}}
                title='Log out'
            />
        </View>
    )
}