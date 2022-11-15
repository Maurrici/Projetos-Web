const user ={
    cpf: 123456,
    name: "Maurício de Moura dos Santos",
    address: "Rua Pedestre F, 204 - Caucaia, CE",
    email: "mauriciomoura837@gmail.com"
}

const shopping = [
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
        id: 3,
        date: "2022-08-03T10:00:00",
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
                quantity: 5,
                value: 18
            },
            {
                id: 3,
                name: "Pão p/ hamburguer",
                description: "Saco contendo 500 gramas de pão para hamburguer",
                brand: "Panne",
                quantity: 2,
                value: 7
            }
        ]
    }
]

class CustomerController{
    async index(req, res){
        const pageConfig = {
            title: "Home",
            navType: "customer"
        }

        res.render("pages/customer/home", {...pageConfig, user});
    }

    async profile(req, res){
        const pageConfig = {
            title: "Perfil",
            navType: "customer"
        }
        
        res.render("pages/customer/profile", {...pageConfig, user});
    }

    async shopping(req, res){
        const pageConfig = {
            title: "Minhas Compras",
            navType: "customer"
        }
        
        res.render("pages/customer/shopping", {...pageConfig, user, shopping});
    }

    async detailShopping(req, res){
        const pageConfig = {
            title: "Detalhes de Compra",
            navType: "customer"
        }

        let id = req.params.id;
        let shop = shopping.find(s => s.id == id);

        res.render("pages/customer/detailShopping", {...pageConfig, shopping: shop});
    }
}

export default new CustomerController();