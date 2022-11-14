const supermarket  = {
    cnpj: "123456489712346",
    name: "Êxito Mercantil",
    email: "exito@email.com",
    address: "Rua Morélia, 500 - Caucaia, CE",
    description: "O amigo do bairro!",
    password: "asdasdasfasd",
    products: [
        {
            id: 1,
            name: "Bolacha Creme Crack",
            description: "Bolacha seca e crocante",
            brand: "Fortaleza",
            quantity: 2,
            value: 10
        },
        {
            id: 2,
            name: "Leite em caixa",
            description: "Mistura lactea",
            brand: "Itambé",
            quantity: 80,
            value: 18
        },
        {
            id: 3,
            name: "Pão p/ hamburguer",
            description: "Saco contendo 500 gramas de pão para hamburguer",
            brand: "Panne",
            quantity: 80,
            value: 7
        },
    ]
}

const sales = [
    {
        id: 1,
        date: "2022-04-03T10:00:00",
        supermarketId: 1,
        supermarketName: "Êxito Mercantil",
        sellerId: 1,
        sellerName: "Evelyn",
        customerId: 1,
        customerName: "Maurício de Moura",
        products: [
            {
                id: 2,
                name: "Leite em caixa",
                description: "Mistura lactea",
                brand: "Itambé",
                quantity: 2,
                value: 18
            },
            {
                id: 3,
                name: "Pão p/ hamburguer",
                description: "Saco contendo 500 gramas de pão para hamburguer",
                brand: "Panne",
                quantity: 1,
                value: 7
            },
            {
                id: 1,
                name: "Bolacha Creme Crack",
                description: "Bolacha seca e crocante",
                brand: "Fortaleza",
                quantity: 1,
                value: 10
            },
        ]
    },
    {
        id: 2,
        date: "2022-04-03T10:00:00",
        supermarketId: 1,
        supermarketName: "Êxito Mercantil",
        sellerId: 1,
        sellerName: "Pedro",
        customerId: 1,
        customerName: "Gabriel Miranda",
        products: [
            {
                id: 3,
                name: "Pão p/ hamburguer",
                description: "Saco contendo 500 gramas de pão para hamburguer",
                brand: "Panne",
                quantity: 5,
                value: 7
            }
        ]
    }
]

const sellers = [
    {
        cpf: 12345688,
        name: "Evelyn",
        supermarketId: 1,
        email: "eve@gmail.com",
    },
    {
        cpf: 12348998,
        name: "Pedro",
        supermarketId: 1,
        email: "pedro@gmail.com",
    }
]
class SupermarketController{
    async index(req, res){
        const pageConfig = {
            title: "Home",
            navType: "supermarket"
        }

        res.render('pages/supermarket/home', {...pageConfig, supermarket});
    }

    async profile(req, res){
        const pageConfig = {
            title: "Perfil",
            navType: "supermarket"
        }

        res.render("pages/supermarket/profile", {...pageConfig, supermarket});
    }

    // Vendedor
    async sellers(req, res){
        const pageConfig = {
            title: "Vendedores",
            navType: "supermarket"
        }
        
        res.render("pages/supermarket/seller/sellers", {...pageConfig, supermarket, sellers})
    }

    async createSeller(req, res){
        const pageConfig = {
            title: "Cadastro de Vendedor",
            navType: "supermarket"
        }

        res.render("pages/supermarket/seller/createSeller", {...pageConfig, supermarket});
    }

    async editSeller(req, res){
        const pageConfig = {
            title: "Edição de Vendedor",
            navType: "supermarket"
        }

        let cpf = req.params.id;
        let seller = sellers.filter(s => s.cpf == cpf)[0];

        res.render("pages/supermarket/seller/editSeller", {...pageConfig, supermarket, seller});
    }

    // Vendas
    async sales(req, res){
        const pageConfig = {
            title: "Vendas",
            navType: "supermarket"
        }

        res.render("pages/supermarket/sale/sales", {...pageConfig, supermarket, sales});
    }

    async detailSales(req, res){
        const pageConfig = {
            title: "Detalhes da Venda",
            navType: "supermarket"
        }

        let id = req.params.id;
        let sale = sales.filter(s => s.id == id)[0];

        res.render("pages/supermarket/sale/detailSales", {...pageConfig, supermarket, sale});
    }

    // Produtos
    async products(req, res){
        const pageConfig = {
            title: "Produtos",
            navType: "supermarket"
        }

        res.render("pages/supermarket/product/products", {...pageConfig, supermarket});
    }

    async createProduct(req, res){
        const pageConfig = {
            title: "Cadastro de Produto",
            navType: "supermarket"
        }

        res.render("pages/supermarket/product/createProduct", {...pageConfig, supermarket});
    }

    async editProduct(req, res){
        const pageConfig = {
            title: "Edição de Produto",
            navType: "supermarket"
        }

        let id = req.params.id;
        let product = supermarket.products.filter(p => p.id == id)[0];

        res.render("pages/supermarket/product/editProduct", {...pageConfig, supermarket, product});
    }
}

export default new SupermarketController();