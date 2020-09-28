import * as ActionTypes from './ActionTypes';


export const addTask = task => (
    {
        type: ActionTypes.TASK_ADD,
        payload: {
            task
        }
    }    
);

export const tasksLoading = () => ({
    type: ActionTypes.TASK_LOADING,
});

export const taskDelete = () => ({
    type: ActionTypes.TASK_DELETE,
});

export const taskEdit = () => ({
    type: ActionTypes.TASK_EDIT,
});

export const taskConclude = () => ({
    type: ActionTypes.TASK_CONCLUDE,
});

//Ações de Login

export const userLogin = () => ({
    type: ActionTypes.USER_LOGIN,
});

export const userRegister = () => ({
    type: ActionTypes.USER_REGISTRATION,
});

