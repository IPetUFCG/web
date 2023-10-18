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

const CreateReportForm = () => {
  const [imageSrc, setImageSrc] = React.useState("");

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const base64String = e.target?.result as string;
      setImageSrc(base64String);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <FormControl size="lg">
      <Flex mt={8} w="100%" flexDirection="column" gap={8}>
        <Flex flexDirection="column">
          <FormLabel>Imagem</FormLabel>
          <Box
            w={imageSrc ? "100%" : undefined}
            h={imageSrc ? "200px" : undefined}
            backgroundImage={imageSrc}
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            mb={4}
          />
          <Input onChange={handleImage} type="file" placeholder="" />
        </Flex>
        <Box>
          <FormLabel>Animal</FormLabel>
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
