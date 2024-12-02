
export default class MemoField extends React.Component {

  constructor(props) {
        super(props);
        this.state={
            memo: '',           
            edit: false, 
        };
        //binding
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(memo) {
      this.setState({memo,edit: false});
      this.props.onMemoChange(memo);
     }
  handleSubmit() {
      this.setState({edit: true});
     }
  render(){
      return(
          <div>
              <EditField
                  text={this.state.memo}
                  onTextChange={this.handleChange}
                  onTextSubmit={this.handleSubmit} />
              <ShowingField
                  text={this.state.memo}
                  edit={this.state.edit} />
          </div>
      );
  }
}

class EditField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onTextChange(event.target.value);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    // Using refs:
    // this.props.onTextSubmit(this.textInput.value);
    
    this.props.onTextSubmit();
  }
  
  render() {
    return (
      <div className="EditField">
        <h1>EditField</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
                type="text" 
                onChange={this.handleChange} />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

//Editing class
class ShowingField extends React.Component {
    render() {
        return <p>Saved Memo: {this.props.text}</p>;
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.edit;
    }
}