const {InputField} = window.App ;

class TodoItem extends React.Component {
	constructor(props, context){
		super(props, context) ;
		// 將editable預設為瀏覽模式
		this.state = {editable : false} ;
		//使用class去定義component,react不會去自動bind this,所以須手動bind this
		// this.toggleEditable = this.toggleEditable.bind(this);
		this.toggleEditable = this.toggleEditable.bind(this);
	}

	toggleEditable() {
		// 使用setState改變Mode
		this.setState({editable: !this.state.editable}) ;
	}

    render() {
    	//切換Mode
        return this.state.editable ? 
        this.renderEditMode() :
        this.renderViewMode();
	}

	// 瀏覽模式
	renderViewMode(){
		const {
	            title,
	            completed
	        } = this.props;

	        return (
	            <div>
					<input type='checkbox' checked={completed}/>
					<spen onDoubleClick={this.toggleEditable}>{title}</spen>
					<button>X</button>
				</div>
	        );
	    }

	// 編修模式
	renderEditMode(){
		return(
			<InputField
				//autoFocus user切換到editmode時 游標會自動focus在這inputField上
				autoFocus
				placeholder='編輯待辦事項'
				value={this.props.title}
				// 當游標click InputField以外的地方或者按下esc時會切換成ViewMode
				onBlur={this.toggleEditable}
				onKeyDown={
					(e) => {
						//keyCode 27 === ESC
						if (e.keyCode === 27) {
							//preventDefault讓事件不會往下傳遞
							e.preventDefault();
							this.toggleEditable();
						}
					}
				}
			/>
		);
	}
}



TodoItem.propTypes = {
    title: React.PropTypes.string
}


window.App.TodoItem = TodoItem;


