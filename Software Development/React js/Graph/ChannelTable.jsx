/*
 * ChannelTable.jsx
 * Channel relevant Table
 *
 * Created in October 2018
 *
 *
 * Authors
 *    @author [Jiyun Kim](micajy96@gmail.com)
 *
 */ 

const measure_data = { cluster_count: 5,
  cluster_quality: 0.7,
  channels: [{ name: "a", relevance: 0.7 }, 
    { name: "b", relevance: 0.8 },
    { name: "c", relevance: 0.5 },
    { name: "d", relevance: 0.6 },
    { name: "f", relevance: 0.7 }] };

export default class ChannelTable extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        channel_info : [],
      }
  }
  componentDidMount(){
    
    var url_dataset = "".concat(this.props.selectedDataSet);

    $.ajax({
        url: `service/compare?datasets=${url_dataset}`,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
        this.setState({channel_info : data})
        }.bind(this)
    }) ;
}

  renderChannelTable(data){
    return(
      data.map(function(dt,index){
        var clasname = (index%2==1) ? " border-bottom-base-color-2 padding-y-1" : " padding-y-1" ;
        return(
          <div className={ "table-cell-wrap"+clasname} key={dt.name}>
            <div className="cell">{dt.name}</div>
            <div className="cell w-25 ">
              <svg  x="0px" y="0px" viewBox="0 0 804 182" fill="#FFFFFF">
              <rect x="6%" fill="#eead49" width={(100*dt.relevance-7)+"%"} height="100%"/>
              <path className="st0" d="M0-22v221h815V-22H0z M145.9,141.1L111,122.7l-34.9,18.4l6.7-38.9L54.5,74.6L93.5,69L111,33.6L128.5,69
                l39.1,5.7l-28.3,27.5L145.9,141.1z M290.2,141.1l-34.9-18.4l-34.9,18.4l6.7-38.9l-28.3-27.5l39.1-5.7l17.5-35.4L272.7,69l39.1,5.7
                l-28.3,27.5L290.2,141.1z M434.4,141.1l-34.9-18.4l-34.9,18.4l6.7-38.9L343,74.6L382,69l17.5-35.4L417,69l39.1,5.7l-28.3,27.5
                L434.4,141.1z M578.7,141.1l-34.9-18.4l-34.9,18.4l6.7-38.9l-28.3-27.5l39.1-5.7l17.5-35.4L561.2,69l39.1,5.7L572,102.2L578.7,141.1
                z M722.9,141.1L688,122.7l-34.9,18.4l6.7-38.9l-28.3-27.5l39.1-5.7L688,33.6L705.5,69l39.1,5.7l-28.3,27.5L722.9,141.1z"/>
              </svg>
            </div>
	</div>
        )
      })
    )
  }
  render(){
      return(
          <div className="table-wrap">
          <div className="table-title-wrap base-color-3 padding-y-1">
            <div className="columns-title">{this.props.selectedDataSet.length} groups detected </div>
            <div className="columns-title">Relevance</div>
          </div>
	<div className="cell-rap" >
          {this.renderChannelTable(measure_data.channels)}
	 </div>
	</div>
      )
  }
}
