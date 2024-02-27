import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import CreatePublicationForm from "./CreatePublicationForm";
import CustomModalHeader from "../../Modal/CustomModalHeader";
import { useForm } from "react-hook-form";
import { useAxios } from "@/src/hooks/useAxios";
import { ImageType } from "../../FileInput/FileInput";

export type CreatePublicationFormType = {
  title: string;
  content: string;
  petId: number;
};

type CreatePublicationModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleCreate: (newPublication: any) => void;
};

const CreatePublicationModal = ({
  handleClose,
  isOpen,
  handleCreate,
}: CreatePublicationModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePublicationFormType>();
  const axios = useAxios();

  const [images, setImages] = React.useState<ImageType[]>([]);

  const handleCreatePublication = async (data: CreatePublicationFormType) => {
    const payload = {
      content: data.content,
      petId: Number(data.petId),
      title: data.title,
      photos: images.map((image) => ({
        alt: image?.alt,
        fileSize: image?.fileSize,
        fileUrl: image.fileUrl,
        title: image.title,
      })),
    };

    try {
      const { data } = await axios.post("/publications", payload);
      handleCreate(data);
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
      <ModalContent>
        <CustomModalHeader
          title="Criar Nova Publicação"
          onClose={handleClose}
        />
        <ModalBody>
          <CreatePublicationForm
            register={register}
            images={images}
            setImages={(images) => setImages(images)}
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
              Criar
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreatePublicationModal;
