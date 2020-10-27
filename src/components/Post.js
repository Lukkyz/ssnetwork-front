import React from "react";
import { Text, Avatar, Flex } from "@chakra-ui/core";

class Post extends React.Component {
  render() {
    return (
      <Flex direction="column" bg="gray.100" padding="1em">
        <Flex>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Text marginLeft="1em">{this.props.user}</Text>
        </Flex>
        <Text>{this.props.body}</Text>
      </Flex>
    );
  }
}

export default Post;
