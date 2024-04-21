"use client"
import {
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react"
import type { FC } from "react"

type Props = {
  isOpen: boolean
  onClose: () => void
  id: number
  name: string
  height: number
}

export const BoxPokemonModal: FC<Props> = (props) => {
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

  const backImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent p={8}>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={0}>
            <Text fontSize={"sm"}>{`No.${props.id}`}</Text>
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              {props.name}
            </Text>
          </Stack>
          <HStack justifyContent={"center"}>
            <Image alt={props.name} src={imageURL} />
            <Image alt={props.name} src={backImageURL} />
            <Text fontSize={"sm"}>{props.height}</Text>
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>{"Close"}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
