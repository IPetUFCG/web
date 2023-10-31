import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import FileInput, { ImageType } from "../../FileInput/FileInput";

const CreateReportForm = () => {
  const [images, setImages] = React.useState<ImageType[]>([]);

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) return;

    if (images.length === 3) return;

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const base64String = e.target?.result as string;
      const newImage: ImageType = {
        fileSrc: base64String,
        title: file.name,
        fileSize: file.size,
      };
      setImages((prev) => [...prev, newImage]);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <FormControl size="lg">
      <Flex mt={8} w="100%" flexDirection="column" gap={8}>
        <Flex flexDirection="column">
          <FormLabel>Imagem</FormLabel>
          <FileInput
            images={images}
            onChange={handleImage}
            disabled={images.length === 3}
          />
        </Flex>
        <Box>
          <FormLabel>Pet</FormLabel>
          <Select></Select>
        </Box>

        <Box>
          <FormLabel>Titulo</FormLabel>
          <Input />
        </Box>
        <Box>
          <FormLabel>Descrição</FormLabel>
          <Textarea />
        </Box>
      </Flex>
    </FormControl>
  );
};

export default CreateReportForm;
