
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Home from "./Home";
import TabNavigation from "./TabNavigation";
import { SplashScreen } from "./SplashScreen";
import SignUp from "./SignUp"
const Stack = createNativeStackNavigator();
export default function Root() {

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>

          <Stack.Screen name="Home" component={TabNavigation}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
};