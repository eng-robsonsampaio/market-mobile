import { createAppContainer } from 'react-navigation';
import { createStackNavigator, CardStyleInterpolators  } from 'react-navigation-stack';
import { View } from 'react-native'


import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main, 
            navigationOptions:{
                title: 'Market',
                headerTitleAlign: 'center',
            },
        }, 
        
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'Basket',
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
                    height: 130,                                      
                },
                headerTitleStyle:{
                    fontFamily: 'Roboto',
                    fontSize: 40,
                }
            }
        })
);

export default Routes;