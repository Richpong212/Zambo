import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];




export default function Categories() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Popular Categories</Text> 
        <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
        {items.map((item, index) =>( 
         <TouchableOpacity style={{
               marginVertical: 10,
               marginHorizontal: 10,
               
           }}
           key={index}
           >
            <View style={styles.imgContainer}>
               <Image source={item.image} style={styles.imageStyle}/>
            </View>
              <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
          ))} 
         </ScrollView>  
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageStyle:{
        height: 60,
        width: 60,
    },
    imgContainer:{
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: '#228b22',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
   text:{
       marginLeft: 10,
       fontSize: 15,
       fontWeight: '400'
   }
})