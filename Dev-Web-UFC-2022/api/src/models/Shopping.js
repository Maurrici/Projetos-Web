import db from "../database/db.js";

class Shopping{
    async getByID(id){
        try {
            let shoppings = await db.readFile("Shopping");

            let shopping = shoppings.find(s => s.id === id);

            return shopping;
        } catch (err) {
            throw err;
        }
    }
}

export default new Shopping();