import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
  FormLabel,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignIn(props) {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (values) => {
    props
      .login(values)
      .then(() => history.push("/"))
      .catch(() => console.log("Non"));
  };

  return (
    <>
      <Button
        variantColor="green"
        onClick={onOpen}
        marginBottom="2%"
        variant="outline"
      >
        Log In
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel marginTop="2vh">Email</FormLabel>
              <Input
                name="email"
                placeholder="john777@doe.com"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              <FormLabel marginTop="2vh">Password</FormLabel>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^(?!.* )(?=.*\d)(?=.*[A-Z]).{8,24}$/,
                    message: "Invalid password",
                  },
                })}
              />
              <Text color="red.500">
                {errors.password && errors.password.message}
              </Text>

              <Button type="submit">Submit</Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignIn;
