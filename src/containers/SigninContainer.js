import { connect } from "react-redux";
import Signin from "../components/Signin";
import { createUser } from "../actions/userActions";

const mapDispatchToProps = (dispatch) => ({
  create: (user) => dispatch(createUser(user)),
});

export default connect(null, mapDispatchToProps)(Signin);
