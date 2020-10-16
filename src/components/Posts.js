import React from "react";
import { connect } from "react-redux";

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>Index</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  logged: state.users.logged,
});
export default connect(mapStateToProps, null)(Posts);
