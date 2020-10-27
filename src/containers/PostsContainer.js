import { connect } from "react-redux";
import Posts from "../components/Posts";
import { getPosts } from "../actions/postActions";

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

const mapStateToProps = (state) => ({
  posts: state.posts,
  user: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
