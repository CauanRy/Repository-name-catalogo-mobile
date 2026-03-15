import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MensTab from "./tabs/MensTab";
import WomensTab from "./tabs/WomensTab";

const Tab = createMaterialTopTabNavigator();

export default function ProductsScreen(){

return(

<Tab.Navigator>

<Tab.Screen
name="Masculino"
component={MensTab}
/>

<Tab.Screen
name="Feminino"
component={WomensTab}
/>

</Tab.Navigator>

)

}