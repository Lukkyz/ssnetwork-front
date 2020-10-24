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
import { useForm } from "react-hook-form";

function SignIn(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (values) => props.create(values);
  const password = useRef({})
  password.current = watch("password", "");
  return (
    <>
      <Button variantColor="green" onClick={onOpen} marginBottom="2%">
        Sign In
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                placeholder="Johndoe777"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-zÀ-ú0-9]{6,24}$/i,
                    message: "Invalid username",
                  },
                })}
              />
              <Text color="red.500">
                {errors.username && errors.username.message}
              </Text>

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
              <Text color="red.500">
                {errors.email && errors.email.message}
              </Text>

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

              <FormLabel marginTop="2vh">Confirm password</FormLabel>
              <Input
                name="confPassword"
                placeholder="Password"
                type="password"
                ref={register({
                  required: "Required",
                  validate: (value) =>
                    value === password.current || "Passwords don't match",
                })}
              />
              <Text color="red.500">
                {errors.confPassword && errors.confPassword.message}
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
