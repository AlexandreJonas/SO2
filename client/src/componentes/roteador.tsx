import { Component, useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastro from "./formularioCadastro";
import ListaItem from "./listaItem";
import BtnCadastro from "./btnCadastro";


type state = {
    tela: string
    id: number
}

export const Roteador = () => {
    let Auxstate:state = {
        tela: 'Home',
        id:0
    }

    const [state,setState] = useState(Auxstate)

    const selecionarView = (id: number,novaTela: string, evento: Event) => {
        evento.preventDefault()
        console.log(novaTela);
        setState({
            tela: novaTela,
            id: id
        })
    }

    
        let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="purple lighten-4" botoes={['Home', 'Cadastro']} />
        let estiloBotao = `btn waves-effect waves-light left purple lighten-4`
        switch (state.tela) {
            case 'Home':
                return (
                    <>
                        {barraNavegacao}
                        <ListaItem tema="purple lighten-4" seletorView={selecionarView} />
                        <BtnCadastro tema="purple lighten-4" seletorView={selecionarView} />
                    </>
                )

            case 'Cadastro':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastro tema="purple lighten-4" seletorView={selecionarView} id = {state.id} />
                    </>
                )

            default:
                return (
                    <>
                        {barraNavegacao}
                    </>
                )
        }
}