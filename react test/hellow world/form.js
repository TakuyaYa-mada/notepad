/****************************************************/
// react form
/****************************************************/
var Form = React.createClass({
	getInitialState() {
		return {
			textValue: "フォームに内容を入力して送信してください。",
			formData: {
				name: '',
				age: '',
				addr: '',
				ather: ''
			}
		};
	},
	
	handleChange: function (e) {
		var data = this.state.formData;

		// eventが発火したname属性名ごとに値を処理
		switch (e.target.name) {
			case 'name':
				data.name = e.target.value;
				break;
			case 'age':
				data.age  = e.target.value;
				break;
			case 'addr':
				data.addr = e.target.value;
				break;
			case 'ather':
				data.ather = e.target.value;
				break;
		}

		// 状態を更新
		this.setState({
			formData: data
		});
	},
	
	handleSubmit: function () {
		console.log(this.state.formData.name);
		console.log(this.state.formData.age);
		console.log(this.state.formData.addr);
		console.log(this.state.formData.ather);
	},
	
	render(){
		return (
			<div>
				<p>{this.state.textValue}</p>
				<form action="javascript:void(0)" method="get">
					<dl>
						<dt>お名前</dt>
						<dd>
							<input type="text" ref="inputName" name="name" defaultValue={this.state.formData.name} onChange={this.handleChange} />
						</dd>
						
						<dt>年齢</dt>
						<dd>
							<input type="text" ref="inputAge" name="age" defaultValue={this.state.formData.age} onChange={this.handleChange} />
						</dd>
						
						<dt>住所</dt>
						<dd>
							<input type="text" ref="inputAddr" name="addr" defaultValue={this.state.formData.addr} onChange={this.handleChange} />
						</dd>
						
						<dt>備考</dt>
						<dd>
							<textarea ref="inputAther" name="ather" onChange={this.handleChange} >{this.state.formData.ather}</textarea>
						</dd>
					</dl>
					<button onClick={this.handleSubmit}>送信</button>
				</form>
			</div>
		);
	}
});

ReactDOM.render(<Form />, document.body);
