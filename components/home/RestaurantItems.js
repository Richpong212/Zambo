import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export const localRestaurant=[
    {
        name: 'Many3s Kitchen',
        image_url: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=',
        categories: ['Cafe','Bar'],
        price:'$$',
        waitingTime: '20 - 30',
        reviews: 1244,
        rating: 5.4
    },
    {
        name: 'Dan Boy Boys',
        image_url: 'https://thespaces.com/wp-content/uploads/2016/11/108-restaurant-interior-Denmark.jpg',
        categories: ['Cafe','Bar'],
        price:'$$',
        waitingTime: '15 - 40',
        reviews: 244,
        rating: 3.4
    },
    {
        name: 'Rambo Cafe',
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        categories: ['Cafe','Bar'],
        price:'$$',
        reviews: 1344,
        rating: 4.4
    },
    {
        name: 'Money Club',
        image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        categories: ['Cafe','Bar'],
        price:'$$',
        reviews: 1044,
        rating: 4.4
    },
    {
        name: 'Grill House',
        image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/14/6b/33/cb/siglodoce.jpg',
        categories: ['Grill','Bar'],
        price:'$$',
        reviews: 144,
        rating: 4.4
    },
    {
        name: 'Chicken Wings',
        image_url: 'https://i2.wp.com/buythiscookthat.com/wp-content/uploads/2016/04/BBQ-Chicken-Wings-9.jpg',
        categories: ['Grill','Bar'],
        price:'$$',
        reviews: 2664,
        rating: 3.4
    },
]



export default function RestaurantItems({navigation,...props}) {
    return (
   <>
    {props.restaurantData.map((restaurant, index) => (
     <TouchableOpacity activeOpacity={0.6} 
     style={{
         marginBottom: 20,
     }}
     key={index}
     onPress={()=>navigation.navigate('RestaurantDetail',{
         name: restaurant.name,
         image: restaurant.image_url,
         price: restaurant.price,
         reviews: restaurant.reviews,
         rating:  restaurant.rating,
         categories: restaurant.categories,
     })}
     >
        <View style={styles.RestaurantItems} > 
            {<RestaurantImage image={restaurant.image_url} />}
            {<RestaurantInfo name={restaurant.name} rating={restaurant.rating} />}
        </View>
      </TouchableOpacity>
      ))}
  </>
    )
}

const RestaurantImage = (props)=> (
  <>  
    <Image source={{ uri:props.image}} 
    style={styles.imgstyle}
    />
  </>
)

const RestaurantInfo = (props)=> (
    <View style={styles.restaurantinfo}>
        <View>
          <Text style={styles.headerText} >{props.name}</Text>
          <Text>Outdoor Seats, Free Wifi</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
           <Text>5.00</Text> 
           <Icon
            name='star'
            size={20}
            color='#228b22'
            />
            <Text>{props.rating}</Text>
        </View>
    </View>
)






const styles = StyleSheet.create({
    imgstyle:{
        height: 180,
        width: '100%'
    },
    restaurantinfo:{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText:{
        fontSize: 20,
        fontWeight: '800',
    },
    RestaurantItems:{
            marginTop: 10, 
            padding: 15,
            backgroundColor:'white',
    },
})