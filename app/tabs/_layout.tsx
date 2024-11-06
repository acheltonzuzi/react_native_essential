import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Layout(props: any) {
    const nav:any=useNavigation()
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name='index' options={{ title: 'Inicio', tabBarIcon: () => <Ionicons name='home-outline' size={18}></Ionicons> }}>

            </Tabs.Screen>
            <Tabs.Screen name='cursos' options={{ title: 'Cursos', tabBarIcon: () => <Ionicons name='play-circle-outline' size={18}></Ionicons> }}>

            </Tabs.Screen>
            <Tabs.Screen name='config' options={{ title: 'Settings', tabBarIcon: () => <Ionicons name='settings-outline' size={18}></Ionicons> }}>

            </Tabs.Screen>
            <Tabs.Screen name='mais' options={{ title: 'Mais', tabBarIcon: () => <Ionicons name='menu' size={18}></Ionicons> }} listeners={{tabPress:(e)=>{
                e.preventDefault()
                nav?.openDrawer()
            }}}>

            </Tabs.Screen>
        </Tabs>
    )
}