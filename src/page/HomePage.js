import react from "react";
import Cards from "../component/Cards";
import * as Action from "../Actions/Action";
import { connect } from "react-redux";

class HomePage extends react.Component {
  constructor(props){
    super(props)
    this.state = {
      totalValue: [],
      startIndex:0,
      maxIndex:6
    } 
  }
  
  componentDidMount(){
    fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=d0383e3426b14849beb1f1150adbb786')
    .then(res => res.json())
    .then(details => {
      this.setState({
        totalValue: details.articles.slice(this.state.startIndex,this.state.maxIndex)
      },()=>{
        this.props.getDetails(details);
      })
    })
    .catch(err =>{
      console.log(err)
    })
    
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillMount(){
    window.removeEventListener("scroll", this.handleScroll)
  }

  

  handleScroll = () =>{
    if (window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight){
          this.setState({
            totalValue: this.props.data.slice(this.state.startIndex,this.state.maxIndex + 3)
          },()=>{
            console.log(this.props.data)
          })
          this.setState({
            maxIndex:this.state.maxIndex + 3
          })
        } 
  }
  
  render() {
    return (
      <div className="">
        <Cards details={this.state.totalValue} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return{
    data: state ? state.getData: []
  }
}


export default connect(
  mapStateToProps,
  Action
)(HomePage);
