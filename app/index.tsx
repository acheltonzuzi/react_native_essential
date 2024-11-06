import Botao from "@/components/botao";
import { Ionicons } from "@expo/vector-icons";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:20
      }}
    >
    <Ionicons name='logo-react' size={100}></Ionicons>
    <View style={{alignItems:'center',gap:10}}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Masterclass React Native</Text>
    <Text>Kamba Code Conference</Text>
    <Botao onPress={()=>{}}>
      <Text style={{color:'white'}}>Saber mais</Text>
    </Botao>


    </View>
    </View>
  );
}
