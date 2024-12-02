/*
 * Yaxis.jsx
 * Graph Y axis for each selected Channel
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

export default class Yaxis extends React.Component{
    render(){
        var {x_new_axis, y_new_axis, channel, channel_color, y_axis_value, y_start, y_end} = this.props;
        var y_axis_name = channel.dataSet_name + " : "+channel.channel_id;
        return(
                        <g key={"y-axis"+channel.channel_id}>
                            <g key="y-axis">
                                <line className="y-axis-1" fill="none" stroke={channel_color}
                                strokeMiterlimit="10" strokeWidth="1px" 
                                x1={x_new_axis+"%"} y1="10%" x2={x_new_axis+"%"} y2="90%"
                                />
                                <text textAnchor="middle" fill="#95989a" fontSize="10px"
                                x={(x_new_axis-0.5)+"%"} y="50%" 
                                style={{writingMode:"sideways-lr"}}
                                > 
                                    {(y_axis_name.length>35)? y_axis_name.slice(0,32).replace(" ","").replace(" ","")+'...' : y_axis_name}
                                </text>
                            </g>
                            
                            {y_axis_value.map(function(val,index){
                                var dis = (y_start - y_end) / 4 ;
                                var x1 = `${x_new_axis-0.4}%` ;
                                return(
                                    <g key={"y-axis-value"+index}>
                                    <line key={"unit"+index} fill="none" stroke={channel_color}
                                    strokeMiterlimit="10" strokeWidth="1px" 
                                    x1={x1} y1={y_end+dis*(index)+"%"} 
                                    x2={x_new_axis+0.4+"%"} y2={y_end+dis*(index)+"%"}
                                    />
                                    <text textAnchor="middle" fill="#95989a" fontSize="10px"
                                    x={x_new_axis+"%"} y={y_end+dis*(index)+"%"} > 
                                    {Math.round(val)}
                                    </text>
                                    </g>
                                )
                            })}
                        </g>
                
        )

    }
}