import React from 'react';
import {Button,Text,View} from "react-native"
export default function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>dkvjlvkjl</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }