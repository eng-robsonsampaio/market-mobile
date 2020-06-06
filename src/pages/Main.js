import React from 'react';
import { View } from 'react-native';

import HeaderProfile from './HeaderProfile'

function Main({ navigation }){
    return (
        
        <View>
            <HeaderProfile nav={navigation}/>
        </View>
        
    )
}

export default Main;