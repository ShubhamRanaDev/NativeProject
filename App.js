import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./components/login";
import Register from "./components/register";
import MainScreen from "./screens/MainScreen";
import WeatherScreen from "./screens/WeatherScreen";

const navigation = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    MainScreen: MainScreen,
    Weather: WeatherScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Weather App",
    },
  }
);

export default createAppContainer(navigation);
