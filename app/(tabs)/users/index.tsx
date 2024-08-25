import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'

export default function Users() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={
                { light: '#A1CEDC', dark: '#1D3D47' }
            }
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                />
            }>
            <Button title='Add User' onPress={() => { console.log('Add User') }} />
            <View className='flex flex-col gap-3'>
                {Array.from({ length: 20 }).map((_, index) => (
                    <View key={index} className='border-gray-200 bg-neutral-100 p-4 border rounded-xl'>
                        <Text className="font-bold text-gray-700 text-lg">
                            John Doe {index + 1}
                        </Text>
                        <Text className="text-gray-500">
                            john{index + 1}@doe.example
                        </Text>
                        <Text className='mt-3 text-blue-500 hover:underline'>
                            View Profile
                        </Text>
                    </View>
                ))}
            </View>
        </ParallaxScrollView>
    )
}