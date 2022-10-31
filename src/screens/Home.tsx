import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { Button } from '../components/Button';
import { styles } from './styles';

export function Home() {
  const navigation = useNavigation()
    return (
        <View style={styles.container}>
        <Text style={styles.title}>
          Restricted to authenticated users
        </Text>
        <Button 
          onPress={() => navigation.navigate('Settings')}
          title='Settings'
        />
        <Text>
          by <Text style={styles.quewuiText}>Quewui</Text>
        </Text>
      </View>
    );
}
