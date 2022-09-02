import { Button, Group } from "@mantine/core";
import { GoogleIcon } from "./GoogleIcon";
import { FacebookIcon } from "./FacebookIcon";
import { DiscordIcon, GithubIcon } from "@100mslive/react-icons";

export function GoogleButton(props) {
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      style={{
        backgroundColor: "rgb(37, 38, 43)",
        border: "1px solid rgb(55, 58, 64)",
      }}
      {...props}
    />
  );
}

export function FacebookButton(props) {
  return (
    <Button
      leftIcon={<FacebookIcon />}
      sx={theme => ({
        backgroundColor: "#4267B2 !important",
        color: "#fff !important",
        "&:hover": {
          backgroundColor: theme.fn.darken("#4267B2", 0.1),
        },
      })}
      {...props}
    />
  );
}

export function DiscordButton(props) {
  return (
    <Button
      leftIcon={<DiscordIcon size={16} />}
      sx={theme => ({
        backgroundColor: theme.colorScheme === "dark" ? "#5865F2" : "#5865F2",
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.fn.lighten("#5865F2", 0.05)
              : theme.fn.darken("#5865F2", 0.05),
        },
      })}
      {...props}
    />
  );
}

// Twitter button as anchor
// export function TwitterButton(props) {
//   return (
//     <Button
//       component="a"
//       leftIcon={<TwitterIcon size={16} color="#00ACEE" />}
//       variant="default"
//       {...props}
//     />
//   );
// }

export function GithubButton(props) {
  return (
    <Button
      {...props}
      leftIcon={<GithubIcon size={16} />}
      sx={theme => ({
        backgroundColor:
          theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        color: "#fff",
        "&:hover": {
          backgroundColor:
            theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        },
      })}
    />
  );
}

export function SocialButtons() {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton>Continue with Google</GoogleButton>
      {/* <TwitterButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </TwitterButton> */}
      <FacebookButton>Sign in with Facebook</FacebookButton>
      <GithubButton>Login with GitHub</GithubButton>
      <DiscordButton>Join Discord community</DiscordButton>
    </Group>
  );
}
