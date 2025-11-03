
interface CadHierarquia {
    nome: string
}

class HierarquiaServices {
    async cadastrarHierarquia({ nome }: CadHierarquia){
        console.log(nome)
    }
}

export { HierarquiaServices }