import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export const CustomCard = () => {
  return (
    <Card>
      <CardHeader>Card Title Here</CardHeader>
      <CardBody>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem dolores
        accusamus deleniti veritatis consequuntur placeat esse dolore? Magnam,
        dolor quibusdam, accusamus sed laboriosam tenetur eos cum ratione sint,
        corporis sequi!
      </CardBody>
      <CardFooter>Card Footer, Maybe some buttons</CardFooter>
    </Card>
  );
};
