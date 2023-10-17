import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

interface QuestionProps {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faq: QuestionProps[] = [
    { question: "Enunciado da Pergunta?", answer: "Texto da Resposta" },
    { question: "Enunciado da Pergunta?", answer: "Texto da Resposta" },
    { question: "Enunciado da Pergunta?", answer: "Texto da Resposta" },
    { question: "Enunciado da Pergunta?", answer: "Texto da Resposta" },
    { question: "Enunciado da Pergunta?", answer: "Texto da Resposta" },
    { question: "Enunciado da Pergunta?", answer: "Texto da Resposta" },
  ];

  return (
    <Box as="section" py="100px" bg="white" gap="50px">
      <Container>
        <Stack gap="50px">
          <Heading as="h2" fontSize="30px" textAlign="center">
            Perguntas Frequentes
          </Heading>

          <Accordion display="flex" flexDir="column" gap="15px" allowToggle>
            {faq.map(({ question, answer }, index) => (
              <AccordionItem
                border="3px solid"
                borderColor="black"
                boxShadow="-4px 4px 0 0 black"
                rounded="5px"
                px="30px"
                key={`faq-question-${index}`}
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      h="80px"
                      _hover={{
                        bg: "none",
                      }}
                    >
                      <Text fontWeight="medium">{question}</Text>
                      {isExpanded ? (
                        <MinusIcon color="black" h="14px" w="14px" />
                      ) : (
                        <AddIcon color="black" h="14px" w="14px" />
                      )}
                    </AccordionButton>
                    <AccordionPanel
                      py="30px"
                      color="black"
                      borderTop="1px solid"
                      borderColor="orange"
                    >
                      {answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>
      </Container>
    </Box>
  );
}
