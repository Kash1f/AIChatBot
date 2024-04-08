import { View, Text } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (
    <View>
          <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    </View>
  )
}

export default ChatScreen