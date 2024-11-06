import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{headerShown:false}}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Bem vindo',
            title: 'Bem vindo',
            drawerIcon:()=><Ionicons name="happy" size={18} color={'#3A98FF'}></Ionicons>
          }}
        />
        <Drawer.Screen
          name="primeiro" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
            drawerIcon:()=><Ionicons name="home-outline" size={18} color={'#3A98FF'}></Ionicons>
          }}
        />
        <Drawer.Screen
          name="contador" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'contador',
            title: 'contador',
            drawerIcon:()=><Ionicons name="timer" size={18} color={'#3A98FF'}></Ionicons>
          }}
        />
        <Drawer.Screen
          name="tabs" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Tabs',
            title: 'Home',
            drawerIcon:()=><Ionicons name="albums-outline" size={18} color={'#3A98FF'}></Ionicons>
          }}
        />
        <Drawer.Screen
          name="stack" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Stack',
            title: 'Home',
            drawerIcon:()=><Ionicons name="list" size={18} color={'#3A98FF'}></Ionicons>
          }}
        />
        <Drawer.Screen
          name="formulario" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Formularios',
            title: 'Home',
            drawerIcon:()=><Ionicons name="add" size={18} color={'#3A98FF'}></Ionicons>
          }}
        />
       
      </Drawer>
    </GestureHandlerRootView>
  );
}
