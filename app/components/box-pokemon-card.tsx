"use client"
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { type FC, useState } from "react"
import { BoxPokemonModal } from "./pokemon-modal"

type Props = {
  id: number
  name: string
  height: number
}

export const BoxPokemonCard: FC<Props> = (props) => {
  const [isActive, setActive] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const imageURL = isActive
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`

  return (
    <>
      <Stack spacing={1}>
        <Card>
          <CardBody>
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
          </CardBody>
          <HStack px={2}>
            <Divider />
          </HStack>
          <Button onClick={onOpen}>
            <Text
              textAlign={"center"}
              fontWeight={"bold"}
              letterSpacing={1}
              py={2}
            >
              {props.name}
            </Text>
          </Button>
        </Card>
      </Stack>
      <BoxPokemonModal
        isOpen={isOpen}
        onClose={onClose}
        id={props.id}
        name={props.name}
        height={props.height}
      />
    </>
  )
}
