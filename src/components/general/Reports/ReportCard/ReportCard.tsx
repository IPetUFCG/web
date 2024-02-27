import {
  Avatar,
  Box,
  Flex,
  Text,
  useMediaQuery,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Tag,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";

import { useAxios } from "@/src/hooks/useAxios";
import { IReport, ReportPublication } from "@/src/types/report";
import { HamburgerIcon } from "@chakra-ui/icons";

export type ReportCardProps = {
  publication: ReportPublication;
  reports: IReport[];
};

const ReportCard = ({ publication, reports }: ReportCardProps) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const axios = useAxios();

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

  return (
    <Flex flexDir="column">
      <Box p={4} borderRadius={8} boxShadow="base">
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Text fontSize="md" mb={4} fontWeight="bold">
              {publication.title}
            </Text>
            <Text fontSize="sm">{publication.content}</Text>
          </Box>
          <Flex gap={4}>
            <Tag size="lg" colorScheme="red" borderRadius="full">
              {publication.reportCount}
            </Tag>
            <Menu>
              <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
                Ações
              </MenuButton>
              <MenuList>
                <MenuItem>Aceitar Denuncias</MenuItem>
                <MenuItem>Remover Denuncias</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Box
        p={8}
        borderRadius={8}
        border="1px solid rgba(0, 0, 0, .1)"
        borderTop="none"
      >
        <Flex flexDir="column">
          {reports.map((report) => (
            <Box key={report.id} p={4}>
              <Flex gap={8}>
                <Popover>
                  <PopoverTrigger>
                    <Avatar size="sm" src={report.user?.photo} />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Flex flexDir="column">
                        <Text fontSize="md">Nome: {report.user.name}</Text>
                        <Text fontSize="md">Email: {report.user.email}</Text>
                        {report.user?.phone && (
                          <Text fontSize="md">
                            Telefone: {report.user.phone}
                          </Text>
                        )}
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>

                <Flex flexDir="column" gap={4}>
                  <Text fontSize="medium" fontWeight="bold">
                    Descrição da denúncia:
                  </Text>
                  <Text fontSize="small">{report.description}</Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
        <Box px={12}>
          <Box>
            {/* <Text as="sub" fontSize="1.25rem" color="#838383">
              {content}
            </Text> */}
          </Box>
        </Box>
      </Box>

      {/* <DeleteAlert
        onCofirm={handleDeleteReport}
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        leastDestructiveRef={cancelRef}
        isMobile={isMobile}
        content="Tem certeza que deseja excluir esta publicação? Esta ação não poderá
        ser desfeita."
        title="Deletar Publicação"
      /> */}
    </Flex>
  );
};

export default ReportCard;
