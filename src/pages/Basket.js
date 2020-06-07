import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function Basket({prod}){

    const [ intemStyle, setItemStyle] = useState({ color: '#ffffff'})
    const [ toDo, setTodo ] = useState(prod.state.toDo)
    const [ done, setDone ] = useState(prod.state.done)
    const [ block, setBlock ] = useState(prod.state.block)

function changeState(){
        if(toDo){
          setTodo(false);
          setDone(true);
          setItemStyle({ color: '#00ff00'})
        }
        else if(done){
          setDone(false);
          setBlock(true)
          setItemStyle({ color: '#ff0000'})
        }
        else if(block){
          setBlock(false);
          setTodo(true);
          setItemStyle({ color: '#ffffff'})
        }
        console.log({toDo, done, block})
      }
  
    return ( 
          <View style={styles.container}> 
            <View style={styles.productContainer}>
              <Text style={styles.productValue}>{prod.good}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityValue}>{prod.quant}</Text>
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
    // height: 30,
    // width: 30,
    // borderRadius: 5,
    // backgroundColor: '#e6e6e6',
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
  itemBlocked:{
    color:"#ff0000",

  },
})

export default Basket;
