class CustomerController{
    async index(req, res){
        const pageConfig = {
            title: "Home",
            navType: "customer"
        }

        res.render("pages/customer/home", {...pageConfig});
    }

    async profile(req, res){
        const pageConfig = {
            title: "Perfil",
            navType: "customer"
        }
        
        res.render("pages/customer/profile", {...pageConfig});
    }

    async shopping(req, res){
        const pageConfig = {
            title: "Minhas Compras",
            navType: "customer"
        }
        
        res.render("pages/customer/shopping", {...pageConfig});
    }

    async detailShopping(req, res){
        const pageConfig = {
            title: "Detalhes de Compra",
            navType: "customer"
        }

        res.render("pages/customer/detailShopping", {...pageConfig});
    }
}

export default new CustomerController();