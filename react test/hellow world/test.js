/************************************************************/
//react test
//
/************************************************************/
class SampleComponent extends React.Component {
  render() {
    return (
      <div>
        This article is written by leader22
      </div>
    );
  }
}
ReactDOM.render(<SampleComponent />, document.getElementById('sample'));

var Form = React.createClass({
	getInitialState() {
		return {
			textValue: "テキストを入力してください。"
		};
	},
	changeText(e) {
		this.setState({textValue: this.refs.inputText.value });
	},
	render(){
		return (
			<div>
				<p>{this.state.textValue}</p>
				<input type="text" ref="inputText" defaultValue="はよ入力！" />
				<button onClick={this.changeText}>変換</button>
				<div id="test"></div>
			</div>
		);
	}
});
ReactDOM.render(<Form />, document.getElementById('form'));

var FormInText = React.createClass({
	getInitialState() {
		return {
			textValue: "なんでもないお",
			nodeValue: "なんでもあるお"
		};
	},
	changeText(e) {
		this.setState({textValue: this.refs.textArea.value});
	},
	render(){
		return (
			<div>
				<p>{this.state.textValue}</p>
				<textarea className="text" ref="textArea">{this.state.nodeValue}</textarea>
				<button onClick={this.changeText}>フライヤ</button>
			</div>
		);
	}
});
ReactDOM.render(<FormInText />, document.getElementById('test'));