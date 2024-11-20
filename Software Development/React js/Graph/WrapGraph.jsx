/*
 * MeasurementGraph.jsx
 * Graph wrap part
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

import GraphDetail from './GraphDetail';
import DropDown from '../DropDown';
export default class WrapGraph extends React.Component{

    render(){
        var {page} = this.props;

        return(
            <div className="margin-bottom-4 w-100">
                <div className="row" >
                    
                        {this.props.channel.map(function(ch,k){
                                return(
                                    <div className="columns small-2" key={ch.dataSet_id}>
                                        <DropDown title={ch.dataSet_name} list={ch.channel_list} 
                                        channelChange={this.props.channelChange} key={'dropdown'+(k+1)}
                                        select={this.props.channel_select} timeref={ch.timeref}
                                        />
                                    </div>
                                )
                            
                        }.bind(this))}
                    
                </div>
                     
                    <GraphDetail graphDetail = {this.props.show}
                    clickGraph={this.props.clickGraph} 
                    channel_select={this.props.channel_select}
                    selectedDataSet = {this.props.selectedDataSet}
                    currentDataSet = {this.props.currentDataSet}
                    newTimeRef = {this.props.newTimeRef}
                    timeRefs={this.props.timeRefs}
                    />
               
        </div>
        )
    }
}
