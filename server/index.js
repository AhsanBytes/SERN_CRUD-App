const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require("mysql2")

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Nasha@125#",
    database: "crud_contact"
})

app.get("/api/get", (req,res)=>{
    pool.query("SELECT * from contact_db",(error,result)=>{
        res.send(result);
    });
})

app.post("/api/post",(req,res) => {
    const {name, email, contact} = req.body;
    const sqlInsert = "INSERT INTO contact_db(name, email, contact) VALUES (?, ?, ?)";
    pool.query(sqlInsert, [name, email, contact], (error, result)=> {
        if(error){
            console.log(error);
        }
    });
});

app.get("/api/get/:id", (req,res)=>{
    const { id } = req.params;
    pool.query("SELECT * from contact_db WHERE id = ?", id, (error,result)=>{
        if(error)
        {
            console.log(error);
        }
        res.send(result);
    });
})

app.put("/api/update/:id",(req,res) => {
    const { id } = req.params;
    const {name, email, contact} = req.body;
    const sqlUpdate = "UPDATE contact_db SET name = ?, email = ?, contact = ? WHERE id = ?";
    pool.query(sqlUpdate, [name, email, contact, id], (error, result)=> {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

app.delete("/api/remove/:id",(req,res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM contact_db WHERE id = ?";
    pool.query(sqlRemove, id, (error, result)=> {
        res.send("Deleted");
        if(error){
            console.log(error);
        }
    });
});

app.get("/",(req,res)=>{
    // const queryinsert = "INSERT INTO contact_db(name, email, contact) VALUES ('Azaz', 'azazanwar27@gmil.com', 03406223563)";
    // pool.query(queryinsert, (error, result)=>{
    //     console.log("error", error);
    //     console.log("result", result);
        res.send("Hello to the first SERN App")
    // })
})

app.listen(3001,()=>{
    console.log("Server is listening on port 3001")
})   