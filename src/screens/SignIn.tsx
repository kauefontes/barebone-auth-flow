
import { useContext, useState } from 'react';
import { Image, View } from 'react-native'
import { styles } from './styles';
import logo from '../assets/logo.png'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useAuth } from '../contexts/Auth';

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

    return (
        <View style={[styles.container, {justifyContent: 'center'}]}>
          <Image
            style={{width: 100, height: 100}}
            resizeMode='contain'
            source={logo}
          />
          <Input 
            placeholder='name@email.com'
            value={email}
            onChangeText={setEmail}
          />
          <Input
            secureTextEntry
            placeholder='password'
            value={password}
            onChangeText={setPassword}
          />
          <Button
            onPress={() => signIn(email, password)}
            title='Login'
           />
      </View>
    );
}
