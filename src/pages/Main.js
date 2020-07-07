import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProfileCard from './ProfileCard';
import api from '../api';


function Main({ navigation }){
    const [clients, setClients] = useState([])

    useEffect( () => {
        async function loadClients(){
            const response = await api.get('/clients')
            // console.log(response.data)
            setClients(response.data)
        }

        loadClients()        
        
    },[]);

    return (
        <ScrollView>
            {
                clients.map(client => (
                    client.clientStatus == false ?
                    <ProfileCard
                        key={client._id} 
                        navigation={navigation}
                        client={client}/> : <View key={client._id}></View>
                ))
            }         
        </ScrollView>
        
    )
}

export default Main;