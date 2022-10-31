
import { useState } from 'react';
import { Image, View } from 'react-native'
import { styles } from './styles';
import logo from '../assets/logo.png'
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          <Button title='Login'/>
      </View>
    );
}
