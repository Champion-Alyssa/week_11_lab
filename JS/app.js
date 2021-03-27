// your JavaScript goes here, you can delete this comment
const completed_todos = [];
const todo_list = [
	{todo: "clone repo for starter code", status: "complete"},
  {todo: "write code for html", status: "started"},
  {todo: "add colour to css", status: "complete"},
  {todo: "make good git commits", stauts: "started"}
  
];

for(const todo in todo_list){
	if (todo_list[todo].status == "complete") {
  	completed_todos.push(todo_list[todo])
  }
}

console.log(completed_todos)

for (let {todo} of completed_todos){
	console.log(todo)
}