class SupermarketController{
    async index(req, res){
        res.render('pages/supermarket/home', {title: "Home"});
    }

    async profile(req, res){
        res.render("pages/supermarket/profile", {title: "Perfil"});
    }

    // Vendedor
    async sellers(req, res){
        res.render("pages/supermarket/seller/sellers", {title: "Vendedores"})
    }

    async createSeller(req, res){
        res.render("pages/supermarket/seller/createSeller", {title: "Cadastro de Vendedor"});
    }

    async editSeller(req, res){
        res.render("pages/supermarket/seller/editSeller", {title: "Edição de Vendedor"});
    }

    // Vendas
    async sales(req, res){
        res.render("pages/supermarket/sale/sales", {title: "Vendas"});
    }

    async detailSales(req, res){
        res.render("pages/supermarket/sale/detailSales", {title: "Detalhes da Venda"});
    }

    // Produtos
    async products(req, res){
        res.render("pages/supermarket/product/products", {title: "Produtos"});
    }

    async createProduct(req, res){
        res.render("pages/supermarket/product/createProduct", {title: "Cadastro de Produto"});
    }

    async editProduct(req, res){
        res.render("pages/supermarket/product/editProduct", {title: "Edição de Produto"});
    }
}

export default new SupermarketController();