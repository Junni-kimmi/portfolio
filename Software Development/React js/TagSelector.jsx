import Select from 'react-select';

class TagSelector extends React.Component {

    constructor(props){
        super(props);
        this.state = {  
            removeSelected: true,
            disabled: false,
            stayOpen: false,
            value: [],
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(value) {
        console.log('You\'ve selected:', value);
        this.setState({ value });
    }

   // toggleRtl(e) {
   //     let rtl = e.target.checked;
   //     this.setState({ rtl });
   // }

    render(){
        const options = this.props.tagsoption;
        return(
            <div className="TaggingField">
                <Select
                    options={options}
                    multi
                    onChange={this.handleSelectChange}
                    placeholder="Select your Tags"
                    removeSelected={this.state.removeSelected}
                    simpleValue
                    value={this.state.value} />
            </div>
        );
    }
}
export default TagSelector;