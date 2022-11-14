class HomeController{
    async index(req, res){
        const pageConfig = {
            title: "Home",
            navType: undefined 
        }

        res.render('pages/home', {...pageConfig});
    }

    async register(req, res){
        const pageConfig = {
            title: req.query["type"] == "supermarket" ? "Cadastro de Super Mercado" : "Cadastro de Cliente",
            navType: undefined 
        }

        res.render('pages/register', {...pageConfig, type: req.query["type"]});
    }

    async login(req, res){
        const pageConfig = {
            title: "Login",
            navType: undefined 
        }

        res.render('pages/login', {...pageConfig, type: req.query["type"]});
    }

    async postLogin(req, res){
        let type = req.body.type;
        let email = req.body.email;
        let password = req.body.password;

        if(type == "supermarket") res.redirect('/supermarket');
        else if(type == "customer") res.redirect('/customer');
        else if(type == "seller") res.redirect('/seller');
    }

    async supermarkets(req, res){
        const pageConfig = {
            title: "Super Mercados",
            navType: undefined 
        }

        res.render('pages/supermarkets', {...pageConfig});
    }

    async supermarket(req, res){
        const pageConfig = {
            title: "Super Mercado Exemplo",
            navType: undefined 
        }

        res.render('pages/supermarket', {...pageConfig});
    }
}

export default new HomeController();