"use client";
import { Box, Card, CardBody, CardFooter, Divider, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { type FC, useState } from "react";

type Props = {
	id: number;
	name: string;
};

export const BoxPokemonCard: FC<Props> = (props) => {
	const [isActive, setActive] = useState(false);

	const imageURL = isActive
		? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
		: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`;

	return (
		<Stack spacing={1}>
      <Card>
        <CardBody>
			<HStack justifyContent={"center"}>
				<Box
					onMouseEnter={() => {
						setActive(true);
					}}
					onMouseLeave={() => {
						setActive(false);
					}}
				>
					<Image alt={props.name} src={imageURL}/>
				</Box>
			</HStack>
      </CardBody>
	     <Divider px={2} />
			<Text textAlign={"center"} fontWeight={"bold"} letterSpacing={1} py={2}>
				{props.name}
			</Text>
      </Card>
		</Stack>
	);
};
