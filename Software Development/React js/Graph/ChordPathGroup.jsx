class ChordPathGroupData extends React.Component{
    constructor(props){
        super(props);
        var newData = [];
        const total = this.props.total;
        var cal = this.props.beginDegree;
        for (var i = 0; i < this.props.num_dataSet; i++) {
            var obj = {};
            var sum = this.props.calAmount(this.props.matrixDataSets[i][this.props.currentIndex]);
            cal = cal + 2 * Math.PI * (sum / total);
            obj["name"] = this.props.name;
            obj["sum"] = sum;
            obj["pathColor"] = this.props.groupPathColor[i];
            obj["angle"] = 2 * Math.PI * (sum / total);
            obj["endDegree"] = cal;

            newData.push(obj);
        }
        this.state={
            groupPathData :newData,
        }
    }
    
    /*componentDidMount() {
        var newData = [];
        const total = this.props.total;
        var cal = this.props.beginDegree;
        for (var i = 0; i < this.props.num_dataSet; i++) {
            var obj = {};
            var sum = this.props.calAmount(this.props.matrixDataSets[i][this.props.currentIndex]);
            cal = cal + 2 * Math.PI * (sum / total);
            obj["name"] = this.props.name;
            obj["sum"] = sum;
            obj["pathColor"] = this.props.groupPathColor[i];
            obj["angle"] = 2 * Math.PI * (sum / total);
            obj["endDegree"] = cal;

            newData.push(obj);
        }
        this.setState({ groupPathData: newData })
    }*/

    render(){
        return(
        <g id="group-path">
        {this.state.groupPathData.map(function(dt,i){
            return(
                <g key={'groupPath' + i}>
                <ChordPathGroup
                    id={'path' + i} currentIndex={this.props.currentIndex} name={dt.name}
                    // Group Degrees
                    beginDegree={dt.endDegree - dt.angle} endDegree={dt.endDegree}
                    // Radius
                    outter_R={this.props.outter_R} inner_R={this.props.inner_R}
                    // Paths color
                    color={dt.pathColor}
                    // Sums
                    groupSum={dt.sum} totalSum={this.props.total}
                    // Datas
                    groupPathData={this.state.groupPathData} groupData={this.props.groupData} 
                    matrixData={this.props.matrixDataSets[i]} 
                    // Activated Elements
                    activeElement={this.props.activeElement}
                    // functions for coodinates
                    x_func={this.props.x_func} y_func={this.props.y_func}
                />
                </g>
            )
        }.bind(this))}
        </g>)
    }
}

export default ChordPathGroupData;


class ChordPathGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { outter_R, inner_R, groupSum, totalSum, matrixData, groupData } = this.props;
        var {currentIndex, activeElement} = this.props;
        var beginFinishDegree = this.props.beginDegree;
        var pathVisibility = (activeElement.includes(this.props.name)) ? 'visible' : 'hidden';
        return (
            <g>
                {matrixData[currentIndex].map(function(dt,i){
                    var angle = (dt / totalSum) * 2 * Math.PI;
                    beginFinishDegree = beginFinishDegree + angle;
                    var beginStartDegree = beginFinishDegree-angle;
                    var x1 = this.props.x_func(inner_R, beginStartDegree);
                    var y1 = this.props.y_func(inner_R, beginStartDegree);
                    var x2 = this.props.x_func(inner_R, beginFinishDegree);
                    var y2 = this.props.y_func(inner_R, beginFinishDegree);

                    return (
                        <g id={this.props.name + "path" + i} key={"pathgroup"+i}>
                            <ChordFlow
                                x_func={this.props.x_func} y_func={this.props.y_func}
                                target={i} currentIndex={this.props.currentIndex}
                                groupData={this.props.groupData} matrixData={matrixData}
                                name={this.props.name} targetName={groupData[i].name}
                                totalSum={totalSum}
                                beginStartDegree={beginStartDegree} beginFinishDegree={beginFinishDegree}
                                targetBeginDegree={(this.props.currentIndex==i)?beginStartDegree:(groupData[i].endDegree-groupData[i].angle)} 

                                x1={x1} y1={y1}
                                x2={x2} y2={y2}
                                inner_R={inner_R} outter_R={outter_R}
                                color={this.props.color} pathVisibility={pathVisibility}
                            />
                        </g>
                    )
                }.bind(this))}
            </g>
        )
    }
}


class ChordFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        var { x1, x2, y1, y2, currentIndex, target} = this.props;
        const {inner_R, outter_R, matrixData, totalSum} = this.props;
        var pathAmount = matrixData[target][currentIndex];
        var endFinishDegree = this.props.targetBeginDegree;
        for(var i=0; i<this.props.currentIndex+1; i++){
            var angle = (matrixData[target][i] / totalSum) * 2 * Math.PI;
            endFinishDegree = endFinishDegree + angle;
            var endStartDegree = endFinishDegree - angle;
        }
        var x3 = this.props.x_func(inner_R, endStartDegree);
        var y3 = this.props.y_func(inner_R, endStartDegree);
        var x4 = this.props.x_func(inner_R, endFinishDegree);
        var y4 = this.props.y_func(inner_R, endFinishDegree);

        return (

            <g>
                <path className="chord" fill={this.props.color} stroke="black" strokeWidth="1px"
                    style={{visibility : this.props.pathVisibility}}
                    d={['M ', x1, ' ', y1,
                        ' A ', inner_R, ' ', inner_R, ', 0, 0 0, ', x2, ' ', y2,
                        ' Q ', 350, ' ', 350, ' ', x3, ' ', y3,
                        ' A ', inner_R, ' ', inner_R, ', 0, 0 0, ', x4, ' ', y4,
                        ' Q ', 350, ' ', 350, ' ', x1, ' ', y1,
                        ' Z'].join('')}>
                    <title>{this.props.name}?{this.props.targetName} : {pathAmount} </title>
                </path>
            </g>
        )
    }
}



