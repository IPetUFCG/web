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
          <GithubLogo h="25px" w="25px" />
        </Button>
      )}
      {authWithGoogle && (
        <Button variant="unstyled" bg="google.white" size="lg" h="full">
          <GoogleLogo h="25px" w="25px" />
        </Button>
      )}
    </>
  );
}
