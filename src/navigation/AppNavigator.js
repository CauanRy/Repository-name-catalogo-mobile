import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import ProductsScreen from "../screens/ProductsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){

return(

<NavigationContainer>

<Stack.Navigator>

<Stack.Screen
name="Login"
component={LoginScreen}
options={{headerShown:false}}
/>

<Stack.Screen
name="Products"
component={ProductsScreen}
options={({navigation})=>({

title:"Produtos",

headerRight:()=>(
<TouchableOpacity
onPress={()=>navigation.replace("Login")}
>
<Text style={{color:"red",fontWeight:"bold"}}>
Sair
</Text>
</TouchableOpacity>
)

})}
/>

<Stack.Screen
name="Details"
component={DetailsScreen}
options={{title:"Detalhes"}}
/>

</Stack.Navigator>

</NavigationContainer>

)

}