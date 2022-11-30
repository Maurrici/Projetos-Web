import db from "../database/db.js";

class Customer{
    async getByID(id){
        try {
            let customers = await db.readFile("Customer");

            let customer = customers.find(c => c.id === id);
            delete customer.password;

            return customer;
        } catch (err) {
            throw err;
        }
    }

    async editByID(id, newCustomer){
        try {
            let customers = await db.readFile("Customer");

            customers.push(newCustomer);

            await db.writeFile("Customer", customers);
        } catch (err) {
            throw err;
        }
    }

    async editByID(id, editCustomer){
        try {
            let customers = await db.readFile("Customer");

            customers.forEach(c => {
                if(c.id === id){
                    editCustomer.password = c.password;
                    c = editCustomer;
                }
            });

            await db.writeFile("Customer", customers);
        } catch (err) {
            throw err;
        }
    }
}

export default new Customer();