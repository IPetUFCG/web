import { useAxios } from "@/src/hooks/useAxios";
import { IPet } from "@/src/types/pet";
import { IAddress, IUser } from "@/src/types/user";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";

export type MyTemporaryHouseFormType = {
  title: string;
  description?: string;
  address: IAddress;
};

export default function MyTemporaryHouseForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<MyTemporaryHouseFormType>();
  const session = useSession();
  const axios = useAxios();

  const [petsList, setPetsList] = React.useState<IPet[]>([]);
  const [careTakersList, setCareTakersList] = React.useState<IUser[]>([]);
  const [selectedPets, setSelectedPets] = React.useState<number[]>([]);
  const [selectedCareTakers, setSelectedCareTakers] = React.useState<number[]>(
    []
  );

  const filteredPets = petsList.filter((pet) => !selectedPets.includes(pet.id));
  const filteredCareTakers = careTakersList.filter(
    (caretaker) => !selectedCareTakers.includes(caretaker.id)
  );

  const requestCreateTemporaryHouse = (data: MyTemporaryHouseFormType) => {
    console.log(data);
  };

  React.useEffect(() => {
    const requestPetsList = async () => {
      try {
        const { data } = await axios.get<IPet[]>("/pets");
        setPetsList(data);
      } catch (error) {
        console.log(error);
      }
    };

    const requestCareTakerList = async () => {
      try {
        const { data } = await axios.get<IUser[]>("/user/caretakers");
        setCareTakersList(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (session.status === "authenticated") {
      if (!petsList.length) requestPetsList();
      if (!careTakersList.length) requestCareTakerList();
    }
  }, [session]);

  const handleSelectPet = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedPets((prev) => [...prev, Number(value)]);
  };

  const handleRemoveSelectedPet = (id: number) => {
    const updatedSelection = selectedPets.filter((selected) => selected !== id);
    setSelectedPets(updatedSelection);
  };

  const handleSelectCareTaker = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setSelectedCareTakers((prev) => [...prev, Number(value)]);
  };

  const handleRemoveSelectedCareTaker = (id: number) => {
    const updatedSelection = selectedCareTakers.filter(
      (selected) => selected !== id
    );
    setSelectedCareTakers(updatedSelection);
  };

  return (
    <Box p={8} boxShadow="base">
      <Heading mb={8}>Criar Lar Temporário</Heading>
      <FormControl
        size="lg"
        onSubmit={handleSubmit(requestCreateTemporaryHouse)}
      >
        <Box mb={8}>
          <FormLabel>Nome</FormLabel>
          <Input
            {...register("title", {
              required: "É necessário informar um nome para o lar temporário",
            })}
          />
        </Box>
        <Box>
          <FormLabel>Descrição</FormLabel>
          <Textarea {...register("description")} />
        </Box>
        <Grid my={8} gap={8} gridTemplateColumns="1fr 1fr">
          <Box>
            <FormLabel>CEP</FormLabel>
            <Input
              {...register("address.zipCode", {
                required: "É necessário informar um CEP",
              })}
            />
          </Box>
          <Box>
            <FormLabel>Estado</FormLabel>
            <Input
              {...register("address.state", {
                required: "É necessário informar um Estado",
              })}
            />
          </Box>
          <Box>
            <FormLabel>Cidade</FormLabel>
            <Input
              {...register("address.city", {
                required: "É necessário informar uma cidade",
              })}
            />
          </Box>
          <Box>
            <FormLabel>Bairro</FormLabel>
            <Input
              {...register("address.district", {
                required: "É necessário informar um bairro",
              })}
            />
          </Box>
          <Box>
            <FormLabel>Rua</FormLabel>
            <Input
              {...register("address.street", {
                required: "É necessário informar a rua",
              })}
            />
          </Box>
          <Box>
            <FormLabel>Número</FormLabel>
            <Input
              {...register("address.number", {
                required: "É necessário informar o número",
              })}
            />
          </Box>
          <Box>
            <FormLabel>Complemento</FormLabel>
            <Input {...register("address.complement")} />
          </Box>
        </Grid>
        <Box mb={8}>
          <FormLabel>Pets</FormLabel>
          <Select onChange={handleSelectPet}>
            <option value=""></option>
            {filteredPets.map((pet) => (
              <option key={pet.id} value={pet.id}>
                {pet.name}
              </option>
            ))}
          </Select>
          <Flex mt={2} gap={2}>
            {selectedPets.map((selectedPet) => (
              <Badge
                px={2}
                colorScheme="purple"
                key={selectedPet}
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => handleRemoveSelectedPet(selectedPet)}
              >
                <Flex gap={2} align="center" lineHeight={2}>
                  {petsList.find((pet) => pet.id === selectedPet)?.name}
                  <Divider orientation="vertical" />
                  <CloseIcon w="6px" />
                </Flex>
              </Badge>
            ))}
          </Flex>
        </Box>
        <Box mb={8}>
          <FormLabel>Cuidadores</FormLabel>
          <Select onChange={handleSelectCareTaker}>
            <option value=""></option>
            {filteredCareTakers.map((pet) => (
              <option key={pet.id} value={pet.id}>
                {pet.name}
              </option>
            ))}
          </Select>
          <Flex mt={2} gap={2}>
            {selectedCareTakers.map((selectedCaretaker) => (
              <Badge
                px={2}
                colorScheme="purple"
                key={selectedCaretaker}
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => handleRemoveSelectedCareTaker(selectedCaretaker)}
              >
                <Flex gap={2} align="center" lineHeight={2}>
                  {
                    careTakersList.find(
                      (caretaker) => caretaker.id === selectedCaretaker
                    )?.name
                  }
                  <Divider orientation="vertical" />
                  <CloseIcon w="6px" />
                </Flex>
              </Badge>
            ))}
          </Flex>
        </Box>
        <Divider mb={8} />
        <Flex justify="end">
          <Button
            type="submit"
            color="white"
            backgroundColor="#636FFF"
            _hover={{ backgroundColor: "#0063D1" }}
          >
            Criar
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}
