import { MainHome } from "app/components/main-home"

const HomePage = async () => {
  const resp = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "POST",
    body: JSON.stringify({
      query: `
      {
        pokemon_v2_pokemon(limit: 151) {
          id
          name
          height
        }
      }
      `,
      variables: {},
    }),
  })
  const data = await resp.json()
  return <MainHome results={data.data.pokemon_v2_pokemon} />
}

export default HomePage
