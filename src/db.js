
import mysql from "mysql2/promise";

async function conecta(){

    const conn = await mysql.createConnection({
        host:'sql10.freemysqlhosting.net',
        user:'sql10648299',
        password:'JkCEg664kk',
        database: 'sql10648299',
        rowsAsArray: true
    })

    const result = await conn.query('SELECT * FROM sugeridos')

    console.log(result[0])

}

export default conecta

/*
INSERT INTO `sugeridos` (`id`, `nombre`, `valor`, `activo`) VALUES (NULL, 'datazo', '1234', '1');

*/




/*
#    Server: 
sql10.freemysqlhosting.net
#    Name: 
sql10648299
#    Username: 
sql10648299
#    Password: 
JkCEg664kk
#    Port number: 
3306
*/