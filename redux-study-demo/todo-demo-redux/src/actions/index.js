let nextTodoId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILLTER',
  filter
})

export const togoTodo = id => ({
  type: 'TOGO_TODO',
  id
})

export const visibilityFilters = ({
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVITY: 'SHOW_ACTIVITY'
});
