import * as ActionTypes from './ActionTypes';


export const addTask = (user, initialDate, finishDate, complete) => ({
    type: ActionTypes.ADD_TASK,
    payload: {
        user: user,
        initialDate: initialDate,
        finishDate: finishDate,
        complete: complete
    }
});

export const fetchDishes = () => (dispatch) =>  {
    dispatch(dishesLoading(true));

    setTimeout(()=>{
        
    }, 2000)
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

