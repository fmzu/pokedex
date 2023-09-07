"use client"
import { Button, SimpleGrid, Stack } from "@chakra-ui/react"
import { FC } from "react"
import { BoxPokemon } from "app/components/BoxPokemon"

type Props = {
  results: {
    id: number
    name: string
  }[]
}

export const MainHome: FC<Props> = (props) => {
  return (
    <Stack p={4}>
      <Button as={"a"} href={"https://github.com/fjimiz/pokedex"}>
        {"fjimiz/pokedex"}
      </Button>
      <SimpleGrid minChildWidth="120px" spacing="16px">
        {props.results.map((result) => (
          <BoxPokemon key={result.id} id={result.id} name={result.name} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
