import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/pages/Main/index";
import Driving from "./src/pages/Driving/index";

const Stack = createStackNavigator();

/**
 * 초기 페이지를 Main으로 지정합니다.
 * Main과 Driving 페이지를 선언합니다.
 *
 * author jini
 */
const App = () => {
  return (
    <NavigationContainer initialRouteName="Main">
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Driving"
          component={Driving}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
