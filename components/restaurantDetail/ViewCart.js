import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'


export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false)

   const {items, restaurantName} = useSelector(
     (state)=>state.cartReducer.selectedItems
     );

   const total = items.map((item=> Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0)

   const totalUSD = total.toLocaleString('en', {
     styles: 'currency',
     currency: 'USD',
   });

   
 

   
   const checkoutModalContent = () => {
      return(
        <>
          <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
              {/* <Text style={styles.restaurantName}>{restaurantName}</Text> */}
              {items.map((item, index) => (
                <OrderItem 
                  key={index}
                  item={item}
                 />
              ))}
              <View style={styles.subtotalContainer}>
                 <Text style={styles.subtotalText}>Subtotal</Text>
                 <Text>${totalUSD}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity 
                    style={{
                        marginTop: 20,
                        backgroundColor: 'black',
                        alignItems: 'center',
                        padding: 13,
                        borderRadius: 30,
                        width: 300,
                        position: 'relative',
                    }}
                    onPress={()=> {
                      addOrderToFireStore();
                    }}
                  >
                       <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                       <Text style={{
                         color: 'white', 
                         position: 'absolute', 
                         right:20,
                         fontSize: 15,
                         top: 17,
                         }}>$ {total ? totalUSD : ''}</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )
   }

    return (
      <>
      <Modal animationType='slide' 
             visible={modalVisible} 
             transparent={true}
             onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
      <View  style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 130,
          zIndex: 999
      }}>
        <View
           style={{
               flexDirection: 'row',
               justifyContent: 'center',
               width: '100%'
           }}
        >
           <TouchableOpacity
             style={styles.buttonStyle}
             onPress={()=> setModalVisible(true)}
           >
              <Text style={styles.viewcartStyles} >View Cart</Text>
              <Text style={{color: 'white', fontSize: 20}}>$ {totalUSD}</Text>
           </TouchableOpacity>
        </View>
      </View>
      ): (<></>)}
      </>
    )
}



const styles = StyleSheet.create({
    viewcartStyles: {
         color: 'white',
         fontSize: 20,
         marginRight: 30
    },
    buttonStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15, 
         marginTop: 20,
         backgroundColor: 'black',
         alignItems: 'center',
         borderRadius: 30,
         width: 300,
         position: 'relative',
    },
    modalContainer: {
         flex: 1,
         justifyContent: 'flex-end',
         borderBottomColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 15,
    },
    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
    },
})