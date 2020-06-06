import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';

function HeaderProfile({nav}){
    return (
        <>
        <View style={styles.container}>
            <View style={styles.clientHeader}>   
                <Image 
                    style={styles.avatar} 
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/47099265?s=460&u=cd0f62c0e6c8912a1ddb3854ed79f9232289310f&v=4' }} />
                <Text style={styles.clientName}>Robson Sampaio</Text>
                <TouchableOpacity onPress={()=>{nav.navigate('Profile')}} style={styles.loadProfile} >
                    <MaterialIcons name='keyboard-arrow-right' size={40} color="#000"/>
                </TouchableOpacity>
            </View>
        </View>       
        </>
    )
}    

const styles = StyleSheet.create({
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
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 2
    },
    clientHeader:{
        flex: 0,
        height: 80,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ccc',

    },
    clientName:{
        width: 160,
        // backgroundColor: "#ddd",
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    loadProfile:{
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15

    },
})
 
export default HeaderProfile;