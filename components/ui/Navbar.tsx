import {Spacer, Text, useTheme} from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {

    const {theme} = useTheme()


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray300.value
        }}>

            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"} alt={'image'} width={70} height={70}/>


            <Text color={'white'} h2>P</Text>
            <Text color={'white'} h3>okemon</Text>

            <Spacer/>

            <Text color={'white'}>Favoritos</Text>


        </div>)
}