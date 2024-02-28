import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Flex,
  Button,
  FormErrorMessage,
  Box,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

import { useAxios } from "@/src/hooks/useAxios";
import CustomModalHeader from "../../Modal/CustomModalHeader";

export type EditReportModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const DenounceReportModal = ({ handleClose, isOpen }: EditReportModalProps) => {
  const axios = useAxios();

  const [reason, setReason] = useState("");
  const [error, setError] = useState(false);

  const handleDenounceReport = async () => {
    if (!reason) {
      setError(true);
      return;
    }

    try {
      console.log(reason);
      // await axios.put(`/reports/${id}`, payload);
      // resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent minW="520px">
        <CustomModalHeader
          title="Resportar esta publicação"
          onClose={handleClose}
        />
        <ModalBody>
          {/* <CreateReportForm
            register={register}
            images={images}
            setImages={setImages}
            errors={errors}
          /> */}
          <Box>
            <FormLabel>Por que está reportando essa publicação?</FormLabel>
            <Textarea
              name="reason"
              value={reason}
              isInvalid={error}
              onChange={(e) => setReason(e.target.value)}
            />
            {error && (
              <FormErrorMessage>É preciso adicionar um motivo</FormErrorMessage>
            )}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Flex gap={4}>
            <Button onClick={() => resetForm()} variant="ghost">
              Cancelar
            </Button>
            <Button
              onClick={handleDenounceReport}
              backgroundColor="#636FFF"
              color="white"
              _hover={{
                backgroundColor: "#0063D1",
              }}
            >
              Enviar
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DenounceReportModal;
