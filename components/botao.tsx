import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export interface BotaoProps{
    children:React.ReactNode,
    onPress:()=>void
}
export default function Botao(props:BotaoProps) {
  return (
    <Pressable style={styles.botao} onPress={props.onPress}>
        {props.children}
    </Pressable>
  )
}

const styles=StyleSheet.create({
    botao:{
        backgroundColor:'#3A7EFF',
        borderRadius:5,
        color:'white',
        paddingHorizontal:10,
        paddingVertical:5
    }
})