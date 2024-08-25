import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)
    const [input, setInput] = useState('')


    function incrementCount(counter = 1) {
        if (input) setCount(count + Number(input)), setInput('');
        else setCount(count + counter)
    }

    function decrementCount(counter = 1) {
        if (input) {
            setCount(count - Number(input))
            if (count <= 0) setCount(0)
            setInput('');
        }
        else {
            if (count <= 0) setCount(0)
            else setCount(count - counter)
        }
    }

    return (
        <View className='my-3'>
            <Text className='my-3 font-bold text-2xl text-center'>CountState: {count}</Text>
            <TextInput
                onChange={(e) => setInput(e.nativeEvent.text)}
                keyboardType='number-pad'
                value={input}
                placeholder='Enter Counter...'
                className='border-gray-400 px-4 py-2 border rounded-lg'
            />
            <View className='mt-2' />
            <Button title='Increment' onPress={() => incrementCount()} />
            <View className='mt-2' />
            <Button title='Decrement' onPress={() => decrementCount()} />
            <View className='mt-2' />
            <Button title='Reset' color={'red'} onPress={() => setCount(0)} />
        </View>
    )
}