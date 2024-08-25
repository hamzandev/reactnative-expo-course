import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function TodoForm({ handleAddTodo, input, setInput }: any) {
  return (
    <View className="my-3">
      <Text className="font-bold text-center text-lg">Add Todo</Text>
      <View className="mt-3" />
      <TextInput
        onChange={(e) => setInput(e.nativeEvent.text)}
        value={input}
        placeholder='New todo...'
        className='border-gray-400 px-4 py-2 border rounded-lg'
      />
      <View className="mt-3" />
      <Button onPress={handleAddTodo} color='#1D3D47' title="Add Todo" />
    </View>
  )
}