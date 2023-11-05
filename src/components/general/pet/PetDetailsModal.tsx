import { Pet } from "@/src/models/Pet";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pet: Pet;
}

export default function PetDetailsModal({ isOpen, onClose, pet }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detalhes do Pet</ModalHeader>
        <ModalCloseButton />

        <ModalBody></ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
