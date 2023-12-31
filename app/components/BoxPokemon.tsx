"use client"
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { FC, useState } from "react"

type Props = {
  id: number
  name: string
}

export const BoxPokemon: FC<Props> = (props) => {
  const [isActive, setActive] = useState(false)

  const imageURL = isActive
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`
  console.log("aaa", isActive)

  return (
    <Stack spacing={1}>
      <HStack justifyContent={"center"}>
        <Box
          onMouseEnter={() => {
            setActive(true)
          }}
          onMouseLeave={() => {
            setActive(false)
          }}
        >
          <Image alt={props.name} src={imageURL} />
        </Box>
      </HStack>
      <Text textAlign={"center"} fontWeight={"bold"} letterSpacing={1}>
        {props.name}
      </Text>
    </Stack>
  )
}
