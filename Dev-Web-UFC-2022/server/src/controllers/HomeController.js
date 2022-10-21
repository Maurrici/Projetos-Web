class HomeController{

    async index(req, res){
        res.render('pages/home', {title: "Home"});
    }

    async register(req, res){
        res.render('pages/register', {title: "Cadastro"});
    }

    async registerSupermarket(req, res){
        res.render('pages/registerSupermarket', {title: "Cadastro de Super Mercado"});
    }

    async registerCustomer(req, res){
        res.render('pages/registerCustomer', {title: "Cadastro de Cliente"});
    }

    async loginType(req, res){
        res.render('pages/loginType', {title: "Login"});
    }

    async login(req, res){
        res.render('pages/login', {title: "Login"});
    }

    async supermarkets(req, res){
        res.render('pages/supermarkets', {title: "Super Mercados"});
    }

    async supermarket(req, res){
        res.render('pages/supermarket', {title: "Super Mercado Exemplo"});
    }
}

export default new HomeController();