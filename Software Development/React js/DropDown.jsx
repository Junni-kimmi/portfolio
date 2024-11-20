/*
 * DropDown.jsx
 *
 * Created in October 2018
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gamil.com)
 *
 */ 

export default class DropDown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listOpen : false,
           // title : this.props.title,
        }
        this.searchSelected = this.searchSelected.bind(this);
    }

    /**
   * handleClickOutside
   * @return {boolean}
   */
    handleClickOutside(){
        this.setState({
          listOpen: false
        })
      }
    
    /**
   * toggleList
   * @return {boolean} result of the sum value.
   */
    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
      }

    componentDidUpdate(prevProps){
          if(this.props.list!==prevProps.list){
              this.render()
          }
      }
    
    /**
   * searchSelected
   * filteting select
   * @param {string} dataSet_id - dataset id
   * @param {string} channel_id - channel id
   */
    searchSelected(dataSet_id, channel_id) {
        return (
            this.props.select.filter(function(elem) {
                return (elem.dataSet_id == dataSet_id && elem.channel_id == channel_id)
            }.bind(this))
        )  
    }
    /**
   * render
   * @return {ReactElement} markup
   */
    render(){
        var{list, channelChange, select, title} = this.props
        var{listOpen} = this.state
        return(
          <div className="checkbox-wrap" style={{position : "relative"}}>
            <div className="header" onClick={() => this.toggleList()}>
                <div className="header-title boder border-radius-s padding-s">
                    <p className="margin-0 margin-x-1" style={{textAlign:"center"}}>
                        {title} <i className="icon-seemore-sidenav padding-left-1"></i>
                    </p>
                </div>
            </div>
        
            {listOpen && 
                <ul className="list boder border-radius-s list-style-none padding-x-3 padding-top-2 box-shadow label-list"
                style={{position : "absolute", backgroundColor:"#FFF", top:"40px", left:"0", zIndex:"1000"}}
                >
                    {list.map(function(item,i){
                        var is_select = this.searchSelected(item.dataSet_id, item.channel_id);
                        return(
                            <li className="dd-list-item margin-bottom-2" key={'list'+i} 
                            //onClick={() => itemChange(item.title)}
                            >
                                <label>
                                    <input type="checkbox"
                                    //onChange={() => itemChange(item.title)}
                                    onChange={() => channelChange(item.dataSet_id,item.channel_id,item.dataSet_name,item.timeref)}
                                    //defaultChecked={is_select.length === 0 ? false : true}
                                    checked = {is_select.length === 0 ? false : true}
                                    /> 
                                    <span>{item.channel_id} </span>
                                </label>
                            </li>
                        )
                    }.bind(this))}
                </ul>
            }
          </div>
        )
    }
}