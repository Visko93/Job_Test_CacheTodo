import produce from "immer";

const INITIAL_STATE = {
  tasks: []
}
// essa é o reducer que linka o estado armazendo aqui com 
// a ação e conecta esse estado ao componente que o requisita

const taskList = (state = INITIAL_STATE, action) => {
  // utiliza o metodo produce da biblioteca immer para gerar 
  //um novo estado mantendo a imutabilidade
  return produce(state, draft => {
    switch(action.type) {
      case 'TASK_ADD': {
        const task_status = 'PENDING'
        const { user_id, 
                task_title,
                task_description,
                task_start,
                task_deadline} = action.payload
          
          // utiliza a propriedade draft para gerar o novo estado
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