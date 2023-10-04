import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Box py="100px" bg="gray.2">
      <Container>
        <Stack gap="50px">
          <Heading as="h2" fontSize="30px">
            Quem somos? Qual o nosso objetivo?
          </Heading>
          <Text fontSize="22px" lineHeight="base">
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
            estas indústrias desde o ano de 1500, quando uma misturou os
            caracteres de um texto para criar um espécime de livro. Este texto
            não só sobreviveu 5 séculos, mas também o salto para a tipografia
            electrónica, mantendo-se essencialmente inalterada. Foi popularizada
            nos anos 60 com a disponibilização das folhas de Letraset, que
            continham passagens com Lorem Ipsum, e mais recentemente com os
            programas de publicação como o Aldus PageMaker que incluem versões
            do Lorem Ipsum.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
