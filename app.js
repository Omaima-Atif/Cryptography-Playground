import express from "express"
import bodyParser from "body-parser";
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/caesar-cipher', (req, res) => {
    res.render("caesar.ejs", { shift: 1 })
})

app.post('/caesar-cipher', (req, res) => {
    res.render("caesar.ejs")
})

app.get('/rail-fence-cipher', (req, res) => {
    res.render("railfence.ejs", { shift: 1 })
})

app.post('/rail-fence-cipher', (req, res) => {
    res.render("railfence.ejs")
})



app.get('/aes256', (req, res) => {
    res.render("aes.ejs")
})

app.post('/aes256', (req, res) => {
    res.render("aes.ejs")
})

app.get('/des-ecb', (req, res) => {
    res.render("des_ecb.ejs")
})

app.post('/des-ecb', (req, res) => {
    res.render("des_ecb.ejs")
})



app.listen(port, () => console.log(`Server running at http://localhost:${port}`));