import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'SO2'
}).promise()

export async function validaUsuario(body){
    const {usuarioLogin} = body
    const {usuarioSenha} = body
    const result = await pool.query("select * from Usuario where usuarioLogin = ? and usuarioSenha = ?",[usuarioLogin,usuarioSenha])
    const rows = result[0]
    return rows
}

export async function getItems() {
    const result = await pool.query("select * from Item")
    const rows = result[0]
    return rows
}

export async function getItem(id) {
    const result = await pool.query(`select * from Item where itemID = ?`,[id])
    const rows = result[0]
    return rows[0]
}

export async function insertItem(body){
    const {itemNome} = body
    const {itemDescricao} = body
    const {itemCompraValor} = body
    const {itemVendaValor} = body
    const {itemEstoqueQtd} = body
    const {itemEstoqueMin} = body
    const {itemCategoria} = body
    const {itemLocal} = body
    const {itemGeral} = body

    const result = await pool.query( "insert into Item (itemNome,itemDescricao,itemCompraValor,itemVendaValor,itemEstoqueQtd,itemEstoqueMin,itemCategoria,itemLocal,itemGeral) values (?,?,?,?,?,?,?,?,?)",[itemNome,itemDescricao,itemCompraValor,itemVendaValor,itemEstoqueQtd,itemEstoqueMin,itemCategoria,itemLocal,itemGeral])

    return result
}

export async function updateItem(id,body){
    const {itemNome} = body
    const {itemDescricao} = body
    const {itemCompraValor} = body
    const {itemVendaValor} = body
    const {itemEstoqueQtd} = body
    const {itemEstoqueMin} = body
    const {itemCategoria} = body
    const {itemLocal} = body
    const {itemGeral} = body

    const result = await pool.query( "UPDATE Item SET itemNome = ?,itemDescricao = ?,itemCompraValor = ?,itemVendaValor = ?,itemEstoqueQtd = ?,itemEstoqueMin = ?,itemCategoria = ?,itemLocal = ?,itemGeral = ? where ItemID = ?",[itemNome,itemDescricao,itemCompraValor,itemVendaValor,itemEstoqueQtd,itemEstoqueMin,itemCategoria,itemLocal,itemGeral,id])

    return result
}

