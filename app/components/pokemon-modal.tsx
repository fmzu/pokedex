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
  Text,
} from "@chakra-ui/react"
import type { FC } from "react"

type Props = {
  isOpen: boolean
  onClose: () => void
  id: number
  name: string
}

export const BoxPokemonModal: FC<Props> = (props) => {
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

  const backImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <HStack justifyContent={"center"}>
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              {props.name}
            </Text>
          </HStack>
          <HStack justifyContent={"center"}>
            <Image alt={props.name} src={imageURL} />
            <Image alt={props.name} src={backImageURL} />
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            {"Close"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
