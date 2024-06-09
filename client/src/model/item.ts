export default class Item {
    public itemID!:number
    public itemNome!: string
    public itemDescricao!: string
    public itemCompraValor!:number
    public itemVendaValor!:number
    public itemEstoqueQtd!:number
    public itemEstoqueMin!:number
    public itemCategoria!: string
    public itemLocal!: string
    public itemGeral!: string

    constructor(itemNome: string, itemDescricao: string) {
        this.itemNome = itemNome
        this.itemDescricao = itemDescricao
    }
}