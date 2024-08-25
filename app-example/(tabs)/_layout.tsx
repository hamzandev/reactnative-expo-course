import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabs = [
    {
      name: 'index',
      title: 'Home',
      inactiveIcon: 'home',
      activeIcon: 'home-outline',
    },
    {
      name: 'users',
      title: 'Users',
      inactiveIcon: 'person-circle',
      activeIcon: 'person-circle-sharp',
    },
  ]

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      {tabs.map(({ name, title, inactiveIcon, activeIcon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: title,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? activeIcon : inactiveIcon as any} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
