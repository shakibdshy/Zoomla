import React from "react";
import { Input, Button, styled } from "@100mslive/react-ui";
import { isStreamingKit } from "../../common/utils";
import { StreamChat } from "stream-chat";

const PreviewName = ({ name, onChange, onJoin, enableJoin }) => {
  const apiKey = "3pznn44zcu9w";
  const client = StreamChat.getInstance(apiKey);

  const formSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={formSubmit}>
      {client.user ? (
        <Button type="submit" disabled={!enableJoin} onClick={onJoin}>
          {isStreamingKit() ? "Join Studio" : "Join Room"}
        </Button>
      ) : (
        <>
          <Input
            required
            id="name"
            css={{ w: "100%" }}
            value={name}
            onChange={e => onChange(e.target.value)}
            placeholder="Enter your name"
            autoFocus
            autoComplete="name"
          />
          <Button
            type="submit"
            disabled={!name || !enableJoin}
            onClick={onJoin}
          >
            {isStreamingKit() ? "Join Studio" : "Join Room"}
          </Button>
        </>
      )}
    </Form>
  );
};

const Form = styled("form", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$4",
  mt: "$10",
  mb: "$10",
});

export default PreviewName;
