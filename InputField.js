class InputField extends React.Component {
    render() {
        return (
        	// 當props傳入Inputfield時,Inputfield會把所有props傳入input component裡面
            <div>
				<input type='text' {...this.props} />
			</div>
        )
    }
}

window.App.InputField = InputField;

