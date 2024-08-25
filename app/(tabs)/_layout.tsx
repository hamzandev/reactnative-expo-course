import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

export default function Layout() {

    const colorScheme = useColorScheme()

    const tabs = [
        {
            name: 'index',
            title: 'Home',
            inactiveIcon: 'home',
            activeIcon: 'home',
        },
        {
            name: 'todos/index',
            title: 'Todos',
            inactiveIcon: 'list',
            activeIcon: 'list',
        },
        {
            name: 'users/index',
            title: 'Users',
            inactiveIcon: 'person-circle',
            activeIcon: 'person-circle-sharp',
        },
    ]

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
            headerShown: false,
            lazy: true
        }}>
            {tabs.map(({ name, title, inactiveIcon, activeIcon }) => (
                <Tabs.Screen
                    key={name}
                    name={name}
                    options={{
                        title: title,
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon name={focused ? activeIcon : inactiveIcon as any} color={color} />
                        )
                    }}>
                </Tabs.Screen>
            ))}
        </Tabs>
    )
}