

export default class ChannelSelector extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var {channel, channelChange, select,} = this.props ;
        return(
            <div className="boder boder-radius-s">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li >
                            <a href="#" className="text-color-1" >Channel</a>
                                <ul className="menu">
                                    
                                    {channel.map(function(q,index){
                                        return(
                                            
                                            <li key={q}>
                                                
                                                <label id="checkbox" className="text-color-1">
                                                    <input type="checkbox" 
                                                    onChange={channelChange(q)}
                                                    defaultChecked={select.includes(q) ? true : false}
                                                    />
                                                    {q}
                                                </label>
                                                
                                            </li>
                                        )
                                    }.bind(this))}
                                </ul>
                        </li>
                    </ul>
                </div>
            )
    }
}