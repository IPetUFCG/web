import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const FilterBar = () => {
  return (
    <Flex w="100%" justifyContent="end">
      <InputGroup w="30%" size="md">
        <Input placeholder="Buscar por titulo ou animal" />
        <InputRightElement>
          <IconButton
            variant="ghost"
            aria-label="search"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default FilterBar;
