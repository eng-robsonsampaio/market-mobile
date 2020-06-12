import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import HeaderProfile from './HeaderProfile';
import api from '../api';


function Main({ navigation }){
    const [clients, setClients] = useState([])

    useEffect( () => {
        loadClients()
    },[]);

    async function loadClients(){
        const response = await api.get('/clients')
        setClients(response.data)
    }

    return (
        <ScrollView>
            {
                clients.map(client => (
                    <HeaderProfile 
                        key={client._id} 
                        navigation={navigation}
                        client={client}/>
                ))
            }         
        </ScrollView>
        
    )
}

export default Main;