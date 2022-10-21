class SellerController{
    async index(req, res){
        res.render('pages/seller/home', {title: "Home"});
    }

    async sale(req, res){
        res.render('pages/seller/sale', {title: "Cadastro de Compra"});
    }

    async registerFast(req, res){
        res.render('pages/seller/registerFast', {title: "Cadastro rápido de clientes"});
    }
}

export default new SellerController();