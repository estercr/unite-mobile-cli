import React from 'react';
import {View, Image} from 'react-native';
import {Input} from '../components/input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../styles/colors';
import {Button} from '../components/button';

export default function Home() {
  return (
    <View className="flex-1 bg-green-950 items-center justify-center p-8">
      <Image
        source={require('../assets/logo.png')}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full mt-10">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Código do usuário" />
        </Input>

        <Button title="Acessar credencial" />
      </View>
    </View>
  );
}
