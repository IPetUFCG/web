import { useAxios } from "@/src/hooks/useAxios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { ImageType } from "../../FileInput/FileInput";
import CustomModalHeader from "../../Modal/CustomModalHeader";
import CreatePublicationForm from "../CreatePublication/CreatePublicationForm";
import { CreatePublicationFormType } from "../CreatePublication/CreatePublicationModal";
import { IPublication } from "../../../../types/publication";

export type EditPublicationModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: (newPublication: IPublication, id: number) => void;
} & IPublication;

const EditPublicationModal = ({
  content,
  id,
  petId,
  photos,
  createdAt,
  title,
  handleClose,
  handleSave,
  isOpen,
}: EditPublicationModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePublicationFormType>({
    defaultValues: {
      content,
      petId,
      title,
    },
  });
  const axios = useAxios();

  const [images, setImages] = React.useState<ImageType[]>(photos);

  const handleCreatePublication = async (data: CreatePublicationFormType) => {
    const payload: IPublication = {
      content: data.content,
      petId: Number(data.petId),
      title: data.title,
      photos: images.map((image) => ({
        alt: image?.alt,
        fileSize: image?.fileSize,
        fileUrl: image.fileUrl,
        title: image.title,
      })),
      id,
      createdAt,
    };

    try {
      await axios.put(`/publications/${id}`, payload);
      handleSave(payload, id);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    reset();
    setImages([]);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent minW="520px">
        <CustomModalHeader
          title="Criar Novo Publicatione"
          onClose={handleClose}
        />
        <ModalBody>
          <CreatePublicationForm
            register={register}
            images={images}
            setImages={setImages}
            errors={errors}
          />
        </ModalBody>
        <ModalFooter>
          <Flex gap={4}>
            <Button onClick={() => resetForm()} variant="ghost">
              Cancelar
            </Button>
            <Button
              onClick={handleSubmit(handleCreatePublication)}
              backgroundColor="#636FFF"
              color="white"
              _hover={{
                backgroundColor: "#0063D1",
              }}
            >
              Salvar
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPublicationModal;
