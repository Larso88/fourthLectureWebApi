import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"

const app = express();
app.use(bodyParser.json())
app.use(cookieParser())

app.get("/login", (req, res) => {
    const { username } = req.cookies;
    const user = users.find(u => u.username === username);
    const {fullName} = user;
    res.json( {username, fullName})
})

const users = [
    {
        username: "administrator", password: "321terces", fullName: "Test Person"
    }
]


app.post("/login", (req, res ) => {
    // read body as Json
    // check if username and password is correct
    //set a cookie
    //read the cookie in /login

    const { password, username} = req.body;

    if (users.find(u => u.username === username).password === password) {
        res.cookie("username", username);
        res.sendStatus(200);
    }else {
        res.send(401)
    }


    res.end()
})


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started at http://localhost:${server.address().port}`);
})