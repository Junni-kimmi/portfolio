/*
 * Liner.jsx
 * Lines in Line Graph
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

import Yaxis from './Yaxis';
export default class Liner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            values :[],
            times : [],
        }
    }
    componentDidMount(){
        $.ajax({
            url: `service/${this.props.channel.dataSet_id}/quanop/?quanop_id=${this.props.channel.channel_id}`,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
            this.setState({values : data.data})
            }.bind(this)
        }) ;
        $.ajax({
            url: `service/${this.props.channel.dataSet_id}/time/?timeref=${this.props.channel.timeref}`,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
            this.setState({times : data.data})
            }.bind(this)
        }) ;
    }

    render(){
        var {values, times} = this.state;
        var {x_start,y_start, y_end,channel, selectedDataSet, channel_color, 
        } = this.props;

        var x_range = 90-x_start ;
        //var time_range = Math.max(...times);
        var time_range = this.props.timeMax - this.props.timeMin;
        var y_range = y_start - y_end ;
        var value_max = Math.max(...values);
        var value_min = Math.min(...values);
        var value_range = (value_min>=0)? value_max: (value_max - value_min) ;

        var channeldata = values.slice().sort(function(a, b) {
            return a - b;
          }).reverse();
        var val_display = Math.floor(channeldata.length/4);
        var y_axis_value = channeldata.filter(function(val,index){
            return((index==0)||(index==val_display)||(index==2*val_display)||(index==3*val_display)||(index==4*val_display)||(index==channeldata.length-1))
        })

        return( 
           <g key={"line"+ channel.channel_id}>
           <g>
            {values.map(function(val,i){
                if(i<times.length-1){
                    //var x1 = x_start + x_range*(times[i]/time_range);
                    var x1 = (x_start+(Math.min(...times)/time_range)) + x_range*(times[i]/time_range);
                    var y1 = (val>=0)? y_start - y_range*(val/value_range):y_start + y_range*(val/value_range);

                    //var x2 = x_start + x_range*(times[i+1]/time_range);
                    var x2 = (x_start+(Math.min(...times)/time_range)) + x_range*(times[i+1]/time_range);
                    var y2 = (values[i+1]>=0)? y_start - y_range*(values[i+1]/value_range):y_start + y_range*(values[i+1]/value_range);
                }
                    return(
                        <g key={"values"+i}>
                            <line key={"line-values"+i}  fill="none" stroke={channel_color}
                            strokeMiterlimit="10" strokeWidth="1px" 
                            x1={x1+"%"} y1={y1+"%"} x2={x2+"%"} y2={y2+"%"}
                            />
                        </g>
                    )
                    }.bind(this))}
            {values.map(function(val,i){
                    //var cx = x_start + x_range*(times[i]/time_range);
                    var cx = (x_start+(Math.min(...times)/time_range)) + x_range*(times[i]/time_range);
                    var cy = (val>=0)?y_start - y_range*(val/value_range):y_start + y_range*(val/value_range);
                    
                    return(
                        <g key={"values"+i}>
                            <circle 
                            id={"circle-values"+i}
                            cx={cx+"%"} cy={cy+"%"} r="0.3%" fill={channel_color}/>
                            <title>( {times[i]}, {val.toFixed(2)} )</title>
                        </g>
                    )
                    }.bind(this))}
            </g>
                    <Yaxis 
                    x_new_axis = {this.props.x_new_axis} y_new_axis = {this.props.y_new_axis}
                    y_start={this.props.y_start} y_end={this.props.y_end}
                    channel_color={channel_color} channel = {channel} y_axis_value={y_axis_value}
                    />
                    
            </g>
               
        )
    }
}