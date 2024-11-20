import ChordPathGroupData from './ChordPathGroup';

/* 
const matrixDataSets = [
    // Set1
    [[50, 599, 366, 7.73, 118, 322, 99],
    [321, 0, 19.3, 48.9, 57.6, 324, 120],
    [10.1, 111, 0, 3.22, 2.83, 0.87, 6],
    [28.2, 88.5, 38.8, 0, 25.9, 796, 30],
    [326, 0.78, 9.79, 62, 0, 163, 500],
    [11.1, 3.1, 3.77, 3.16, 6.38, 0, 780],
    [326, 200, 9.79, 62, 50, 163, 0]],
    // Set2
    [[50, 599, 366, 7.73, 118, 322, 99],
    [321, 0, 19.3, 48.9, 57.6, 324, 120],
    [10.1, 111, 0, 3.22, 2.83, 0.87, 6],
    [28.2, 88.5, 38.8, 0, 25.9, 796, 30],
    [326, 0.78, 9.79, 62, 0, 163, 500],
    [11.1, 3.1, 3.77, 3.16, 6.38, 0, 780],
    [326, 200, 9.79, 62, 50, 163, 0]
    ],
    // Set3
    [[50, 599, 366, 7.73, 118, 322, 99],
    [321, 0, 19.3, 48.9, 57.6, 324, 120],
    [10.1, 111, 0, 3.22, 2.83, 0.87, 6],
    [28.2, 88.5, 38.8, 0, 25.9, 796, 30],
    [326, 0.78, 9.79, 62, 0, 163, 500],
    [11.1, 3.1, 3.77, 3.16, 6.38, 0, 780],
    [326, 200, 9.79, 62, 50, 163, 0]
    ],
];
const matrixData = [
    [50, 599, 366, 7.73, 118, 322, 99],// 1st row : 1561.73
    [321, 0, 19.3, 48.9, 57.6, 324, 120],// 2nd row : 890.8
    [10.1, 111, 0, 3.22, 2.83, 0.87, 6],// 3rd row : 134.02
    [28.2, 88.5, 38.8, 0, 25.9, 796, 30],// 4th row : 1007.4
    [326, 0.78, 9.79, 62, 0, 163, 500],// 5th row : 1061.57
    [11.1, 3.1, 3.77, 3.16, 6.38, 0, 780],// 6th row : 807.51
    [326, 200, 9.79, 62, 50, 163, 0]// 7th row : 810.79
    // total : 6223.82
];
const groupName = [
    "France", "Germany", "Italy", "Japan",
    "Spain", "United States", "Korea"
]
const groupArcColor = [
  //  "#FFC871", "#EEAD49", "#D68C16",
//    "#D7EEE9", "#B8DDD8", "#78BFB6", "#009682",
    "#CEA8DC", "#75308E", "#37044A",
    "#70B0E6", "#30638E", "#052948",
    "#F2929F", 
    //"#CB4B5A", "#AD172B"
];*/

const groupPathColor = [
    "#009682", "#D68C16", "#AD172B"
];

const groupArcColor = [
    //  "#FFC871", "#EEAD49", "#D68C16",
    //    "#D7EEE9", "#B8DDD8", "#78BFB6", "#009682",
    "#CEA8DC", "#75308E", "#37044A",
    "#70B0E6", "#30638E", "#052948",
    "#F2929F",
    //"#CB4B5A", "#AD172B"
];
const groupName = [
    //E-class
    "W214", "V214", "S214", "X214", "C239", "A239", "C258",
    // other class
    "A236", "C236", "C238", "R232", "S206", "V206", "V223", "W177",
    "W205", "W206", "W213", "W223", "X254"
    // NUMBER OF GROUP : 20
]
const matrixDataSets = [
    // DataSet 1
    [
        [23, 179, 181, 173, 74, 69, 118, 0, 0, 0, , 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 21, 3, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 3, 4, 1, 2, 53, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 19, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [18, 20, 23, 22, 21, 18, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [98, 93, 88, 95, 99, 88, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [9, 7, 7, 7, 5, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    // DataSet 2
    [
        [32, 38, 21, 6, 13, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 41, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 1, 53, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [53, 3, 3, 1, 16, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [6, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    // DataSet 3
    [
        [289, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

];

class Chord extends React.Component {

    constructor(props) {
        super(props);
        var num_dataSet = matrixDataSets.length;
        var num_group = matrixDataSets[0].length;
        var flat_1 = this.arrayFlater(matrixDataSets);
        var flat_2 = this.arrayFlater(flat_1);
        var total = this.calAmount(flat_2);
        this.state = {
            outter_R: "300",
            inner_R: "250",
            groupData: [],
            total: total,
            activeElement:groupName[0], 
            clickedElement : [],

            num_dataSet : num_dataSet,
            num_group :num_group,
            flat_1 : flat_1,
        }
        this.arrayFlater = this.arrayFlater.bind(this);
        this.calAmount = this.calAmount.bind(this);
        this.mouseClickChange = this.mouseClickChange.bind(this);
        this.calGroup = this.calGroup.bind(this);
    }
    
    componentDidMount() {
        var newData = [];
        const total = this.state.total;
        var cal = 0;
        for(var i=0; i<this.state.num_group; i++){
            var obj = {};
            var sum = this.calGroup(this.state.flat_1,i);
            cal = cal + 2 * Math.PI * (sum / total);
            obj["name"] = groupName[i];
            obj["sum"] = sum;
            //obj["arcColor"] = groupArcColor[i];
            obj["arcColor"] = "lightgray";
            obj["angle"] = 2 * Math.PI * (sum / total);
            obj["endDegree"] = cal;

            newData.push(obj);  
        }
        this.setState({ groupData: newData})
    }

    // Calculate the amounts
    arrayFlater(data) {
        var flat = data.reduce(function (a, b) { return a.concat(b) });
        return flat;
    }
    calAmount(data) {
        var sum = data.reduce(function (accumulator, currentValue) {
            return (accumulator + currentValue);
        })
        return sum;
    }

    calGroup(data,index){
        var sum = 0;
        for (var i = 0; i < this.state.num_dataSet; i++) {
            sum = sum + this.calAmount(data[index + (this.state.num_group * i)]);
        }
        return sum
    }

    // MouseOver 
    mouseOverChangeActive(name){
        var activeName = this.state.clickedElement.slice();;
        activeName.push(name);
        this.setState({ activeElement : activeName})
    }
    mouseLeaveChangeActive(){
        this.setState({ activeElement: this.state.clickedElement })
    }

    // MouseClick
    mouseClickChange(name) {
        var clickedName = this.state.clickedElement;
                if (clickedName.indexOf(name) < 0) {
                    clickedName.push(name);  
                }else {
                    clickedName.splice(clickedName.indexOf(name), 1);
                }
        this.setState({ clickedElement: clickedName })
    }

    render() {
        var { total, groupData } = this.state;
        var y_func = function (r, arg) {
            return Math.round(350 - r * Math.sin(arg));
        };
        var x_func = function (r, arg) {
            return Math.round(350 + r * Math.cos(arg));
        };

        return (
            <svg width="700px" height="700px">
                <g id="circle" >
                    <circle cx="50%" cy="50%" r="300" fill="transparent" stroke="lightgray" strokeWidth="30px" />

                    {groupData.map(function (dt, i) {
                        return (
                            <g key={'group'+i}>
                                <ChordArc
                                    id={'group' + i} currentIndex={i} name={dt.name}
                                    // Group Degrees
                                    beginDegree={dt.endDegree - dt.angle} endDegree={dt.endDegree}
                                    // Radius
                                    outter_R={this.state.outter_R} inner_R={this.state.inner_R}
                                    // Arc color
                                    color={dt.arcColor}
                                    // Sums
                                    groupSum={dt.sum} totalSum={total}
                                    // Datas
                                    groupData={groupData} 
                                    // functions for coodinates
                                    x_func={x_func} y_func={y_func}
                                    // mouse events
                                    mouseOverChangeActive={this.mouseOverChangeActive.bind(this)}
                                    mouseLeaveChangeActive={this.mouseLeaveChangeActive.bind(this)}
                                    mouseClickChange={this.mouseClickChange.bind(this)}
                                />
                            
                                <ChordPathGroupData
                                    id={'group' + i} currentIndex={i} name={dt.name}
                                    // Group Degrees
                                    beginDegree={dt.endDegree - dt.angle} endDegree={dt.endDegree}
                                    // Radius
                                    outter_R={this.state.outter_R} inner_R={this.state.inner_R}
                                    // Paths color
                                    groupPathColor={groupPathColor}
                                    // Sums
                                    groupSum={dt.sum} total={total}
                                    // Datas
                                    groupData={groupData} matrixDataSets={matrixDataSets}
                                    // nums
                                    num_dataSet={this.state.num_dataSet}
                                    // Activated Elements
                                    activeElement={this.state.activeElement}
                                    // functions for coodinates
                                    x_func={x_func} y_func={y_func} calAmount={this.calAmount}
                                />
                            </g>
                        )
                    }.bind(this))}
                </g>
            </svg>

        )
    }
}

export default Chord;



class ChordArc extends React.Component {

    handleMouseOver(e){
        this.props.mouseOverChangeActive(e.target.getAttribute('name'));
    }
    handleMouseClick(e) {
        this.props.mouseClickChange(e.target.getAttribute('name'));
    }

    render() {
        const { inner_R, outter_R, beginDegree, endDegree } = this.props;

        // Assign x,y coordinates
        var x1 = this.props.x_func(outter_R, beginDegree);
        var y1 = this.props.y_func(outter_R, beginDegree);
        var x2 = this.props.x_func(outter_R, endDegree);
        var y2 = this.props.y_func(outter_R, endDegree);
        var x3 = this.props.x_func(inner_R, endDegree);
        var y3 = this.props.y_func(inner_R, endDegree);
        var x4 = this.props.x_func(inner_R, beginDegree);
        var y4 = this.props.y_func(inner_R, beginDegree);

        // Text align
        const text_r = (Number(inner_R) + Number(outter_R)) / 2;
        var text_ceta = ((beginDegree + endDegree) / 2);
        var text_ang = ((Math.PI / 2) - text_ceta) * (180 / Math.PI);
        var text_x = this.props.x_func(text_r, text_ceta);
        var text_y = this.props.y_func(text_r, text_ceta);

        return (
            <g className={this.props.id} >
                <path id={this.props.id} name={this.props.name}  
                    fill={this.props.color} stroke="black" strokeWidth="3px"
                    onMouseOver={this.handleMouseOver.bind(this)}
                    onMouseLeave={this.props.mouseLeaveChangeActive}
                    onClick={this.handleMouseClick.bind(this)}
                    d={['M ', x1, ' ', y1,
                        ' A ', outter_R, ' ', outter_R, ', 0, 0 0, ', x2, ' ', y2,
                        ' L ', x3, ' ', y3,
                        ' A ', inner_R, ' ', inner_R, ', 0, 0 1, ', x4, ' ', y4,
                        ' Z'].join('')}
                >
                    <title>{this.props.name}</title>
                </path>
                <text id={this.props.id}
                    transform={['rotate(', text_ang, ', ', text_x, ', ', text_y, ')'].join('')}
                    textAnchor="middle" fill="black"
                    fontSize="15px"
                    x={text_x}
                    y={text_y}
                >
                    {this.props.name}
                </text>
            </g>
        )
    }
}
