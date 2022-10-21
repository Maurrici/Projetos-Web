import express from "express";
import HomeController from "../src/controllers/HomeController.js";
import SupermarketController from "../src/controllers/SupermarketController.js";
import CustomerController from "../src/controllers/CustomerController.js";
import SellerController from "../src/controllers/SellerController.js";

var router = express.Router();

// Rotas padrão
router.get('/', HomeController.index);
router.get('/register', HomeController.register);
router.get('/register/supermarket', HomeController.registerSupermarket);
router.get('/register/customer', HomeController.registerCustomer);
router.get('/loginType', HomeController.loginType);
router.get('/login', HomeController.login);
router.get('/supermarkets', HomeController.supermarkets);
router.get('/supermarkets/:id', HomeController.supermarket);


// Rotas de supermercado
router.get('/supermarket', SupermarketController.index);
router.get('/supermarket/profile', SupermarketController.profile);

router.get('/sellers', SupermarketController.sellers);
router.get('/supermarket/seller', SupermarketController.createSeller);
router.get('/seller/:id', SupermarketController.editSeller);

router.get('/sales', SupermarketController.sales);
router.get('/sale/:id', SupermarketController.detailSales);

router.get('/products', SupermarketController.products);
router.get('/product', SupermarketController.createProduct);
router.get('/product/:id', SupermarketController.editProduct);


// Rotas de cliente
router.get('/customer', CustomerController.index);
router.get('/customer/profile', CustomerController.profile);

router.get('/shopping', CustomerController.shopping);
router.get('/shopping/:id', CustomerController.detailShopping);


// Rotas de vendedor
router.get('/seller', SellerController.index);
router.get('/sale', SellerController.sale);
router.get('/register/fast', SellerController.registerFast);


export default router;