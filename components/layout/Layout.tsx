import Head from "next/head";
import {FC} from "react";
import {Navbar} from "../ui";


type Props = {
    children: JSX.Element
    title?: string
}


export const Layout: FC<Props> = ({children, title}) => {


    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name={'author'} content={'Juani Vila'}/>
                <meta name={'description'} content={'Informacion sobre el pokemon XXXXX'}/>
                <meta name={'keywords'} content={'pokedex, pokemon'}/>
            </Head>

            <Navbar/>
            <main style={{padding: '0px 20px'}}>
                {children}
            </main>


        </>
    )
}