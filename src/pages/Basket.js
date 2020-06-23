import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../api';


function Basket(props){    

    const { client, basket } = props
    const [ item, setItem ]  = useState(props.item)  
    const [ itemId, setItemId ] = useState(basket.indexOf(item))
    const [ intemStyle, setItemStyle ] = useState({ color: '#ffffff'})

    useEffect(() => {
      
      console.log("Faith")
      // updateBasket({_id: client._id, basket: basket})      

    },[item])

    useEffect(() => {
      
    }, [client])

    async function updateBasket(data){
      console.log(data)
      const client = await api.put('/clients', data)
    }

    function changeState(state){    
        setItem({ _id:item._id, product:item.product, quantity:item.quantity, weight:item.weight, state:state })    
        updateBasket({_id:client._id, item_id:itemId, state:state})    
    }
  
    return ( 
          <View style={styles.container}> 
            <View style={styles.productContainer}>
              <Text style={styles.productValue}>{item.product}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityValue}>{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => {changeState(!item.state)}} style={styles.checkItem}>
                 <MaterialIcons name={item.state ? 'check-circle' : 'radio-button-unchecked'} size={30} style={intemStyle}/>
            </TouchableOpacity>
          </View>
     );
}

const styles = StyleSheet.create({
  container:{
    height: 80,
    marginTop: 0,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productContainer:{
    width: 210,
    height: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffaa0088',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 4,
    backgroundColor: '#e6e6e6',
  },
  productValue:{
    marginLeft: 10,

  },
  quantityContainer:{
    width: 60,
    height: 60,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffaa0088',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
  },
  quantityValue:{
    fontSize: 20,
  },
  checkItem:{
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  itemToDo:{
    color:"#ffffff",

  },
  itemDone:{
    color:"#00ff00",

  },
})

export default Basket;
