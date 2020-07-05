import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../api';


function Basket(props){    

    const { client, item, index } = props
    const [ itemStatus, setState ]  = useState(item.itemStatus)    
    const [ intemStyle, setItemStyle ] = useState({ color: '#000'})   

    async function changeState(itemStatus){       
        await api.put('/clients', { _id:client._id, item_id:index, itemStatus:itemStatus })
        setState(itemStatus)
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
            <TouchableOpacity onPress={() => {changeState(!itemStatus)}} style={styles.checkItem}>
                 <MaterialIcons name={itemStatus ? 'check-circle' : 'radio-button-unchecked'} size={30} style={intemStyle}/>
            </TouchableOpacity>
          </View>
     );
}

const styles = StyleSheet.create({
  container:{
    height: 65,
    paddingBottom: 15,
    marginHorizontal: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
  },
  productContainer:{
    width: 200,
    // height: 60,
    // borderRadius: 5,
    // borderWidth: 2,
    // borderColor: '#ffaa0088',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginLeft: 4,
    // backgroundColor: '#e6e6e6',
  },
  productValue:{
    marginLeft: 10,

  },
  quantityContainer:{
    width: 60,
    // height: 60,
    // backgroundColor: '#e6e6e6',
    // borderRadius: 5,
    // borderWidth: 2,
    // borderColor: '#ffaa0088',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  quantityValue:{
    fontSize: 20,
  },
  checkItem:{
    marginLeft: 15,
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
