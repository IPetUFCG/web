import { Button } from "@chakra-ui/react";
import { GithubLogo, GoogleLogo } from "../general/Icons";

export default function AuthProvidersButtons({
  authWithGithub,
  authWithGoogle,
}: {
  authWithGithub?: () => void;
  authWithGoogle?: () => void;
}) {
  return (
    <>
      {authWithGithub && (
        <Button
          variant="unstyled"
          bg="github.black"
          color="github.white"
          size="lg"
          h="full"
          onClick={authWithGithub}
        >
          <GithubLogo h="1.5625rem" w="1.5625rem" />
        </Button>
      )}
      {authWithGoogle && (
        <Button variant="unstyled" bg="google.white" size="lg" h="full">
          <GoogleLogo h="1.5625rem" w="1.5625rem" />
        </Button>
      )}
    </>
  );
}
