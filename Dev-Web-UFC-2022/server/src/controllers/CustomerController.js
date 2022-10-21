class CustomerController{
    async index(req, res){
        res.render("pages/customer/home", {title: "Home"});
    }

    async profile(req, res){
        res.render("pages/customer/profile", {title: "Perfil"});
    }

    async shopping(req, res){
        res.render("pages/customer/shopping", {title: "Minhas Compras"});
    }

    async detailShopping(req, res){
        res.render("pages/customer/detailShopping", {title: "Detalhes de Compra"});
    }
}

export default new CustomerController();