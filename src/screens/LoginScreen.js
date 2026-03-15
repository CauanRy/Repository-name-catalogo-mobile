import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen({ navigation }) {

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

function handleLogin(){

if(!email || !senha){
alert("Preencha email e senha");
return;
}

navigation.replace("Products");

}

return(

<View style={styles.container}>

<Text style={styles.title}>
Catálogo de Produtos
</Text>

<TextInput
placeholder="Email"
value={email}
onChangeText={setEmail}
style={styles.input}
/>

<TextInput
placeholder="Senha"
secureTextEntry
value={senha}
onChangeText={setSenha}
style={styles.input}
/>

<TouchableOpacity style={styles.button} onPress={handleLogin}>
<Text style={styles.buttonText}>Entrar</Text>
</TouchableOpacity>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:20,
backgroundColor:"#f2f2f2"
},

title:{
fontSize:28,
fontWeight:"bold",
marginBottom:30,
textAlign:"center"
},

input:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
marginBottom:15
},

button:{
backgroundColor:"#3498db",
padding:15,
borderRadius:10,
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});