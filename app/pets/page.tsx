"use client";

import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBoolean,
} from "@chakra-ui/react";

import { usePets } from "@/src/hooks/usePets";
import NavBar from "@/src/components/Navigation/NavBar";
import Card from "@/src/components/general/pet/Card";
import CustomIconButton from "@/src/components/general/CustomIconButton";
import CreatePetModal from "@/src/components/general/pet/CreatePetModal";

function PetsPage() {
  const { pets } = usePets();

  const [modalIsOpen, setModalStatus] = useBoolean();

  return (
    <>
      <NavBar />
      <Container>
        <Flex as="ul" flexWrap="wrap" gap="2rem" py="3rem">
          {pets.map((pet, index) => (
            <li key={`pet-${index}`}>
              <Card pet={pet} />
            </li>
          ))}
        </Flex>

        <Box position="fixed" bottom={16} right={32}>
          <CustomIconButton
            w="60px"
            h="60px"
            size="lg"
            borderRadius="50%"
            aria-label="create report"
            onClick={setModalStatus.on}
            icon={<AddIcon color="white" />}
          />
        </Box>

        <CreatePetModal isOpen={modalIsOpen} onClose={setModalStatus.off} />
      </Container>
    </>
  );
}

export default PetsPage;
