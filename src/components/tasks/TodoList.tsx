import type { Todo } from '@/db/schema'
import { css } from '@/styled-system/css'
import { TodoForm } from './TodoForm'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos }: { todos: Todo[] }) => {
	return (
		<div class={css({ maxW: 'md', mx: 'auto', py: 12 })}>
			<div
				class={css({
					bg: 'white',
					borderRadius: 'sm',
					p: 2,
				})}
			>
				<TodoForm />
				{todos.map((todo) => (
					<TodoItem {...todo} key={todo.id} />
				))}
			</div>
		</div>
	)
}
