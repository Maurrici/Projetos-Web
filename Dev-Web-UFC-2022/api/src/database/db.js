import fs from "fs";

class Database{
    readFile(entity){
        return new Promise((resolve, reject) => {
            fs.readFile(`./${entity}.json`, (err, data) =>{
                if(err) reject(err);

                resolve(JSON.parse(data));
            });
        });
    }

    writeFile(entity, data){
        return new Promise((resolve, reject) => {
            fs.writeFile(`./${entity}.json`, JSON.stringify(data), (err) =>{
                if(err) reject(err);

                resolve(true);
            });
        });
    }
}

export default new Database();

