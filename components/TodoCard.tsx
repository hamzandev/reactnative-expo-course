import { View, Text, Button } from 'react-native'
import React from 'react'

export default function TodoCard({ todo, handleDelete, handleMarkAsComplete }: any) {
  return (
    <View className='border-gray-200 bg-neutral-100 my-2 p-4 border rounded-xl'>
      <Text className='font-bold text-2xl text-blue-500'>
        {todo.title}
      </Text>
      <Text className={`${todo.status == 'completed' ? 'text-green-500' : 'text-gray-400'}  italic capitalize`}>
        {todo.status}
      </Text>
      <View className="mt-3" />
      {
        todo.status == 'uncompleted' &&
        <Button
          title="Mark as Complete"
          onPress={handleMarkAsComplete}
        />
      }
      <View className="mt-3" />
      <Button
        color={'red'} title="delete"
        onPress={handleDelete}
      />
    </View>
  )
}