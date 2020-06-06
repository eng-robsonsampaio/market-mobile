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
                headerTitleAlign: 'center',
            },
        }, 
        
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'Client',
                headerTitleAlign: 'center',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                
                
            },
        },
    },
        {
            defaultNavigationOptions:{
                headerBackTitleVisible: null,
                headerTintColor: '#000',
                headerStyle:{
                    backgroundColor: '#FCAF03'
                },
            }
        })
);

export default Routes;