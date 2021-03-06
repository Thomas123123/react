const { 
	TodoHeader ,
	TodoList ,
	InputField
} = window.App ;

const todos = [
	{
		id:0,
		title:'Item 1' ,
		completed: false
	},
	{
		id:1,
		title:'Item 2' ,
		completed: false
	},
	{
		id:2,
		title:'Item 3' ,
		completed: false
	} 
];


class TodoApp extends React.Component {
	render(){
		return (
		<div>
			<TodoHeader title='我的待辦事項' username='thomas' todoCount={todos.filter((todo) => !todo.completed).length}/>
			<InputField placeholder="我的待辦事項" />
			<TodoList todos={todos} />
		</div>
		);
	}
}




window.App.TodoApp = TodoApp;
