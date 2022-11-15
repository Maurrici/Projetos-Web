const seller = {
    cpf: 12345688,
    name: "Evelyn",
    supermarketId: 1,
    email: "eve@gmail.com",
}

class SellerController{
    async index(req, res){
        const pageConfig = {
            title: "Home",
            navType: "seller"
        }

        res.render('pages/seller/home', {...pageConfig, seller});
    }

    async sale(req, res){
        const pageConfig = {
            title: "Cadastro de Compra",
            navType: "seller"
        }

        res.render('pages/seller/sale', {...pageConfig, seller});
    }

    async registerFast(req, res){
        const pageConfig = {
            title: "Cadastro rápido de clientes",
            navType: "seller"
        }
        
        res.render('pages/seller/registerFast', {...pageConfig});
    }
}

export default new SellerController();