import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';

function ProfileCard({ client, navigation}){


    return (
        <>
        <View style={styles.container}>
            <View style={styles.clientHeader}>   
                <Image 
                    style={styles.avatar} 
                    source={{ uri: client.avatar }} />
                <View style={styles.nameAndGoods}>
                    <Text style={styles.clientName}>{client.name}</Text>
                    <Text style={styles.basketLenght}>Cesta com {client.basket.length} itens</Text>
                </View>
                <TouchableOpacity 
                    onPress={() => 
                    {
                        navigation.navigate('Profile', { 
                        client: client,
                    });
                    }} 
                     style={styles.loadProfile} >
                    <MaterialIcons name='keyboard-arrow-right' size={40} color="#FF9B04"/>
                </TouchableOpacity>
            </View>
        </View>       
        </>
    )
}    

const styles = StyleSheet.create({
    // viewPager: {
    //     flex: 1
    // },
    // pageStyle: {
    //     alignItems: 'center',
    //     // padding: 20,
    //     backgroundColor: '#FEC831'
    // },
    avatar:{
        width: 59,
        height: 59,
        borderRadius: 50,
        borderWidth: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 4,
            height: 4,
        },
        marginLeft: 10,       
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        elevation: 5,
        
    },
    clientHeader:{
        flex: 0,
        height: 80,
        width: 310,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFE9A1',

    },
    nameAndGoods:{
        flex: 0,
        justifyContent: 'space-between',
        alignContent: 'center'
        
    },
    clientName:{
        width: 160,
        // backgroundColor: "#ddd",
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5,
    },
    basketLenght: {
        color: '#706E6E',
        fontSize: 15,
        marginLeft: 5,
    },
    loadProfile:{
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 35

    },
})
 
export default ProfileCard;