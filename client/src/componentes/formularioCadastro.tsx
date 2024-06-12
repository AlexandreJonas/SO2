import { Component, useEffect, useState } from "react";
import Item from "../model/item";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import getBD from "../control/getBD";

type props = {
    tema: string
    seletorView: Function
    id: number
}

export default function FormularioCadastro(props: props) {

    const [item, setItem] = useState(new Item('', ''))
    const [categoria, setCategoria] = useState('')

    const getItem = async () => {
        if (props.id !== 0) {
            try {
                const response = await fetch(`${getBD()}/items/${props.id}`);
                const jsonData = await response.json();
                setItem(jsonData)
                setCategoria(jsonData.itemCategoria)
            } catch (error: any) {
                console.log(error.message)
            }
        }
    }

    useEffect(() => {
        getItem()
    }, [])

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const inserir = async () => {
        try {
            const response = await fetch(`${getBD()}/items`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
            });
            if (response.ok) {
                console.log("Item criado com sucesso!");
            } else {
                throw new Error("Erro ao inserir item");
            }

        } catch (error: any) {
            console.log(error.message)
        }
    }

    const atualizar = async () => {
        try {
            const response = await fetch(`${(getBD())}/items/${props.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
            });
            if (response.ok) {
                console.log("Item atualizado com sucesso!");
            } else {
                throw new Error("Erro ao atualizar item");
            }
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const salvar = (e: any) => {
        if (props.id !== 0) {
            atualizar()
        }
        else {
            inserir()
        }
        props.seletorView(0, 'Home', e)
    }

    let estiloBotao = `btn waves-effect waves-light col left ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input defaultValue={item.itemNome} onChange={handleChange} id="itemNome" type="text" className="validate" name='itemNome' />
                        <label className="active" htmlFor="itemNome">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input defaultValue={item.itemDescricao} onChange={handleChange} id="itemDescricao" type="text" className="validate" name='itemDescricao' />
                        <label className="active" htmlFor="itemDescricao">Descrição</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input defaultValue={item.itemCompraValor} onChange={handleChange} id="itemCompraValor" type="text" className="validate" name='itemCompraValor' />
                        <label className="active" htmlFor="itemCompraValor">Valor de Compra</label>
                    </div>
                    <div className="input-field col s6">
                        <input defaultValue={item.itemVendaValor} onChange={handleChange} id="itemVendaValor" type="text" className="validate" name='itemVendaValor' />
                        <label className="active" htmlFor="itemVendaValor">Valor de Venda</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input defaultValue={item.itemEstoqueQtd} onChange={handleChange} id="itemEstoqueQtd" type="text" className="validate" name='itemEstoqueQtd' />
                        <label className="active" htmlFor="itemEstoqueQtd">Quantidade Estoque</label>
                    </div>
                    <div className="input-field col s6">
                        <input defaultValue={item.itemEstoqueMin} onChange={handleChange} id="itemEstoqueMin" type="text" className="validate" name='itemEstoqueMin' />
                        <label className="active" htmlFor="itemEstoqueMin">Estoque Mínimo</label>
                    </div>
                    <div className="input-field col s6">
                        <input defaultValue={item.itemLocal} onChange={handleChange} id="itemLocal" type="text" className="validate" name='itemLocal' />
                        <label className="active" htmlFor="itemLocal">Local</label>
                    </div>
                    <div className="input-field col s6">
                        <input defaultValue={item.itemGeral} onChange={handleChange} id="itemGeral" type="text" className="validate" name='itemGeral' />
                        <label className="active" htmlFor="itemGeral">Geral</label>
                    </div>

                    <div className="input-field col s6">
                        <Grid item className="">
                            <InputLabel id="itemCategoria" className="validate">Categoria: </InputLabel>
                            <Select
                                labelId="itemCategoria"
                                id="itemCategoria"
                                value={categoria}
                                name='itemCategoria'
                                onChange={handleChange}
                            >  
                                <MenuItem  value={'Porção'}>Porção</MenuItem>
                                <MenuItem  value={'Bebida'}>Bebida</MenuItem>
                                <MenuItem  value={'Combo'}>Combo</MenuItem>
                                <MenuItem  value={'Diversos'}>Diversos</MenuItem>
                            </Select>
                        </Grid>
                        {/* <input defaultValue={item.itemCategoria} onChange={handleChange} id="itemCategoria" type="text" className="validate" name='itemCategoria' />
                        <label className="active" htmlFor="itemCategoria">Categoria</label> */}
                    </div>
                </div>

                {/* <div className="row">
                    <div className="input-field col s6">
                        <input id="telefone" type="text" className="validate" />
                        <label className="active" htmlFor="telefone">Telefone</label>
                    </div>
                    <div className="input-field col s6">
                        <input defaultValue={cliente.email} onChange={handleChange} id="email" type="email" className="validate" name='email' />
                        <label className="active" htmlFor="email">E-mail</label>
                    </div>
                </div> */}

            </form>
            <div className="">
                <div className="row col s6">
                    <button className={estiloBotao} onClick={(e) => salvar(e)}>Salvar
                        <i className="material-icons right">send</i>
                    </button>

                    {/* <a className="col s1 left"> </a>

                    <button className={estiloBotao} onClick={(e) => deletar(e)}>Deletar
                        <i className="material-icons right">clear</i>
                    </button> */}
                </div>
            </div>
        </div>
    )
}