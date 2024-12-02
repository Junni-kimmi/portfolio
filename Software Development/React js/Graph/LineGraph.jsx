/*
 * LineGraph.jsx
 * Line Graph
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

import TimePlot from './TimePlot';
import Liner from './Liner';
export default class LineGraph extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           time_max : 0,
           time_min : 0

        }
        this.renderXaxis = this.renderXaxis.bind(this);
    }
    
    componentDidMount(){
        var max = 0;
        var min = 0;

        this.props.timeRefs.map(function(time,index){
            
           $.ajax({
            url: `service/${time.dataSet_id}/time/?timeref=${time.time_ref}`,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
                max = (max >= Math.max(...data.data)) ? max : Math.max(...data.data);
                min = (min <= Math.min(...data.data))? min : Math.min(...data.data);
            this.setState({
                //timeAxis : data.data, 
                time_max : max, time_min : min})
            }.bind(this)
        }) ;  
        }.bind(this))
    }
    componentDidUpdate(prevProps, prevState){ 
        if (this.props.timeRefs!==prevProps.timeRefs){
            var max = 0;
            var min = 0;

            this.props.timeRefs.map(function (time, index) {

                $.ajax({
                    url: `service/${time.dataSet_id}/time/?timeref=${time.time_ref}`,
                    type: "GET",
                    dataType: "JSON",
                    success: function (data) {
                        max = (max >= Math.max(...data.data)) ? max : Math.max(...data.data);
                        min = (min <= Math.min(...data.data)) ? min : Math.min(...data.data);
                        this.setState({
                            //timeAxis : data.data, 
                            time_max: max, time_min: min
                        })
                    }.bind(this)
                });
            }.bind(this))
        }
    }

    renderXaxis(new_x){
        return(
            <g id="x-axis">
                    <line className="x-axis" fill="none" stroke="#95989a"
                    strokeMiterlimit="10" strokeWidth="1px"  
                    x1={new_x+"%"} y1="90%" x2="90%" y2="90%"
                    />
                    <text textAnchor="middle" fill="#95989a" fontSize="10px"
                        x="90%" y="90%" dx="20px" dy="5px"> 
                       time
                    </text>
            </g>
        )
    }

    render(){
        var x_start=5+ 4*this.props.channel_select.length ;
        return(
            <svg id="line-graph" width="100%" height="100%" style={{minHeight:"300px"}} 
            >
                {this.renderXaxis(x_start)} 
                
                <TimePlot
                timeMax = {this.state.time_max}
                timeMin = {this.state.time_min}
                x_start={x_start}
                />
                {this.props.channel_select.map(function(channel,index){
                            return(
                                <Liner 
                                key={"liner"+channel.dataSet_id+channel.channel_id}
                                channel={channel}
                                x_start={x_start} y_start={85} y_end={10}
                                channel_color = {channel.channel_color} 
                                timeMax = {this.state.time_max}
                                timeMin = {this.state.time_min}
                                selectedDataSet={this.props.selectedDataSet}
                                x_new_axis = {5+ 3*index} y_new_axis = {5+ 4*index}
                                />
                            )
                        }.bind(this))}
            </svg>
        )
       
    }
    
}




