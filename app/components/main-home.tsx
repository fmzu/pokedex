"use client"
import { SimpleGrid, Stack } from "@chakra-ui/react"
import type { FC } from "react"
import { BoxPokemonCard } from "app/components/box-pokemon-card"
import { HomeHeader } from "app/components/home-header"
import { HomeFooter } from "app/components/home-footer"

type Props = {
  results: {
    id: number
    name: string
    height: number
  }[]
}

export const MainHome: FC<Props> = (props) => {
  return (
    <Stack>
      <HomeHeader />
      <Stack p={4}>
        <SimpleGrid minChildWidth="120px" spacing="16px">
          {props.results.map((result) => (
            <BoxPokemonCard
              key={result.id}
              id={result.id}
              name={result.name}
              height={result.height}
            />
          ))}
        </SimpleGrid>
      </Stack>
      <HomeFooter />
    </Stack>
  )
}
