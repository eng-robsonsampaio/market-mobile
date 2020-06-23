import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Basket from './Basket'

function Profile({ navigation }){

    const client = navigation.getParam('client')
    const { name, avatar, basket } = client;
    const [ screenWidth, setScreenWidth ] = useState(Dimensions.get('window').width);

      
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
                        <MaterialIcons name="phone-forwarded" size={30} color="#000"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatIcon}>
                        <MaterialIcons name="sms" size={30} color="#000"/>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={styles.subHeaders}>
                <TouchableOpacity onPress={()=>{console.log("tste")}}>
                    <Text style={styles.toDoList}> List </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{console.log("teste done")}}>
                    <Text style={styles.doneList}> Basket </Text>
                </TouchableOpacity>                
            </View> */}
        </View>
        <ScrollView >
                {
                    basket.map( item =>(
                        <Basket  
                            key={item._id} 
                            item={item} 
                            client={client}
                            basket={basket}/>
                     ))
                }                  
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
viewPager: {
    flex: 1
    },
    pageStyle: {
    alignItems: 'center',
    padding: 20,
    },
    container:{
        height: 120,
        backgroundColor: '#aaa',
        marginBottom: 3,
        justifyContent: 'center',

    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#006A4E",
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 4,
            height: 4,
        },
        marginLeft: 10,       
    },
    clientName:{
        width: 140,
        fontWeight: 'bold',
        fontSize: 23,
        marginLeft: 10,
    },
    contact:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    phoneIcon:{
        // backgroundColor: '#0000ff88',
    },
    chatIcon:{
        // backgroundColor: '#00ff0088',

    },
    subHeaders:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15,
        backgroundColor: '#ccc'
    },
    toDoList:{
        fontWeight: 'bold',
        color: '#4e4e4e',

    },
    doneList:{
        fontWeight: 'bold',
        color: '#4e4e4e',
    },
})

export default Profile;