import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import {
  FacebookButton,
  GoogleButton,
} from "../components/SocialButtons/SocialButtons";
import Cookies from "universal-cookie";
import { StreamChat } from "stream-chat";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";

const cookies = new Cookies();

export function ZoomlaAuth() {
  const [type, toggle] = useToggle(["login", "register"]);
  const apiKey = "3pznn44zcu9w";
  const client = StreamChat.getInstance(apiKey);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const form = useForm({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      avatarURL: "",
      terms: true,
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: val =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const { username, email, password, phoneNumber, avatarURL } = form;

    console.log(form);

    const URL = "https://zoomla-backend.herokuapp.com/auth";

    const { data } = await axios.post(
      `${URL}/${type ? "stream-signup" : "stream-login"}`,
      {
        username,
        email,
        password,
        fullName: form.fullName,
        phoneNumber,
        avatarURL,
      }
    );
    const { token, userId, hashedPassword, fullName } = data;
    if (type === "register" && data) {
      const userData = {
        name: fullName,
        email: username,
        password: hashedPassword,
        avatar: avatarURL,
      };
      const url = "https://zoomla-backend.herokuapp.com/api/auth";

      await axios.post(`${url}/${type ? "signup" : "signin"}`, userData);
      //console.log(data);
    }

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("email", email);
    cookies.set("userId", userId);

    if (type === "register") {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();

    if (client.user) {
      Navigate(from, { replace: true });
    }
  };

  return (
    <Paper className="max-w-xl my-10 mx-auto" radius="md" p="xl" withBorder>
      <Text size="lg" weight={500}>
        Welcome to Zoomla, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <FacebookButton radius="xl">Facebook</FacebookButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={handleSubmit}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your Full name"
              value={form.values.fullName}
              onChange={event =>
                form.setFieldValue("fullName", event.currentTarget.value)
              }
            />
          )}

          {type === "register" && (
            <TextInput
              label="Email"
              placeholder="Your email"
              value={form.values.email}
              onChange={event =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />
          )}

          <TextInput
            required
            label="Username"
            placeholder="username"
            value={form.values.username}
            onChange={event =>
              form.setFieldValue("username", event.currentTarget.value)
            }
          />

          {type === "register" && (
            <TextInput
              required
              label="Avatar URL"
              placeholder="Avatar URL"
              value={form.values.avatarURL}
              onChange={event =>
                form.setFieldValue("avatarURL", event.currentTarget.value)
              }
            />
          )}

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={event =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
          />

          {type === "register" && (
            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Confirm password"
              value={form.values.password}
              onChange={event =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />
          )}

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={event =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button
            type="submit"
            style={{ backgroundColor: "rgb(25, 113, 194)" }}
          >
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
