/*
 * Box.jsx
 * Box for each channel in Box Graph
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

import Yaxis from './Yaxis';
export default class Box extends React.Component{
    constructor(props){
        super(props);
        this.state={
            values :[],
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
    }

    render(){

        var {values} = this.state;
        var {x_start,y_start, y_end, selectedDataSet, channel_color, channelNum,
        current_x, space, channel} = this.props;

        var y_range = y_start - y_end ;
        var value_max = Math.max(...values);
        var value_min = Math.min(...values);
       // var value_range = (value_min>0)? value_max: (value_max - value_min);

        var channeldata = values.slice().sort(function(a, b) {
            return a - b;
          });
          var val_display = Math.floor(channeldata.length/4);
        
         // Unteres Quantil
         var uq = (channeldata.length%4==0) ? 
         channeldata[Math.floor(channeldata.length/4)] 
         : (channeldata[Math.floor(channeldata.length/4)-1]+channeldata[Math.floor(channeldata.length/4)])/2.0 
         // Median
         var med = (channeldata.length%2==0) ? 
         channeldata[Math.floor(channeldata.length/2)] 
         : (channeldata[Math.floor(channeldata.length/2)-1]+channeldata[Math.floor(channeldata.length/2)])/2.0 
         // Oberes Quantil
         var oq = (channeldata.length%4==0) ? 
         channeldata[Math.floor(channeldata.length/4*3)] 
         : (channeldata[Math.floor(channeldata.length/4*3)-1]+channeldata[Math.floor(channeldata.length/4*3)])/2.0 
         // Boxlänge, height
         var delta_iq = oq - uq 
         // Minimales Ende des unteren Whiskerlänge
         var min_h = uq - delta_iq*1.5 
         // Maximales Ende des oberen Whiskers
         var max_h = oq + delta_iq*1.5 
        
         var outlier_max = (value_max>max_h) ? true : false;
         var outlier_min = (value_min<min_h) ? true : false;
         var margin_max = (value_max>max_h) ? value_max : max_h;
         var margin_min = (value_min<min_h) ? value_min : min_h;
         
          /* 
            var y_axis_value = [max_h, (min_h<0)?2*(max_h-min_h)/3:2*max_h/3,
                (min_h<0)?(max_h-min_h)/2:max_h/2, (max_h-min_h)/3,(min_h<0)?min_h:0];
    
             var whole_h = (min_h>0) ? max_h : max_h  - min_h;
             var y_zero = (min_h<0) ? y_start - y_range*(Math.abs(min_h)/whole_h) : y_start ;
             var y_range_m = y_start - y_zero ;
             var y_range_p = y_zero - y_end ;
        
            var box_width = space -10;
            var box_height = y_range*(delta_iq/whole_h);
    
            var box_x = current_x - (box_width/2);
            var box_y = y_zero - y_range_p*(oq/max_h);
           
            var height_min = y_zero -y_range*(min_h/whole_h);
            var height_max = y_zero -y_range*(max_h/whole_h);
            var height_med = (med>0) ? y_zero -y_range_p*(med/max_h) : y_zero -y_range_m*(med/min_h);
        */
            
            var y_axis_value = [margin_max, (margin_min<0)?2*(margin_max-margin_min)/3:2*margin_max/3,
                (margin_min<0)?(margin_max-margin_min)/2:margin_max/2, (margin_max-margin_min)/3,(margin_min<0)?margin_min:0];
    
             var whole_h = (margin_min>0) ? margin_max : margin_max  - margin_min;
             var y_zero = (margin_min<0) ? y_start - y_range*(Math.abs(margin_min)/whole_h) : y_start ;
             var y_range_m = y_start - y_zero ;
             var y_range_p = y_zero - y_end ;
        
            var box_width = space -10;
            var box_height = y_range*(delta_iq/whole_h);
    
            var box_x = current_x - (box_width/2);
            var box_y = y_zero - y_range_p*(oq/margin_max);
           
            var height_min = y_zero -y_range*(margin_min/whole_h);
            var height_max = y_zero -y_range*(margin_max/whole_h);
            var height_med = (med>0) ? y_zero -y_range_p*(med/margin_max) : y_zero -y_range_m*(med/margin_min);
         
            return(
              <g key={'boxgraph'+name}>
                <line className="dot-line" fill="none" stroke="#95989a"
                    strokeMiterlimit="10" strokeWidth="1px"  
                    strokeDasharray="3 3"
                    x1={current_x+"%"} y1={height_max+"%"} 
                    x2={current_x+"%"} y2={height_min+"%"}
                />
                <rect className= {'box'+name}
                    fill={channel_color} stroke="#95989a" strokeWidth="1px"
                    x={box_x+"%"} y={box_y+"%"} width={box_width+"%"} height={box_height+"%"}
                />
                
                <line className={"median"+name} fill="none" stroke="#95989a"
                    strokeMiterlimit="10" strokeWidth="5px"  
                    x1={current_x-(box_width/2)+"%"} y1={height_med+"%"} 
                    x2={current_x+(box_width/2)+"%"} y2={height_med+"%"}
                />
                <line className={"max"+name} fill="none" stroke="#95989a"
                    strokeMiterlimit="10" strokeWidth="2px"  
                    x1={current_x-(box_width/2)+"%"} y1={height_max+"%"} 
                    x2={current_x+(box_width/2)+"%"} y2={height_max+"%"}
                />
                <line className={"min"+name} fill="none" stroke="#95989a"
                     strokeMiterlimit="10" strokeWidth="2px"  
                    x1={current_x-(box_width/2)+"%"} y1={height_min+"%"} 
                    x2={current_x+(box_width/2)+"%"} y2={height_min+"%"}
                />
                <title>{channel.channel_id}</title>
            
                    {outlier_max ? 
                    <g key="outlier_max">
                            <circle 
                            cx={current_x+"%"} cy={y_zero -y_range_p*(value_max/margin_max)+"%"} r="0.3%" fill={channel_color}/>
                            <title>{value_max.toFixed(2)}</title>
                        </g>
                    :null}
                    {outlier_min ? 
                    <g key="outlier_min">
                            <circle 
                            cx={current_x+"%"} cy={y_zero -y_range_m*(value_min/margin_min)+"%"} r="0.3%" fill={channel_color}/>
                            <title>{value_min.toFixed(2)}</title>
                        </g>
                    :null}
                <Yaxis 
                        x_new_axis = {this.props.x_new_axis} y_new_axis = {this.props.y_new_axis}
                        y_start={this.props.y_start} y_end={this.props.y_end}
                        channel_color={channel_color} channel = {channel} y_axis_value={y_axis_value}
                />
                </g>
                               
                )
         
        }
    }