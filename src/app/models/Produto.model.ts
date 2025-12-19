export class Produto {
    id: number = 0; // "number" deve ser minúsculo
    produto: string = "";
    descricao: string = "";
    foto: string = "";
    preco: number = 0; // "number" deve ser minúsculo

    constructor(id: number, produto: string, descricao: string, foto: string, preco: number) {
        this.id = id;
        this.produto = produto;
        this.descricao = descricao;
        this.foto = foto;
        this.preco = preco;
    }
}