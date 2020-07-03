import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Basket from './Basket'

function Profile({ navigation }){

    const client = navigation.getParam('client')
    const { name, avatar } = client;
    const [ basket, setBasket ] = useState(client.basket)
    const [ screenWidth, setScreenWidth ] = useState(Dimensions.get('window').width);

    function updateBasket(id) {
        const newBasket = basket.map(item => {
          if(item._id == id){
              item.state = !item.state
              console.log(item)
          }
          return item
        })
        setBasket(newBasket)
    }

      
    return (
        <>
        <View style={styles.container}>
           <View style={styles.header}>
                 <Image 
                    style={styles.avatar} 
                    source={{ uri: avatar }} />
                <Text style={styles.clientName}>{ name }</Text>
            
                <View style={styles.contact}>
                    <TouchableOpacity style={styles.phoneIcon}>
                        <MaterialIcons name="shopping-cart" size={30} color="#FF5700"/>
                    </TouchableOpacity>
                </View> 
            </View>
        
            <View style={styles.subHeaders}>
                <TouchableOpacity onPress={()=>{console.log("tste")}}>
                    <Text style={styles.toDoList}> Produto </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{console.log("teste done")}}>
                    <Text style={styles.doneList}> Quantidade </Text>
                </TouchableOpacity>                
            </View>
        </View>
        <ScrollView >
                {
                    basket.map( (item, index) => (
                        <Basket  
                            key={item._id} 
                            item={item}
                            index={index} 
                            client={client}
                            updateBasket={updateBasket}/>
                     ))
                }                  
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    // viewPager: {
    //     flex: 1
    // },
    // pageStyle: {
    //     alignItems: 'center',
    //     padding: 20,
    // },
    container:{
        backgroundColor: '#FEC831',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 12,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 310,
        height: 77,
        backgroundColor: '#FFE9A1',
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 50,
        shadowOffset:{
            width: 4,
            height: 4,
        },
        marginLeft: 10,       
    },
    clientName:{
        width: 140,
        fontSize: 22,
        fontFamily: 'Roboto',
        marginLeft: 10,
    },
    contact:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    subHeaders:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 330,
        height: 34,
        marginTop: 5,
        backgroundColor: '#FFAD33'
    },
    toDoList:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',

    },
    doneList:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
})

export default Profile;