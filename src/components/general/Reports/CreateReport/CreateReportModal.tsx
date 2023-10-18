import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import CreateReportForm from "./CreateReportForm";

type CreateReportModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const CreateReportModal = ({ handleClose, isOpen }: CreateReportModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent minW="520px">
        <ModalHeader>Criar Novo Reporte</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CreateReportForm />
        </ModalBody>
        <ModalFooter>
          <Flex gap={4}>
            <Button onClick={() => handleClose()} variant="ghost">
              Cancelar
            </Button>
            <Button
              backgroundColor="#0078FF"
              color="white"
              _hover={{
                backgroundColor: "#0063D1",
              }}
            >
              Criar
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateReportModal;
