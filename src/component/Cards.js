import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends react.Component {
  handleClick =(data,i)=>{
    window.open("/DetailsPage", '_blank');
  }
  render() {
    return (
      <div className="card-parent">
      {this.props.details? this.props.details.map((data,i)=>(
      <div className="card" key={i}>
          <div className="card-header">
            <div className="card-image">
              <img className="img-size" src={data.urlToImage} />
            </div>
            <h3 className="card-author">{data.author}</h3>
            <h5 className="card-content">{data.title}</h5>
          </div>
          <div className="card-body">
            <div className="card-discription">
            {data.description}
            </div>
          </div>
          <div className="card-footer">
            <button onClick={()=>{this.handleClick(data,i)}} type="primary">Click Me</button>
          </div>
        </div>
      )):[]}
      </div>
    );
  }
}
export default Cards;
