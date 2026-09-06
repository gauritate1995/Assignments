import config from '../config/config.json' with {type:'json'};
import { Client } from 'pg';
import queries from '../queries/queries.json' with {type:'json'};

export class DBCommons{
    //common method to get the data from database
    async getData(query: string): Promise<Array<Object>>{
        
        //Create a configuration to connect with the database
        const dbConfig= new Client({
            host:config.db.host,
            port:config.db.port,
            user:config.db.user,
            password:config.db.password,
            database:config.db.database
        });
        //Connect with the database by using the above connection URL.
        await dbConfig.connect();

        //Execute the query and stored the test result in one variable.
        const data = await dbConfig.query(query);
        
        //Close the database connection
        await dbConfig.end();

        //return the received from the database
        return data.rows;
    }
}

let obj= new DBCommons();
let dbData = await obj.getData("SELECT * FROM CATEGORY");
//console.log(dbData);
//console.log(dbData[1].name === "Animation");

let dbData1= await obj.getData(queries.get_all_movies);
//console.log(dbData1);

let dbData2= await obj.getData(queries.get_category_id_withinRage);
console.log(dbData2[9]);
