import React from 'react';
const TodoFooter=(props)=>{
  const {todoList}=props;
  if(todoList.length>0){
  return(
      <div>
          <span>TodosLeft</span>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          <button>ClearCompleted</button>
      </div>
  );
}else{
    return ;
}
};
export default TodoFooter;