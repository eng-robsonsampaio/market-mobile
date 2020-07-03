import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, CardStyleInterpolators  } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main, 
            navigationOptions:{
                title: 'Market',
                headerTitleAlign: 'left',
            },
        }, 
        
        Profile:{
            screen: Profile,
            navigationOptions:{                
                headerTitle: 'Profile',
                headerTitleAlign: 'center',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,   
                 
            },
        },
    },
        {
            defaultNavigationOptions:{
                headerBackTitleVisible: null,
                headerTintColor: '#fff',
                headerStyle:{
                    backgroundColor: '#FEC831', 
                    height: 60,
                    elevation: 0,
                },
                headerTitleStyle:{
                    fontFamily: 'Roboto',
                    fontSize: 30,  
                    
                    fontWeight: "bold"
                }
            }
        })
);

export default Routes;