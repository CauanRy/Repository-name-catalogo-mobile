import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import ProductCard from "../../components/ProductCard";
import api from "../../services/api";

export default function WomensTab({ navigation }) {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{

api.get("/products/category/womens-dresses")
.then(response=>{
setProducts(response.data.products);
setLoading(false);
})

},[])

if(loading){
return(
<View style={{flex:1,justifyContent:"center"}}>
<ActivityIndicator size="large"/>
</View>
)
}

return(

<View style={{flex:1}}>

<FlatList
data={products}
keyExtractor={(item)=>item.id.toString()}
numColumns={2}

renderItem={({item})=>(
<ProductCard
product={item}
onPress={()=>navigation.navigate("Details",{id:item.id})}
/>
)}

/>

</View>

)

}