import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { setupDatabase, getDBConnection } from "./database.js";


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + "/public"));    // make the public folder the default one

app.use(express.static(path.join(__dirname + "/public")));
app.set("view engine", "ejs");
// Routes - all 3 are get requests as we are serving static files
// This typically (as it does here) represents the 'Home' page.
// We are sending the HTML file, index.html, to the client

app.get('/', (req, res) => {
    res.render('pages/products');
});
app.get('/about', (req, res) => {
    res.render('pages/about');
});
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});
setupDatabase()
.then(() => {
app.listen(port, () => {
console.log(`App listening at port ${port}`);
});
})
.catch(err => {
console.error("Database setup failed:", err);
});