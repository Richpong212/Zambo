import React, { useState } from 'react'
import { View, Text, SafeAreaView,StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurant } from '../components/home/RestaurantItems'


export default function Home({navigation}) {
    const [restaurantData,setRestaurantData] = useState(localRestaurant)

    return (
        <SafeAreaView style={styles.container}>
           <ScrollView showsVerticalScrollIndicator={false}> 
             <Categories />
             <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
           </ScrollView> 
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#f8f8ff',
     },
})