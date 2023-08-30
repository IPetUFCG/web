import { Flex, FlexProps } from "@chakra-ui/react";
import Background from "../auth/Background";

export default function Main({
  children,
  uPetsBackground,
  ...flexProps
}: FlexProps & { children: JSX.Element; uPetsBackground?: boolean }) {
  return (
    <Flex as="main" h="100vh" {...flexProps}>
      {children}
      {uPetsBackground && <Background />}
    </Flex>
  );
}
