import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import ChatFaceData from "../Services/ChatFaceData";


const HomeScreen = () => {
  const [chatFaceData, setChatFaceData] = useState([]);
  const [selectedChatFaceData, setSelectedChatFaceData] = useState([]);

  useEffect(() => {
    setChatFaceData(ChatFaceData);
    setSelectedChatFaceData(ChatFaceData[0]);
  }, []);

  const onChatFacePress=(id)=>{
    setSelectedChatFaceData(ChatFaceData[id-1])//the selected one is auto removed from list
  }

  return (
    <View style={{ alignItems: "center", paddingTop: 90 }}>
      <Text style={[{ color: selectedChatFaceData.primary }, { fontSize: 25 }]}>
        Hello,
      </Text>
      <Text
        style={[
          { color: selectedChatFaceData.primary },
          { fontSize: 20, fontWeight: "bold" },
        ]}>
        I am {selectedChatFaceData.name}
      </Text>
      <Image
        source={{ uri: selectedChatFaceData.image }}
        style={{ height: 150, width: 150, marginTop: 20 }}/>

      <Text style={{ margin: 30, fontSize: 20 }}>How can I help you?</Text>

      {/* we have to show the unselected chatbots */}
      <View
        style={{
          marginTop: 100,
          backgroundColor: "#F5F5F5",
          alignItems: "center",
          height: 110,
          padding: 10,
          borderRadius: 10,
        }}>
        <FlatList
          data={chatFaceData}
          horizontal={true} //by default this is false
          //This condition checks if the id of the currently selected chat face (selectedChatFace.id) is not equal to the id of the current item being rendered (item.id). This condition ensures that the selected chat face is not rendered again in the list of unselected chatbots.
          renderItem={({ item }) =>
            selectedChatFaceData.id != item.id && (
          <TouchableOpacity style={{ margin: 15 }} onPress={()=>onChatFacePress(item.id)}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 40, height: 40 }}/>
              </TouchableOpacity>
            )}/>

    <Text style={{marginTop:5, fontSize:17, color:'#B0B0B0'}}>Choose your Chat Buddy</Text>

      </View>
            <TouchableOpacity style={[{backgroundColor:selectedChatFaceData.primary}, {marginTop:40, padding:17, borderRadius:100, width:Dimensions.get('screen').width*0.6, alignItems:'center',
            marginTop:50
          }]}>
                <Text style={{fontSize:16,color:'#fff'}}>Let's Chat</Text>
              </TouchableOpacity>
      
    </View>
  );
};

export default HomeScreen;

//setSelectedChatFaceData will help us to hold value for the selected
//chatface, so whatever chatface is selected, it will hold value for that one

//16:00
