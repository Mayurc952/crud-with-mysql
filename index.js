const express = require("express");
const res = require("express/lib/response");
const app = express();

const db = require('./models')
const { User } = require('./models')


//insert
app.get("/insert",(req, res)=>{
    User.create({
        firstName: "Mayur",
        age: 26,

    }).catch((err) => {
        if(err) {
         console.log(err);
        }
    });
    res.send('insert')
});

//select
app.get('/select',(req, res)=>{
    User.findAll().then((users)=>{
       res.send(users);
    })
    .catch((err)=>{
        console.log(err);
    });
});


//find by id:
app.get("/find", (req, res) =>{
    User.findAll({where: {firstName: "chimni"}}).then((users)=>{
        res.send(users);
    })
    .catch((err)=>{
        console.log(err);
    });
});




//update
app.get("/update",(req, res)=>{
    User.update({ firstName: '' },
    { where: { id: 7 } })
    res.send("update")
})

//delete
app.get('/delete',(req, res)=>{
    User.destroy({where: {id: 6}});
    res.send('delete')
});


db.sequelize.sync().then((req) => {
    app.listen(3306, () => {
        console.log("server running at port  3306");
    });
});



