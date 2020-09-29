import produce from "immer";

const INITIAL_STATE = {
  tasks: []
}

const taskList = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'TASK_ADD': {
        const task_status = 'PENDING'
        const { user_id, 
                task_title,
                task_description,
                task_start,
                task_deadline} = action.payload

          console.log(state.tasks)
          draft.tasks.push({
              task_id: 1,
              user_id, 
              task_title,
              task_description,
              task_start,
              task_deadline,
              task_status
          })
        break
        }
    default: {
      return draft
    }
  }
})
}

export default taskList