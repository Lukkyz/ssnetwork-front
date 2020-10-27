import React from "react";
import { Flex, Avatar } from "@chakra-ui/core";
import AddPost from "./addPost";
import Post from "../components/Post";

class Posts extends React.Component {
  componentWillMount() {
    this.props.getPosts();
  }
  render() {
    let posts = this.props.posts.map((post) => (
      <Post
        body={post.body}
        user={post.user ? post.user.username : this.props.user.username}
        key={post.id}
      />
    ));
    return (
      <Flex height="100vh" max-height="100vh">
        <Flex marginL="50em" width="100vw" max-width="100%">
          <Flex bg="green.500" color="white" width="15vw" padding="2em">
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />
            <h1>{this.props.user.username}</h1>
          </Flex>
          <Flex direction="column" align="center" width="75vw">
            <AddPost />
            <Flex direction="column" justify="space-between" width="50vw">
              {posts}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Posts;
