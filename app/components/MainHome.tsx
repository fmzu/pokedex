"use client";
import { Button, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import type { FC } from "react";
import { BoxPokemonCard } from "app/components/BoxPokemonCard";
import { HomeHeader } from "app/components/HomeHeader";
import { HomeFooter } from "app/components/HomeFooter";

type Props = {
	results: {
		id: number;
		name: string;
	}[];
};

export const MainHome: FC<Props> = (props) => {
	return (
		<Stack>
      <HomeHeader />
      <Stack p={4}>
			<SimpleGrid minChildWidth="120px" spacing="16px">
				{props.results.map((result) => (
					<BoxPokemonCard key={result.id} id={result.id} name={result.name} />
				))}
			</SimpleGrid>
      </Stack>
      <HomeFooter/>
		</Stack>
	);
};
