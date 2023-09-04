"use client"
import { Box, Stack } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
  results: { name: string }[]
}

export const MainHome: FC<Props> = (props) => {
  console.log(props)
  return (
    <Stack>
      {props.results.map((result) => (
        <Box key={result.name}>{result.name}</Box>
      ))}
    </Stack>
  )
}
