/*
 * TimePlot.jsx
 * time X axis in line-graph
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

export default class TimePlot extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var {timeMax, timeMin, x_start} = this.props;
        var x_range = 90-x_start ;
        var time_range = timeMax;
        var time_display = Math.floor((timeMax-timeMin) / 4);
        var times = [timeMin, timeMin+time_display, timeMin+2*time_display, timeMin+3*time_display, timeMax];
        return(
            <g id="timeplot">
                {times.map(function (time, index) {
                    var current_plot = x_start + x_range * (time / time_range);
                    return (
                            <g id="time-point" key={"time" + index}>
                                <line className="time" fill="none" stroke="#95989a"
                                    strokeMiterlimit="10" strokeWidth="1px"
                                    x1={current_plot + "%"} y1="88%" x2={current_plot + "%"} y2="92%"
                                />
                                <text textAnchor="middle" fill="#95989a" fontSize="10px"
                                    x={current_plot + "%"} y="95%"
                                >
                                    {time}
                                </text>
                            </g>
                    )
                }.bind(this))}
            </g>
        )
    }
}