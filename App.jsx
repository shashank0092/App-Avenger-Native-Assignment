import { PaperProvider } from "react-native-paper"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home from "./src/Pages/Home";
import History from "./src/Pages/History";
import Notification from "./src/Pages/Notification";
import LeftIcon from "./src/Components/LeftIcons";
import RightIocn from "./src/Components/RightIocn";
import Login from "./src/Pages/Login";
import CreateEvent from "./src/Pages/CreateEvent";
import { GlobalProvider } from "./src/context/Global";


const Stack = createNativeStackNavigator()

const App = () => {



  return (
    <NavigationContainer>
      <GlobalProvider>
        <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />



            <Stack.Screen name="Home"

              options={{
                headerBackVisible: false,
                headerLeft: () => (
                 <LeftIcon/>
                ),
                headerRight: () => (
                  <RightIocn />
                ),
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontWeight: "800"
                }
              }}
              component={Home} />


            <Stack.Screen name="History" component={History} 
            options={
            {
              headerTitleStyle:{
              fontWeight:"800"
            },
            headerTitleAlign:"center"
          
          }
            
            } />
            <Stack.Screen name="Notification" component={Notification} options={{
              headerTitleAlign: "center", headerTitleStyle: {
                fontWeight: "800"
              }
            }} />

            <Stack.Screen name="CreateEvent" component={CreateEvent} options={{
              headerShown:false
            }} />
          </Stack.Navigator>
        </PaperProvider>
      </GlobalProvider>
    </NavigationContainer>
  )
}

export default App;