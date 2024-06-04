import { UnsavedTodo } from '../components/Todos';

export async function getTodos() {
  const response = await fetch('/api/todos');
  if (!response.ok) throw new Error('Failed to fetch todos');
  const todos = await response.json();
  return todos;
}

export async function createTodo(newTodo: UnsavedTodo) {
  const response = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Failed to add todo');
  const newTodoResponse = await response.json();
  return newTodoResponse;
}

export async function updateTodo(id: number, updatedTodo: UnsavedTodo) {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Failed to update todo');
  const updatedTodoResponse = await response.json();
  return updatedTodoResponse;
}
