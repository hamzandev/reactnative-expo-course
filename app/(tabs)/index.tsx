import Counter from '@/components/Counter'
import CounterReducer from '@/components/CounterReducer'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import React from 'react'
import { Image, Text, View } from 'react-native'

export default function Index() {


    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                />
            }>
            <View className='flex flex-1'>
                <Text>Homepage</Text>
                <Counter />
                <CounterReducer />
            </View>
        </ParallaxScrollView>
    )
}