import { Text, HStack, Stack } from "@chakra-ui/react"

export const HomeHeader = () => {
  return (
    <Stack backgroundColor={"red"}>
      <HStack py={16} px={4} justifyContent={"flex-start"}>
        <Text fontWeight={"bold"}>{"Pokedex"}</Text>
      </HStack>
    </Stack>
  )
}
