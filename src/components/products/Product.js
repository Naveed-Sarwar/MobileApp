// import { useState } from "react"
import React from 'react'
import { View, Text,Image } from 'react-native'
import { FetchProducts } from '../products/FetchProduct'
export default function Product() {
    const [products]=FetchProducts()
    return (
        <View>
             <Text style={{textAlign: 'center',fontSize: 40}}>Product</Text>
             { products.map((item,index)=>{
    return(<View key={index}>
<Text>{item.title}</Text>   
<Image style={{width: 250,height: 200}} source={item.image} />  
      
<Text>{item.price}</Text>
<Text>{item.category}</Text>
</View>
)
    })
}
         
        </View>
    )
}
