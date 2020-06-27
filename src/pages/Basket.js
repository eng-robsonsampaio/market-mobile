import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../api';


function Basket(props){    

    const { client, item, index } = props
    const [ state, setState ]  = useState(item.state)    
    const [ intemStyle, setItemStyle ] = useState({ color: '#ffffff'})   

    async function changeState(state){       
        await api.put('/clients', { _id:client._id, item_id:index, state:state })
        setState(state)
        props.updateBasket(item._id)
    }
  
    return ( 
          <View style={styles.container}> 
            <View style={styles.productContainer}>
              <Text style={styles.productValue}>{item.product}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityValue}>{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => {changeState(!state)}} style={styles.checkItem}>
                 <MaterialIcons name={state ? 'check-box' : 'check-box-outline-blank'} size={30} style={intemStyle}/>
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
