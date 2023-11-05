import { useAxios } from "@/src/hooks/useAxios";
import { IUser } from "@/src/types/user";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";

export interface UserPanelForm {
  name: string;
  email: string;
  document?: string;
  birthDate?: string;
  phone?: string;
}

export default function UserPanel() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<UserPanelForm>();

  const axios = useAxios();
  const session = useSession();

  const [userInfo, setUserInfo] = React.useState<IUser>();

  React.useEffect(() => {
    const setValues = (user: IUser) => {
      setValue("birthDate", user?.birthDate || "");
      setValue("document", user?.document || "");
      setValue("email", user?.email || "");
      setValue("name", user?.name || "");
      setValue("phone", user?.phone || "");
    };

    const requestUserInfo = async () => {
      try {
        const { data } = await axios.get(`/user/${session.data?.user.id}`);
        setUserInfo(data);
        setValues(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!userInfo && session.status === "authenticated") {
      requestUserInfo();
    }
  }, [session]);

  const handleSave = async (data: UserPanelForm) => {
    const dateValue =
      data?.birthDate && !data.birthDate.includes("/")
        ? data?.birthDate.slice(0, 2) +
          "/" +
          data?.birthDate.slice(2, 4) +
          "/" +
          data?.birthDate.slice(4)
        : null;
    const payload = {
      ...data,
      birthDate: dateValue,
    };
    try {
      await axios.patch(`/user/${session.data?.user.id}`, payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container my={8}>
      <Box boxShadow="base" p={8}>
        <Heading as="h4" size="lg">
          Meu Perfil
        </Heading>
        <Divider my={4} />
        <FormControl variant="outline">
          <Box mb={4}>
            <FormLabel>Nome</FormLabel>
            <Input
              variant="outline"
              {...register("name", { required: "É preciso informar um nome" })}
            />
          </Box>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input
              variant="outline"
              type="email"
              {...register("email", {
                pattern: {
                  value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                  message: "E-mail inválido",
                },
                required: "É preciso informar um email",
              })}
            />
          </Box>
          <Flex gap={4} my={4}>
            <Box w="50%">
              <FormLabel>Documento</FormLabel>
              <Input variant="outline" {...register("document")} />
            </Box>
            <Box w="20%">
              <FormLabel>Data de Nascimento</FormLabel>
              <Input variant="outline" {...register("birthDate")} />
            </Box>
            <Box w="30%">
              <FormLabel>Telefone</FormLabel>
              <Input variant="outline" {...register("phone")} />
            </Box>
          </Flex>
          <Flex justify="end" mt={8}>
            <Button
              color="white"
              backgroundColor="#636FFF"
              _hover={{ backgroundColor: "#0063D1" }}
              type="submit"
              onClick={handleSubmit(handleSave)}
            >
              Salvar
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Container>
  );
}
