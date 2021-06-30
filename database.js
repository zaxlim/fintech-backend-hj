const mysql =  require("mysql");

const properties = {
    host:"34.126.172.116",
    user:"root",
    password:"fintechsglab",
    port: 3306,
    database:"market",
}

let connection = mysql.createConnection(properties);

connection.connect((error)=> {
    if (error){
        console.log("connection to mysql failed \n" +error)
    }
    else{
        console.log("connected to mysql!")
    }
});

connection.query(
    `select * from products`,
    (error, result) => {
        if (error) {
            console.log (error);
        }
        else {
            console.log(result); 
        }

    }
)

module.exports={connection,};