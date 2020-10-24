import React from "react";
import { connect } from "react-redux";
import { Flex, Avatar } from "@chakra-ui/core";
import AddPost from "./addPost";

class Posts extends React.Component {
  render() {
    return (
      <div>
        <Flex width="100vw" max-width="100%">
          <Flex
            bg="green.500"
            color="white"
            width="15vw"
            height="100vh"
            padding="2em"
          >
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />
            <h1>{this.props.user.username}</h1>
          </Flex>
          <Flex>
            <AddPost />
          </Flex>
        </Flex>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.users,
});
export default connect(mapStateToProps, null)(Posts);
