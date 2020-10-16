import React from "react";
import {
  Flex,
  Button,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";
import SigninContainer from "../containers/SigninContainer";
import LoginContainer from "../containers/LoginContainer";
import { BiWorld } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { BsFillPeopleFill } from "react-icons/bs";

class Account extends React.Component {
  render() {
    return (
      <Flex height="100vh">
        <List height="100vh" bg="green.500" color="white">
          <Flex
            padding="10%"
            height="100vh"
            justify="space-around"
            direction="column"
          >
            <ListItem>
              <Heading as="h2">
                <ListIcon as={BsFillPeopleFill} />
                Connect with people
              </Heading>
            </ListItem>
            <ListItem>
              <Heading as="h2">
                <ListIcon as={TiMessages} />
                Communicate
              </Heading>
            </ListItem>
            <ListItem>
              <Heading as="h2">
                <ListIcon as={BiWorld} />
                Share with the world
              </Heading>
            </ListItem>
          </Flex>
        </List>
        <Flex width="80vw" direction="column" justify="center" align="center">
          <Heading as="h3">Connect Now !</Heading>
          <Flex direction="column" width="15vw">
            <SigninContainer />
            <LoginContainer />
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Account;
