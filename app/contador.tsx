import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styles from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import Botao from '@/components/botao'

export default function TelaContador() {
    const [counter,setCounter] =useState(0)
    const contar=(sinal:string)=>{
        if(sinal=='+'){
            setCounter(()=>counter+1)
        }
        else{
            setCounter(()=>counter-1)

        }
    }
  return (
    <View style={styles.styles.centralizado}>
      <Text style={{fontSize:20}}>Contador: {counter}</Text>
      <View style={{flexDirection:'row',gap:10}}>
        
        <Botao onPress={()=>contar('-')}>
            <Ionicons name='remove' size={30} color={'white' }></Ionicons>
        </Botao>
        <Botao onPress={()=>contar('+')}>
            <Ionicons name='add' size={30} color={'white' }></Ionicons>
        </Botao>
      </View>
    </View>
  )
}