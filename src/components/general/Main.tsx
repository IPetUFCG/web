import { Container, ContainerProps } from "@chakra-ui/react";

export default function Main({
  children,
  ...containerProps
}: ContainerProps & { children: JSX.Element }) {
  return (
    <Container as="main" h="100vh" w="100vw" {...containerProps}>
      {children}
    </Container>
  );
}
