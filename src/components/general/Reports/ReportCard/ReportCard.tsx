import {
  Avatar,
  Box,
  Flex,
  Text,
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

import { IReport, ReportPublication } from "@/src/types/report";
import { HamburgerIcon } from "@chakra-ui/icons";
import DeletePublicationModal from "../Modals/DeletePublicationModal";
import DeleteReportsModal from "../Modals/DeleteReportsModal";

export type ReportCardProps = {
  publication: ReportPublication;
  reports: IReport[];
  handleDeleteReport: (publicationId: number) => void;
  handleDeletePublication: (publicationId: number) => void;
};

const ReportCard = ({
  publication,
  reports,
  handleDeleteReport,
  handleDeletePublication,
}: ReportCardProps) => {
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [deleteReportModalOpen, setDeleteReportModalOpen] =
    React.useState(false);

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
                <MenuItem onClick={() => setDeleteModalOpen(true)}>
                  Aceitar Denuncias
                </MenuItem>
                <MenuItem onClick={() => setDeleteReportModalOpen(true)}>
                  Remover Denuncias
                </MenuItem>
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
      </Box>

      <DeletePublicationModal
        handleConfirm={() => handleDeletePublication(publication.id)}
        isOpen={deleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
        title={publication.title}
      />
      <DeleteReportsModal
        handleConfirm={() => handleDeleteReport(publication.id)}
        isOpen={deleteReportModalOpen}
        handleClose={() => setDeleteReportModalOpen(false)}
        title={publication.title}
      />
    </Flex>
  );
};

export default ReportCard;
