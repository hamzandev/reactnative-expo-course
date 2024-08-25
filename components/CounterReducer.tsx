import { View, Text, Button, TextInput } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function CounterReducer() {

    const [input, setInput] = useState('')

    const initialState = {
        counter: 0
    }
    function reducer(state: any, action: any) {
        switch (action.type) {
            case 'increment':
                if (input) {
                    const data = { counter: state.counter + Number(input) }
                    setInput('');
                    return data
                }
                else return { counter: state.counter + 1 }
            case 'decrement':
                if (input) {
                    const data = { counter: state.counter - Number(input) }
                    setInput('')
                    if (data.counter <= 0) return { counter: 0 }
                    else return data
                } else {
                    if (state.counter <= 0) return { counter: 0 }
                    else return { counter: state.counter - 1 }
                }
            default:
                return { counter: 0 }
        }
    }
    // @ts-ignore
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <View className='my-5'>
            <Text className='my-3 font-bold text-2xl text-center'>CounterReducer : {state.counter}</Text>
            <TextInput
                onChange={(e) => setInput(e.nativeEvent.text)}
                keyboardType='number-pad'
                value={input}
                placeholder='Enter Counter...'
                className='border-gray-400 px-4 py-2 border rounded-lg'
            />
            <View className="mt-2" />
            <Button title='Increment' onPress={() => dispatch({ type: 'increment' })} />
            <View className="mt-2" />
            <Button title='Decrement' onPress={() => dispatch({ type: 'decrement' })} />
            <View className="mt-2" />
            <Button title='Reset' color='red' onPress={() => dispatch({ type: 'reset' })} />
        </View>
    )
}