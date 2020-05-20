import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/login';
import Register from './components/register';
import MainScreen from "./screens/MainScreen";


const navigation = createStackNavigator({
    Login: Login,
    Register: Register,
    MainScreen : MainScreen
},{
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
        title: 'Weather App'
    }
})

export  default createAppContainer(navigation);
