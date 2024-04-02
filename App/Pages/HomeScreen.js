import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatFaceData from './Services/ChatFaceData'

const HomeScreen = () => {

    const [chatFaceData, setChatFaceData] = useState()
    const [selectedchatFaceData, setSelectedChatFaceData] = useState()

    useEffect(()=>{
        setChatFaceData(ChatFaceData)
        setSelectedChatFaceData(ChatFaceData[0])
    },[])

  return (
    <SafeAreaView style={{marginTop:40}}>
      <Text style={[{color:selectedchatFaceData.primary}]}>HomeScreen</Text>
      <Text> I am {selectedchatFaceData.name}</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

//setSelectedChatFaceData will help us to hold value for the selected
//chatface, so whatever chatface is selected, it will hold value for that one

//16:00