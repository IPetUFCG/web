import { Image } from "@chakra-ui/react";

export default function Background() {
  return (
    <>
      <Image
        src="/logo.svg"
        transform="rotate(-15deg)"
        w="2764px"
        h="1101px"
        zIndex="-1"
        position="fixed"
        top="-508px"
        left="-231px"
      />
      <Image
        src="/logo.svg"
        transform="rotate(-15deg)"
        w="2764px"
        h="1101px"
        zIndex="-1"
        position="fixed"
        bottom="-508px"
        right="-231px"
      />
    </>
  );
}
