/*
 * DataTable.jsx
 * DataTable for each DataSet
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

export default class DataTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timeData : [],
            quanopData : [],
            editing: [],
            newValue:"",
            values:[],
        }
        this.datasRender = this.datasRender.bind(this);
    }
    componentDidMount(){
        $.ajax({
            url: `service_name/${this.props.detail_id}`,
            type: "GET",
            dataType: "JSON",
            success: function(data){
              this.setState({ timeData : data.data[0][0].data, quanopData:data.data[1]});
            }.bind(this)
        });
    }

    /**
   * tableChange
   * change the data in the table
   * @param {number} row 
   * @param {number} column
   * @return {array} values, quanopData
   */
    tableChange(row,column,e){
        var values = this.state.values.slice();
        var existant_values = this.searchEdited(this.state.values, row, column);
        if (existant_values.length > 0)
            values.splice(values.indexOf(existant_values[0]), 1);
        values.push({row : row, column: column, value: e.target.value });
        var data = this.state.quanopData.slice();
        data[column].data[row] = Number(e.target.value);
        this.setState({ values: values, quanopData: data })
    }

     /**
   * editData
   * change the click cell to edit mode
   * add the cell info to editing array
   * @param {number} row 
   * @param {number} column
   * @param {event} e
   * @return {array} editing
   */
    editData(row, column, e) {
        
        var editing = this.state.editing.slice();

        var is_editing = this.searchEdited(this.state.editing, row, column);
        if (is_editing.length === 0){ 
            editing.splice(0, 1);
            editing.push({ row: row, column: column })
           
        }else{
            editing.splice(editing.indexOf(is_editing[0]), 1);
        }    
        this.setState({ editing: editing });
    }

      /**
   * searchEdited
   * searching the editing cell
   * @param {arr} searching array 
   * @param {number} row
   * @param {number} column
   * @return {array} array which is editing
   */
    searchEdited(arr, row, column) {
        return (
            arr.filter(function(elem) {
                return (elem.row == row && elem.column == column)
            })
        )  
    }
     /**
   * keyPress
   * end the editing mode when press enter
   * @param {number} row 
   * @param {number} column
   * @param {event} e
   * @return {array} editing
   */
    keyPress(row, column, e){ 
        var editing = this.state.editing.slice();
        var is_editing = this.searchEdited(this.state.editing, row, column);

        if(e.keyCode == 13){
            editing.splice(editing.indexOf(is_editing[0]), 1);
           console.log('value', e.target.value);
           this.setState({ editing: editing});
        }
     }

     /**
   * endEditing
   * end editing
   * @param {event} e
   * @return {array} editing
   */
     endEditing(e){ 
        this.setState({editing:[]})
     }

      /**
   * saveData
   * end editing
   * @param {event} e
   * @return {array} editing
   */
     saveData(e){
        e.preventDefault();
        var values = this.state.values.slice();

        for(var i=0; i< values.length; i++){
            var data_arr = { };
            data_arr[values[i].row] = Number(values[i].value);
            $.ajax({
                url: `/service_name/${this.props.detail_id}/`,
                type: 'PUT',
                dataType: 'json',
                cache: false,
                data: JSON.stringify([ { quanop_id: this.state.quanopData[values[i].column].quanop_name, data: data_arr } ]),
                success: function (data) {
                    this.setState({values : []})
                }.bind(this) 
            })
        }     
     }

    datasRender(){
        
            return(
                this.state.timeData.map(function(time,i){
                   return(
                        <div className="table-cell-wrap" key={'time'+i}>
                                <div className="cell cell-hover">{time}</div>
                                {this.state.quanopData.map(function(dt,j){
                                    
                                    if (this.searchEdited(this.state.editing, i, j).length === 0)
                                        return(
                                            <div className="cell cell-hover" 
                                                 onClick={this.editData.bind(this, i, j)} 
                                                 key={'value'+j}>
                                              {dt.data[i]}
                                            </div>
                                        )
                                    else
                                        return (
                                            <input type="text" 
                                                   value = {dt.data[i]}
                                                   onChange = {this.tableChange.bind(this,i,j)}
                                                   onKeyDown = {this.keyPress.bind(this,i,j)}
                                                   onBlur = {this.endEditing.bind(this)}
                                                   />
                                        )
                                }.bind(this))}
                        </div>
                    )
                }.bind(this)) 
            )
        
    }
    /**
     * render
     * @return {ReactElement} markup
     */
    render(){

var dataListHight = {
maxHeight: "74.5vh",
};

        return(
            <div className="row margin-4 margin-bottom-0">
		<div className="columns small-12 data-head-wrap">
			<div className="data-name">
			  <h3 className="" >{this.props.detail_name}</h3>
			</div>
			<div className="btn-wrap">
                 <p style={{display : 'inline-block', float:'right'}}>
                    <button
                        data-tooltip="save"
                        type="button"
                        value="icon-save" className="circle-btn-size-l  button-green tooltip"
                        onClick={ this.saveData.bind(this) } 
                        >
                        <i className="icon-save"></i>
                    </button>
                </p>
		</div>
		</div>
               
                 <div className="table-wrap">
                    <div className="table-title-wrap padding-1">
                                <div className="columns-title">time</div>
                        {this.state.quanopData.map(function(q,i){
                            return(
                                <div className="columns-title" key={'channel'+i}>{q.quanop_name}</div>
                            )
                        }.bind(this))}
                    </div>
	<div className="cell-rap" style={dataListHight}>
                   {this.datasRender()}
	</div>
                </div>
            </div>
          
        )
    }
}

