import { connect } from 'react-redux';
import { togoTodo, visibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_ACTIVITY:
      return todos.filter(t => t.completed)
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter:' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilters)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(togoTodo(id))
})

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(TodoList);
