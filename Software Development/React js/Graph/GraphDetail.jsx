/*
 * GraphDetail.jsx
 * Whole Graph part
 * Made for Graphs full screen function
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

import BoxGraph from './BoxGraph';
import LineGraph from './LineGraph';
import ChannelTable from './ChannelTable';

export default class GraphDetail extends React.Component{

    constructor(props){
        super(props)
            this.state={
            }
    }

    renderLineGraph(){
        return(
            <div className="columns large-expand medium-12 small-12 margin-1 border border-radius-s preview-columns" style={{position:"relative"}} >
            <div style={{position:"absolute", bottom:"0", right:"8px"}}>
            <button
            name = "line-graph"
            type="button"
            value="line-graph" className="circle-btn-size-s  button-gray"
            onClick = {this.props.clickGraph}
            style={{float:"inline-end"}}
            >
                <i className="icon-fullscrean"></i>
            </button>
            </div>
            <div className="graph-rap"  style={{position:"relative"}}>
                <fieldset className="margin-y-3" name="line-graph" style={{height:"100%", border:"0"}} 
                   // onClick = {this.props.clickGraph} 
                    >
                    <LineGraph 
                        channel_select={this.props.channel_select}
                        selectedDataSet = {this.props.selectedDataSet}
                        newTimeRef = {this.props.newTimeRef}
                        currentDataSet = {this.props.currentDataSet}
                        timeRefs={this.props.timeRefs}
                    />
                </fieldset>
            </div>
            </div>
           
        )
    }

    renderBoxGraph(){
        return(
            <div className="columns large-expand medium-12 small-12 margin-1 border border-radius-s preview-columns" style={{position:"relative"}} >
            <div style={{position:"absolute", bottom:"0", right:"8px"}}>
            <button
            name = "box-graph"
            type="button"
            value="box-graph" className="circle-btn-size-s  button-gray"
            onClick = {this.props.clickGraph}
            style={{float:"inline-end"}}
            >
                <i className="icon-fullscrean"></i>
            </button>
            </div>
            <div className="graph-rap" style={{position:"relative"}}>
              <fieldset className="" name="box-graph" style={{height:"100%", border:"0"}} 
                //onClick = {this.props.clickGraph} 
                >
                   <BoxGraph 
                    channel_select={this.props.channel_select}
                    selectedDataSet = {this.props.selectedDataSet}
                   />
               </fieldset>
            </div>
            </div>
        )
    }

    renderChannelTable(){
        return(
            <div className="columns large-expand medium-12 small-12 margin-1 border border-radius-s padding-1  preview-columns" style={{position:"relative"}} >
            <div style={{position:"absolute", bottom:"0", right:"8px"}}>
            </div>
            <div style={{position:"relative"}}>
              <fieldset className="" name="channel-table" style={{height:"100%", border:"0"}}
               //onClick = {this.props.clickGraph}
               >
                  <ChannelTable
                  channel_select={this.props.channel_select}
                  selectedDataSet = {this.props.selectedDataSet}
                   />
               </fieldset>
	<div className="download-btn-wrap">
               <button
            name = "channel-table"
            type="button"
            value="channel-table" className="circle-btn-size-s  button-gray"
            onClick = {this.props.clickGraph}
            style={{float:"inline-end"}}
            >
                <i className="icon-export"></i>
            </button>
	</div>
            </div>
            </div>
        )
    }
    render(){
        
        if(this.props.graphDetail=="graph"){
            return(
                <div className="row medium-unstack">
                    
                    
                        {this.renderLineGraph()}
                        {this.renderBoxGraph()}
                        {this.renderChannelTable()}
                    
                </div>
            )
        }else if(this.props.graphDetail=="line-graph"){
            return(
                
                <div className="row" >
                        {this.renderLineGraph()}
                </div>
               
            )
        }else if(this.props.graphDetail=="box-graph"){
            return(
                <div className="row ">
                        {this.renderBoxGraph()}
                </div>

            )
        }else if(this.props.graphDetail=="channel-table"){
            return(
                <div className="row" >
                        {this.renderChannelTable()}
                </div>
            )
        }
    }
}
