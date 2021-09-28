import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FetchProducts } from '../components/products/FetchProduct';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Product from '../components/products/Product';
import { styles } from './Style';

export default function HomeScreen({ navigation }) {

  // const users = [
  //   {
  //      name: 'brynn',
  //      avatar:'https://fakestoreapi.com/products'
  //   },
  //  ]
    return (
      <ScrollView> 
         
         <View style={{ flex: 1,padding: 30,margin: 10,marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
         <Product /> 

         

<Image style={{width: 240,height:190,backgroundColor: 'black'}} source={require('../assets/digital.webp')} />
    <FontAwesome5 name="facebook" color="red" />
      </View>
      </ScrollView>
      
     
    );
  }