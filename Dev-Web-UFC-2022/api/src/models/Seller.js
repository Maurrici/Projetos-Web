import db from "../database/db.js";

class Seller{
    async getByID(id){
        try {
            let sellers = await db.readFile("Seller");

            let seller = sellers.find(s => s.id === id);
            delete seller.password;

            return seller;
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

export default new Seller();