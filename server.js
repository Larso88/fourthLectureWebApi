import express from "express";
import bodyParser from "body-parser"

const app = express();
app.use(bodyParser.json())

app.get("/login", (req, res) => {
    res.json( {
        username: "admin"
    })
})

const users = [
    {
        username: "admin", password: "321terces"
    }
]


app.post("/login", (req, res ) => {
    // read body as Json
    // check if username and password is correct
    //set a cookie
    //read the cookie in /login

    const body = req.body;
    const username = body.username;
    const password = body.password

    if (users.find(u => u.username === username).password === password) {
        res.sendStatus(200)
    }else {
        res.send(401)
    }


    res.end()
})


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started at http://localhost:${server.address().port}`);
})