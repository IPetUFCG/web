import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CustomModalHeader from "../../Modal/CustomModalHeader";

export type DeleteReportsModalProps = {
  isOpen: boolean;
  title: string;
  handleClose: () => void;
  handleConfirm: () => void;
};

const DeleteReportsModal = ({
  handleClose,
  handleConfirm,
  isOpen,
  title,
}: DeleteReportsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent minW="520px">
        <CustomModalHeader title="Deletar Denúncias" onClose={handleClose} />
        <ModalBody>
          <Flex flexDir="column">
            <Text>
              Tem certeza que deseja deletar as denúncias da publicação :{" "}
              <Text fontWeight="bold">{title}</Text>
            </Text>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex gap={4}>
            <Button onClick={handleClose} variant="ghost">
              Cancelar
            </Button>
            <Button
              onClick={handleConfirm}
              backgroundColor="#636FFF"
              color="white"
              _hover={{
                backgroundColor: "#0063D1",
              }}
            >
              Confirmar
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteReportsModal;
