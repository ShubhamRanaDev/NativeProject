import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./components/login";
import Register from "./components/register";
import MainScreen from "./screens/MainScreen";
import WeatherScreen from "./screens/WeatherScreen";
import useResults from "./hooks/useResults";
import { init } from './database/db';

init()
.then(()=>{
  console.log('Initializing Database');
})
.catch(err=>{
  console.log('db failed');
  console.log(err);
})

const navigation = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    MainScreen: MainScreen,
    Weather: WeatherScreen,
    Api: useResults
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Weather App",
    },
  }
);

export default createAppContainer(navigation);
