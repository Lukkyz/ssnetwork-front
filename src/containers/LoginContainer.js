import { connect } from "react-redux";
import Login from "../components/Login";
import { login } from "../actions/userActions";

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(Login);
