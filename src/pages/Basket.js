import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Basket(props){    

    const [ intemStyle, setItemStyle ] = useState({ color: '#ffffff'})
    const [ state, setState ] = useState(props.item.state)  
    const [ item, setItem ]  = useState(props.item)

    useEffect(()=>{
      
    },[])
    
    function changeState(){
      setState(!state)
      setItem({ _id:item._id, product:item.product, quantity:item.quantity, weight:item.weight, state:state })
      props.changeState([item])
      
    }
  
    return ( 
          <View style={styles.container}> 
            <View style={styles.productContainer}>
              <Text style={styles.productValue}>{item.product}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityValue}>{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={()=>{changeState()}} style={styles.checkItem}>
                 <MaterialIcons name='fiber-manual-record' size={30} style={intemStyle}/>
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
