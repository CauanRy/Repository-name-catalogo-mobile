import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ProductCard({ product, onPress }) {

return (

<TouchableOpacity style={styles.card} onPress={onPress}>

<Image
source={{ uri: product.thumbnail }}
style={styles.image}
/>

<Text numberOfLines={2} style={styles.title}>
{product.title}
</Text>

<Text style={styles.price}>
$ {product.price}
</Text>

</TouchableOpacity>

);

}

const styles = StyleSheet.create({

card:{
flex:1,
backgroundColor:"#fff",
margin:8,
padding:10,
borderRadius:12,
elevation:3
},

image:{
width:"100%",
height:120,
resizeMode:"contain"
},

title:{
fontSize:14,
marginTop:5
},

price:{
fontSize:16,
fontWeight:"bold",
color:"#2ecc71",
marginTop:5
}

});