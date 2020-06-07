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
        
        // console.log(response.data)
        setClients(response.data)
    }

    return (
        <ScrollView>
            {
                clients.map(client => (
                    // console.log(client.basket)
                    <HeaderProfile 
                        key={client._id} 
                        nav={navigation}
                        client={client}/>
                ))
            }         
        </ScrollView>
        
    )
}

export default Main;