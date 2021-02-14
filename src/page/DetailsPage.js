import react from "react";
import * as Action from "../Actions/Action";
import { connect } from "react-redux";

class DetailsPage extends react.Component {

  render() {
    return (
      <div className="container">
        <h2>Welcome</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return{
    
  }
}


export default connect(
  mapStateToProps,
  Action
)(DetailsPage);
