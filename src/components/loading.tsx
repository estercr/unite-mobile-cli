import React from 'react';
import {ActivityIndicator} from 'react-native';

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-green-950 items-center justify-center" />
  );
}
