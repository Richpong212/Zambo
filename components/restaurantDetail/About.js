import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const yelpRestaurantnfo = {
    name: 'Many3 Kitchen',
    image : 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=',
    price: '$$',
    reviews: '1500',
    rating: 5.3,
    categories: [{title: 'African'}, {title: 'Comfort Food'},{title: 'Toboer'}],
}




export default function About(props) {
    const {name, image, price, reviews, rating, categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join('•')

    const description = `${formattedCategories} ${price? ' • ' + price: ''} • ${rating} ** (${reviews})`


    return (
        <View>
            <RestaurantImage image = {image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}


const RestaurantImage =(props)=>(
    <Image 
      source={{uri: props.image}}
      style={{width: '100%', height: 180,}}
    />
)

const RestaurantName =(props)=>(
    <Text style={styles.Titletxt}>{props.name}</Text>
)

const RestaurantDescription =(props)=>(
    <Text style={styles.description}>{props.description}</Text>
)



const styles = StyleSheet.create({
    Titletxt: {
        fontWeight: '700',
        fontSize: 29,
        marginTop: 10,
        marginHorizontal: 15,
    },
    description: {
        fontSize: 15,
        marginHorizontal: 10,
        marginTop: 10,
    }
})
