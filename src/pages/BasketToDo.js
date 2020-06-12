import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Basket from './Basket'


function BasketToDo(props){

    const { client } = props
    
    return ( 
        <>
            {
                client.basket.map(prod=>(
                    prod.state.state ?
                    <Basket key={prod._id} 
                        prod={
                            {
                                good: prod.product, 
                                quant: prod.quantity, 
                                state: prod.state,
                            }}/> : <></>
                ))

            }
        </>
     );
}
 
export default BasketToDo;