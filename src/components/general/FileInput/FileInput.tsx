import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export type ImageType = {
  fileSrc: string;
  title: string;
  fileSize?: number;
  alt?: string;
};

export type FileInputProps = {
  images: ImageType[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function FileInput({
  images,
  onChange,
  disabled,
}: FileInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="file-input-container">
      <Flex
        p={8}
        gap={4}
        justify="center"
        alignItems="center"
        borderRadius="md"
        border="1px dashed rgba(0, 0, 0, .3)"
        onClick={(e) => {
          e.stopPropagation();
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
        className="file-input-wrapper"
        _hover={{
          cursor: "pointer",
        }}
        aria-disabled={disabled}
        _disabled={{
          borderColor: "#cdcdcd",
          color: "#cdcdcd",
          cursor: "not-allowed",
        }}
      >
        <AddIcon />
        <span>Adicione Fotos</span>
      </Flex>
      <Flex gap={4} mt={4}>
        {images.map((image) => (
          <Box
            key={image.title}
            w={image.fileSrc ? "100%" : undefined}
            h={image.fileSrc ? "200px" : undefined}
            backgroundImage={image.fileSrc}
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            mb={4}
          />
        ))}
      </Flex>
      <input
        ref={inputRef}
        onChange={onChange}
        type="file"
        style={{ display: "none" }}
        disabled={disabled}
      />
    </div>
  );
}
