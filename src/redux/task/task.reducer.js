import {TaskActionTypes} from "./task.types";

const INITIAL_STATE = {
    toggleAddTask : false,
    toggleEditTask : { hidden: true, index: null},
    tasksByProject: { project: null, tasks: []},
    isLoading: false,
    errorMessage: undefined
}

const TaskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS_BY_PROJECT_START:
            return {
                ...state,
                isLoading: true
            };
        case TaskActionTypes.FETCH_TASKS_BY_PROJECT_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TaskActionTypes.FETCH_TASKS_BY_PROJECT_SUCCESS:
            const { project, tasks } = action.payload;
            return {
                ...state,
                tasksByProject: { project, tasks }
            };
        case TaskActionTypes.TOGGLE_ADD_TASK:
            return {
                ...state,
                toggleAddTask: !state.toggleAddTask
            };
        case TaskActionTypes.TOGGLE_EDIT_TASK:
            let { hidden, index } = state.toggleEditTask;
            hidden = !hidden;
            index = action.payload
            return {
                ...state,
                toggleEditTask: { hidden, index }
            }
        default:
            return state
    }
};

export default TaskReducer;
