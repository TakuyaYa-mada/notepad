const KEYCODE_LEFT  = 37;
const KEYCODE_RIGHT = 39;

class Tabs extends React.Component {

  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  updateIndex(i, fn) {
    // index が更新されて DOM が更新されたのちフォーカスをあてる
    this.setState({index: i}, () => {
      React.findDOMNode(this.refs['tab' + i]).focus();
    });
  }

  onClickTab(i) {
    this.updateIndex(i);
  }

  onMoveTab(e) {
    // ここでは index の更新に専念すればいい
    let curtIndex = this.state.index;

    switch(e.keyCode) {
      case KEYCODE_LEFT:
        if (curtIndex !== 0) {
          this.updateIndex(curtIndex - 1);
        }
        break;
      case KEYCODE_RIGHT:
        if (curtIndex !== this.props.children.length - 1) {
          this.updateIndex(curtIndex + 1);
        }
        break;
      default:
        break;
    }
  }


  render() {
    let curtIndex = this.state.index;
    
    // タブ部分を生成する、ラベルは child.props.label を使う
    // aria-* 系の属性は、React らしく index を使った条件式を宣言するだけでよい
    // あとからフォーカスをあてるのに ref を仕込んでおいた方がラクだった
    let tabs = this.props.children.map((child, i) => {
      return (
        <li role="presentation" key={i}>
          <button role="tab"
                  ref={'tab' + i}
                  tabIndex={curtIndex === i ? '0' : '-1'}
                  aria-selected={curtIndex === i ? 'true' : 'false'}
                  aria-controls={child.props.id}
                  onKeyUp={this.onMoveTab.bind(this)}
                  onClick={this.onClickTab.bind(this, i)}>
            {child.props.label}
          </button>
        </li>
      );
    });

    // パネル部分も同様に生成する
    let panels = this.props.children.map((child, i) => {
      return (
        <div role="tabpanel"
             key={i}
             id={child.props.id}
             aria-hidden={curtIndex === i ? 'false' : 'true'}>
          {child}
        </div>
      );
    });

    return (
      <div>
        <ul role="tablist">
          {tabs}
        </ul>
        {panels}
      </div>
    );
  }
}