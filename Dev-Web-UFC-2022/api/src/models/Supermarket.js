import db from "../database/db.js";

class Supermarket{
    async getByID(id){
        try {
            let supermarkets = await db.readFile("Supermarket");

            let supermarket = supermarkets.find(s => s.id === id);
            delete supermarket.password;

            return supermarket;
        } catch (err) {
            throw err;
        }
    }

    async editByID(id, newSeller){
        try {
            let sellers = await db.readFile("Customer");

            sellers.push(newSeller);

            await db.writeFile("Customer", sellers);
        } catch (err) {
            throw err;
        }
    }

    async editByID(id, editSeller){
        try {
            let sellers = await db.readFile("Customer");

            sellers.forEach(c => {
                if(c.id === id){
                    editSeller.password = c.password;
                    c = editSeller;
                }
            });

            await db.writeFile("Customer", sellers);
        } catch (err) {
            throw err;
        }
    }
}

export default new Supermarket();