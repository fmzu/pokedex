import { Text, HStack, Stack } from "@chakra-ui/react"

export const HomeFooter = () => {
    return(
    <Stack backgroundColor={"black"} >
        <HStack py={16} px={4}  justifyContent={"flex-end"}>
          <Text fontWeight={"bold"} textColor={"white"}>{"Pokedex"}</Text>
        </HStack>
    </Stack>
    )
}