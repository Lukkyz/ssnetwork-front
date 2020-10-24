import { useState, React } from "react";
import { connect } from "react-redux";
import { add } from "../actions/postActions";
import { Button, Textarea, Text } from "@chakra-ui/core";
import { useForm } from "react-hook-form";

function AddPost({ add }) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (values, e) => {
    const body = values.post;
    const post = {
      body,
    };
    add(post);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        name="post"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-zÀ-ú0-9]{6,500}$/,
            message: "Invalid message",
          },
        })}
        width="20vw"
        resize="none"
      />
      <Text color="red.500">{errors.post && errors.post.message}</Text>
      <Button type="submit">Send post</Button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  add: (post) => dispatch(add(post)),
});

export default connect(null, mapDispatchToProps)(AddPost);
