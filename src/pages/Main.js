import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProfileCard from './ProfileCard';
import api from '../api';


function Main({ navigation }){
    const [clients, setClients] = useState([])

    function updateClients(clientID){
        const newClients = clients.map((client) => {
          if(client._id === clientID){
              client.clientStatus = true
          }
          return client;
        })
        setClients(newClients)
    }

    function showClient(client, navigation) {
        if( client.clientStatus === false ){
            return(
                <ProfileCard
                    key={client._id} 
                    updateClients={updateClients}
                    navigation={navigation}
                    client={client}/>)
        }    
    }

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
                    showClient(client, navigation)
                ))
            }         
        </ScrollView>
        
    )
}

export default Main;