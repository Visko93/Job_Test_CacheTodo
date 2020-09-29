import reducers from '../../reducers';

test('reducers', () => {
  let state;
  state = reducers({taskList:{tasks:[]}}, {type:'TASK_ADD',payload:{task:{user_id:1,task_title:'test',task_description:'sad',task_start:'2020-09-29',task_deadline:'2020-11-15'}}});
  expect(state).toEqual({taskList:{tasks:[{task_id:1,task_status:'PENDING'}]}});
});

