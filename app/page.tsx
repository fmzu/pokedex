import { MainHome } from "app/components/MainHome"

const HomePage = async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await resp.json()
  console.log(data.results)
  return <MainHome results={data.results} />
}

export default HomePage
