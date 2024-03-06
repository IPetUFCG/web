import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Grid,
  Text,
  IconButton,
  useMediaQuery,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import React from "react";

import Carousel from "../../ImageSlider/Carousel";
import { useAxios } from "@/src/hooks/useAxios";
import MobilePublicationCard from "./MobilePublicationCard";
import EditPublicationModal from "../EditPublication/EditPublicationModal";
import { IPublication } from "@/src/types/publication";
import DeleteAlert from "../../DeleteAlert/DeleteAlert";

export type PublicationCardProps = {
  owner: boolean;
  deletePublication: (id: number) => void;
  editPublication: (Publication: IPublication, id: number) => void;
  userName: string;
  userEmail: string;
  userPhone?: string;
} & IPublication;

const PublicationCard = ({
  owner,
  content,
  photos,
  title,
  id,
  deletePublication,
  editPublication,
  petId,
  createdAt,
  userEmail,
  userName,
  userPhone,
}: PublicationCardProps) => {
  const cancelRef = React.useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const axios = useAxios();

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);

  const handleDeletePublication = async () => {
    try {
      await axios.delete(`Publications/${id}`);
      deletePublication(id);
      setDeleteModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex flexDir="column">
      {owner && (
        <Flex gap={1} w="fit-content" borderRadius={8} boxShadow="inner">
          <IconButton
            size="md"
            colorScheme="facebook"
            variant="ghost"
            aria-label="edit"
            onClick={() => setEditModalOpen(true)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="md"
            colorScheme="red"
            variant="ghost"
            aria-label="delete"
            onClick={() => setDeleteModalOpen(true)}
          >
            <DeleteIcon />
          </IconButton>
        </Flex>
      )}
      {isMobile ? (
        <MobilePublicationCard
          content={content}
          id={id}
          photos={photos}
          title={title}
          petId={petId}
          createdAt={createdAt}
        />
      ) : (
        <Box p={8} borderRadius={8} boxShadow="base">
          <Grid
            templateColumns={photos.length && !isMobile ? "220px 1fr" : "1fr"}
          >
            {photos.length ? (
              <Flex w="100%" justifyContent="center" alignItems="center">
                <Carousel
                  images={photos}
                  width={isMobile ? "100%" : 220}
                  height={140}
                />
              </Flex>
            ) : null}
            <Box px={12}>
              <Flex
                w="100%"
                justifyContent="space-between"
                mb={8}
                alignItems="center"
              >
                <Heading as="h5" size="md">
                  {title}
                </Heading>
                <Popover>
                  <PopoverTrigger>
                    <Avatar size="sm" src={""} />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Flex flexDir="column">
                        <Text fontSize="md">Nome: {userName}</Text>
                        <Text fontSize="md">Email: {userEmail}</Text>
                        {userPhone && (
                          <Text fontSize="md">Telefone: {userPhone}</Text>
                        )}
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <Box>
                <Text as="sub" fontSize="1.25rem" color="#838383">
                  {content}
                </Text>
              </Box>
            </Box>
          </Grid>
        </Box>
      )}

      <DeleteAlert
        onCofirm={handleDeletePublication}
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        leastDestructiveRef={cancelRef}
        isMobile={isMobile}
        content="Tem certeza que deseja excluir esta publicação? Esta ação não poderá
        ser desfeita."
        title="Deletar Publicação"
      />

      <EditPublicationModal
        content={content}
        handleClose={() => setEditModalOpen(false)}
        handleSave={editPublication}
        id={id}
        isOpen={editModalOpen}
        petId={petId}
        photos={photos}
        createdAt={createdAt}
        title={title}
      />
    </Flex>
  );
};

export default PublicationCard;
