import {Layout} from '../components/layout'
import {GetStaticProps} from "next";
import {pokeApi} from "../api";
import {PokemonListResponse, SmallPokemon} from "../interfaces";
import Image from "next/image";
import {Card, Grid, Row, Text} from "@nextui-org/react";


interface Props {
    pokemons: SmallPokemon[]

}

export default function Home({pokemons}: Props) {

    console.log(pokemons)
    return (
        <Layout title={'Lista de Pokemons'}>


            <Grid.Container gap={2} justify={'flex-start'}>

                {
                    pokemons.map((poke) => (

                        <Grid key={poke.id} xs={6} sm={3} md={2} xl={1}>
                            <Card isHoverable={true}>

                                <Card.Body css={{p: 1}}>

                                    <Image src={poke.img} alt={poke.id} width={140} height={140}/>
                                </Card.Body>

                                <Card.Footer>

                                    <Row justify={'space-between'}>
                                        <Text transform={'capitalize'}>{poke.name}</Text>
                                        <Text>#{poke.id}</Text>

                                    </Row>
                                </Card.Footer>

                            </Card>
                        </Grid>


                    ))


                }

            </Grid.Container>
        </Layout>


    )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150')

    const pokemons: SmallPokemon[] = data.results.map(
        (poke, i) => ({
            ...poke,
            id: i + 1,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`

        })
    )
    console.log(pokemons)


    return {
        props: {pokemons}, // will be passed to the page component as props
    }
}
