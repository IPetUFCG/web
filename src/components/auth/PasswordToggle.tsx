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
      h="35px"
      w="35px"
      m="5px"
      transition="all 0.2s"
      borderRadius="3px"
      _hover={{ bg: "gray.2" }}
      onClick={toggleType}
      cursor="pointer"
    >
      <Icon h="15px" w="15px">
        {type === "text" ? <ClosedEyeIcon /> : <OpenedEyeIcon />}
      </Icon>
    </InputRightElement>
  );
}
