/*
 * BoxGraph.jsx
 * Box Graph
 *
 * Created in October 2018
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

import Box from './Box';
export default class BoxGraph extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        
        }
    }
    renderXaxis(new_x){
        var x_range = 90 -new_x;
        var space = x_range/(this.props.channel_select.length+1);
        return(
            <g id="x-axis">
                    <line className="x-axis" fill="none" stroke="#95989a"
                    strokeMiterlimit="10" strokeWidth="1px"  
                    x1={new_x+"%"} y1="90%" x2="90%" y2="90%"
                    />
                    <text textAnchor="middle" fill="#95989a" fontSize="10px"
                        x="90%" y="90%" dx="20px" dy="5px"> 
                       group
                    </text>

                    {this.props.channel_select.map(function(ch,i){
                        var current_plot = new_x + space*(i+1);
                        return(
                            <g key={"group-axis"+ch.dataSet_id+ch.channel_id}>
                                <line className="x-axis" fill="none" stroke="#95989a"
                                strokeMiterlimit="10" strokeWidth="1px"  
                                x1={current_plot+"%"} y1={90+1+"%"} x2={current_plot+"%"} y2={90-1+"%"}
                                />
                                <text textAnchor="middle" fill="#95989a" fontSize="10px"
                                x={current_plot+"%"} y="90%" dy="5%"> 
                                {ch.channel_id}
                                </text>
                            </g>
                        )
                    }.bind(this))}        
            </g>
        )
    }
    
    render(){
        var x_start=5+ 4*this.props.channel_select.length ;
        var x_range = 90 -x_start;
        var space = x_range/(this.props.channel_select.length+1);
       
        return(
            <svg id="box-graph" width="100%" height="100%" style={{minHeight:"300px"}}
            >
                {this.renderXaxis(x_start)}
                {this.props.channel_select.map(function(channel,index){
                            return(
                                <Box 
                                key={"Box"+channel.dataSet_id+channel.channel_id}
                                channel={channel}
                                x_start={x_start} y_start={85} y_end={10}
                                channel_color = {channel.channel_color}
                                channelNum={this.props.channel_select.length}
                                current_x = {x_start + space*(index+1)} space={space}
                                x_new_axis = {5+ 3*index} y_new_axis = {5+ 4*index}
                                />
                            )
                        }.bind(this))

                }
            </svg>
        )
    }
    
}


