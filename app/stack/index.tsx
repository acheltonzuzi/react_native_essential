import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styles from '@/constants/styles'

export default function index() {
  return (
    <View style={styles.styles.centralizado}>
      <Text>Tela Inicial</Text>
      <Link href={'stack/nova'} style={{color:"blue",fontSize:30}}>Ir para tela nova</Link>
    </View>
  )
}