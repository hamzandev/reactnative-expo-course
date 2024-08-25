import { View, Text, Image, Modal, TextInput, Button } from 'react-native'
import React, { useReducer, useState } from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Link } from 'expo-router'
import TodoForm from '@/components/TodoForm'
import TodoCard from '@/components/TodoCard'

interface Todo {
	id: number,
	title: string,
	status: 'completed' | 'uncompleted'
}

interface Action {
	type: 'ADD_TODO' | 'DELETE_TODO' | 'FINISH_TODO',
	payload?: {
		id?: number
		title?: string
	}
}

export default function Todos() {


	const initialState: { todos: Todo[] } = {
		todos: [
			{
				id: 1,
				title: 'Menghina PHP bahasa jelek',
				status: 'uncompleted'
			},
			{
				id: 2,
				title: 'Scroll FB sampe subuh',
				status: 'uncompleted'
			},
			{
				id: 3,
				title: 'Push rank ML sampe Immortal',
				status: 'completed'
			},
		]
	}

	// @ts-ignore
	const [state, dispatch] = useReducer(reducer, initialState)
	const [input, setInput] = useState('')


	function reducer(state: any, action: Action) {
		switch (action.type) {
			case 'ADD_TODO':
				return {
					todos: [
						...state.todos,
						{
							id: state.todos.length + 1,
							title: action.payload?.title,
							status: 'uncompleted'
						}
					]
				}
			case 'FINISH_TODO':
				return {
					todos: [
						...state.todos.map((todo: Todo) => {
							if (todo.id == action.payload?.id) {
								return {
									...todo,
									status: 'completed'
								}
							}
							return todo
						})
					]
				}
			case 'DELETE_TODO':
				return {
					todos: [
						...state.todos.filter((todo: Todo) => todo.id != action.payload?.id)
					]
				}
			default:
				return state
		}
	}

	function handleAddTodo() {
		dispatch({ type: 'ADD_TODO', payload: { title: input } })
		setInput('')
	}

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
				/>
			}>
			<TodoForm handleAddTodo={handleAddTodo} input={input} setInput={setInput} />

			<Text className='font-bold text-center text-lg'>Todo List</Text>
			<View className='flex flex-col gap-3'>
				{state?.todos.map(({ id, title, status }: Todo) => {
					return (
						<TodoCard
							key={`${id}${title}`}
							todo={{ id, title, status }}
							handleDelete={() => dispatch({ type: 'DELETE_TODO', payload: { id } })}
							handleMarkAsComplete={() => dispatch({ type: 'FINISH_TODO', payload: { id } })}
						/>
					)
				})}
			</View>
		</ParallaxScrollView>
	)
}