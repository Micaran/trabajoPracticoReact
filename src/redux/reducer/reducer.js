import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FETCH_POKEMONS_SUCCESS,
} from "../actions/actions";

const initialState = {
  tasks: [],
  pokemons: [],
  nextUrl: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), name: action.payload, completed: false },
        ],
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, name: action.payload.newName }
            : task
        ),
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
