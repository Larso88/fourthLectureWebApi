import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded( {
    extended: false
}));

app.get("/login", (req, res) => {
    const {username} = req.cookies
    const user = users.find(u => u.username === username);
    const {fullName} = user;
    res.json( {username, fullName});
})

const users = [
    {
        username: "administrator", password: "321terces", fullName: "Test Person"
    },
    {
        username: "dummyuser", password: "dummy", fullName: "Noen Andre"
    }
]


app.post("/login", (req, res ) => {


    const { password, username} = req.body;

    const user = users.find(u => u.username === username);
    if (user && user.password === password) {
        res.cookie("username", username);
        res.sendStatus(200);
    }else {
        res.send(401)
    }


    res.end()
})

app.use(express.static("public"));


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started at http://localhost:${server.address().port}`);
})