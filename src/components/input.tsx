import React, {ReactNode} from 'react';
import {TextInput, View, TextInputProps} from 'react-native';
import {colors} from '../styles/colors';

function Input({children}: {children: ReactNode}) {
  return (
    <View className="w-full h-11 flex-row items-center p-2 border border-green-300/20 rounded-lg">
      {children}
    </View>
  );
}

function Field({...rest}: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-white text-base px-2 pb-1.5"
      placeholderTextColor={colors.gray[200]}
      {...rest}
    />
  );
}

Input.Field = Field;

export {Input};
