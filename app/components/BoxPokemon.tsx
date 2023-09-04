"use client"
import { Box, Image } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
  id: number
  name: string
}

export const BoxPokemon: FC<Props> = (props) => {
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`
  return (
    <Box>
      <Image alt={props.name} src={imageURL} />
      {props.name}
    </Box>
  )
}
