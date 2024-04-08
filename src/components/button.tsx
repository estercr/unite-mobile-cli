import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({title, isLoading = false, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      className="w-full h-12 mt-4 bg-orange-500 items-center justify-center rounded-lg"
      {...rest}>
      {isLoading ? (
        <ActivityIndicator className="text-green-900" />
      ) : (
        <Text className="text-gray-900 text-base font-bold uppercase">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
