import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const foods = [
    {
        title: 'Kenkey',
        description:'Amazing African Kenkey dish with hot chili sauce',
        price:'$19.40',
        image: 'https://1.bp.blogspot.com/-GgKHt8aHFjs/YB7h_OH4qjI/AAAAAAAAuuk/sNgpzEbfuskpH_O2JUplZdOcT_fTy-B-gCNcBGAsYHQ/s632/KEMKEY-2.jpg'
    },
    {
        title: 'Jolof',
        description:'Outdoor food with chili and sspicy chicken cuisine',
        price:'$29.40',
        image: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_9901_96176.jpg'
    },
    {
        title: 'Waakyei',
        description:'Amazing African Waakye dish with hot chili sauce, egg gari and lo',
        price:'$19.40',
        image: 'https://miro.medium.com/max/1053/1*xl92hHDqKnBalWjAOYXprg.jpeg'
    },
    {
        title: 'Waakyei',
        description:'Amazing African Waakye dish with hot chili sauce, egg gari and lo',
        price:'$19.40',
        image: 'https://miro.medium.com/max/1053/1*xl92hHDqKnBalWjAOYXprg.jpeg'
    },
    {
        title: 'Jolof',
        description:'Amazing African Kenkey dish with hot chili sauce',
        price:'$29.40',
        image: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_9901_96176.jpg'
    },
]



export default function MenuItems(restaurantName) {
    const dispatch = useDispatch();

    const selectItem = (item, checkboxvalue) => dispatch({
    type: 'ADD_TO_CART', 
    payload: {
        ...item,
        restaurantName:restaurantName,
        checkboxvalue:  checkboxvalue,
    },
    });

    const cartItems = useSelector(state => state.cartReducer.selectedItems.items)
    const isFoodInCart = (food, cartItems) => (
        Boolean(cartItems.find((item) => item.title === food.title))
        )


    return (
     <ScrollView showsVerticalScrollIndicator={false}>
     {foods.map((food, index) => (
     <View key ={index}>
        <View style={styles.menuItemStyle} >
           <BouncyCheckbox 
              fillColor='#228b22' 
              size={28}
              isChecked = {isFoodInCart(food,cartItems)}
              onPress={(checkboxvalue)=>selectItem(food, checkboxvalue)}
              /> 
           <FoodInfo food={food}/>
           <FoodImage food={food} />
        </View>
        <Divider width={0.5}  color='#228b22' style={{marginHorizontal: 20}} />
     </View>
     ))}   
     </ScrollView>
    )
}


const FoodInfo = (props)=> (
   <View style={styles.FoodInfo}>
      <Text style={styles.title}>{props.food.title}</Text> 
      <Text>{props.food.description}</Text> 
      <Text>{props.food.price}</Text> 
   </View>
)

const FoodImage = (props)=> (
    <View>
        <Image 
          source={{uri: props.food.image}}
          style={{width: 100, height: 100, borderRadius: 8}}
        />
    </View>
  )




const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    FoodInfo:{
        width: 240,
        justifyContent: 'space-evenly',
    },
    title:{
        fontSize: 19,
        fontWeight: '700'
    }
})