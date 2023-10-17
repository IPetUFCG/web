import { Icon, InputRightElement } from "@chakra-ui/react";
import { ClosedEyeIcon, OpenedEyeIcon } from "../general/Icons";

export type PasswordType = "text" | "password";

export default function PasswordToggle({
  type,
  setType,
}: {
  type: PasswordType;
  setType: (type: PasswordType) => void;
}) {
  function toggleType() {
    type === "text" ? setType("password") : setType("text");
  }

  return (
    <InputRightElement
      h="2.1875rem"
      w="2.1875rem"
      m="0.3125rem"
      transition="all 0.2s"
      borderRadius="0.1875rem"
      _hover={{ bg: "gray.3" }}
      onClick={toggleType}
      cursor="pointer"
    >
      <Icon h="0.9375rem" w="0.9375rem">
        {type === "text" ? <ClosedEyeIcon /> : <OpenedEyeIcon />}
      </Icon>
    </InputRightElement>
  );
}
