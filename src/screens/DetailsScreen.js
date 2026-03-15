import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import api from "../services/api";

export default function DetailsScreen({ route }) {

const { id } = route.params;
const [product, setProduct] = useState(null);

useEffect(()=>{

api.get(`/products/${id}`)
.then(response=>{
setProduct(response.data);
})

},[])

if(!product){
return null;
}

return(

<ScrollView style={styles.container}>

<Image
source={{uri:product.thumbnail}}
style={styles.image}
/>

<View style={styles.card}>

<Text style={styles.title}>
{product.title}
</Text>

<Text style={styles.description}>
{product.description}
</Text>

<Text style={styles.price}>
$ {product.price}
</Text>

<View style={styles.discountBox}>
<Text style={styles.discount}>
-{product.discountPercentage}%
</Text>
</View>

<TouchableOpacity
style={styles.buyButton}
onPress={()=>alert("Produto comprado!")}
>

<Text style={styles.buyText}>
Comprar
</Text>

</TouchableOpacity>

</View>

</ScrollView>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f2f2f2"
},

image:{
width:"100%",
height:300,
resizeMode:"contain",
backgroundColor:"#fff"
},

card:{
backgroundColor:"#fff",
padding:20,
borderTopLeftRadius:20,
borderTopRightRadius:20,
marginTop:-20
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:10
},

description:{
fontSize:16,
color:"#555",
marginBottom:20
},

price:{
fontSize:26,
fontWeight:"bold",
color:"#2ecc71",
marginBottom:10
},

discountBox:{
backgroundColor:"#e74c3c",
alignSelf:"flex-start",
paddingHorizontal:10,
paddingVertical:5,
borderRadius:8,
marginBottom:20
},

discount:{
color:"#fff",
fontWeight:"bold"
},

buyButton:{
backgroundColor:"#27ae60",
padding:15,
borderRadius:10,
alignItems:"center"
},

buyText:{
color:"#fff",
fontSize:18,
fontWeight:"bold"
}

});