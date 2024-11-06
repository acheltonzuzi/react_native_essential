import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '@/constants/styles'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function formulario() {
    const [usuario,setUsuario]=useState<any>({})
    const [error,setError]=useState<any>({})
    const salvar=()=>{
        AsyncStorage.setItem('usuario',JSON.stringify(usuario))
    }

    useEffect(()=>{
        AsyncStorage.getItem('usuario').then((usuario)=>{
            if(usuario){
                setUsuario(JSON.parse(usuario))
            }
        })
    },[])
  return (
    <View style={styles.styles.centralizado}>
      <Text>formulario</Text>
      <TextInput value={usuario.nome} onChangeText={(nome)=>setUsuario({...usuario,nome})} placeholder='escreva ...' style={[styles.styles.input, error.nome && styles.styles.input_error]}></TextInput>
      <TextInput placeholder='senha' keyboardType='numeric' style={[styles.styles.input, error.nome && styles.styles.input_error]}></TextInput>
      {error.nome && <Text style={{color:'red'}}>{error.nome}</Text>}
      <Button onPress={salvar} title='Salvar'/>
    </View>
  )
}