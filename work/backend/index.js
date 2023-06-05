import  express  from "express";
import mysql from "mysql";

const app = express()
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cors from 'cors'
import cookieParser from "cookie-parser";

//middlewares




app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(cookieParser());



app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

const db2 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sajid",
  database: "test",
});

app.get('/search3', (req, res) => {
  const { EtatDAV } = req.query;

  const query = `SELECT * FROM books WHERE EtatDav LIKE '%${EtatDAV}%'`;


  db2.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});
app.get('/search4', (req, res) => {
  const { NumeroBA } = req.query;

  const query = `SELECT * FROM books WHERE NumBA LIKE '%${NumeroBA}%'`;


  db2.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});
app.get("/", (req, res) => {
  res.json("hello");
});
app.put("/booksA/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `EtatDav` = ?, `NumBA` = ?, `DateEdBA` = ?, `Conformité` = ?, `Nonconf` = ?, `DateTA` = ?, `NumTA` = ? WHERE id = ?";

  const values = [
    req.body.EtatDav,
    req.body.NumBA,
    req.body.DateEdBA,
    req.body.Conformité,
    req.body.Nonconf,
    req.body.DateTA,
    req.body.NumTA,
    
    ];
  
  db2.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.get('/search1', (req, res) => {
  const { Labdestination } = req.query;

  const query = `SELECT * FROM books WHERE labdestination LIKE '%${Labdestination}%'`;


  db2.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});
app.get('/search2', (req, res) => {
  const { DatePV } = req.query;

  const query = `SELECT * FROM books WHERE datePV LIKE '%${DatePV}%'`;


  db2.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});
app.get('/search', (req, res) => {
  const { productName } = req.query;

  const query = `SELECT * FROM books WHERE produit LIKE '%${productName}%'`;


  db2.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db2.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`cover`, `datePV`, `numPV`, `typeP`, `cadre`, `produit`, `cadreP`, `niveau`, `recherche`, `labdestination`, `dateEnvoi`) VALUES (?)";

  const values = [
  req.body.cover,
  req.body.datePV,
  req.body.numPV,
  req.body.typeP,
  req.body.cadre,
  req.body.produit,
  req.body.cadreP,
  req.body.niveau,
  req.body.recherche,
  req.body.labdestination,
  req.body.dateEnvoi,
  ];

  db2.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";
  db2.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `cover` = ?, `datePV` = ?, `numPV` = ?, `typeP` = ?, `cadre` = ?, `produit` = ?, `cadreP` = ?, `niveau` = ?, `recherche` = ?, `labdestination` = ?, `dateEnvoi` = ? WHERE id = ?";

  const values = [
    req.body.cover,
    req.body.datePV,
    req.body.numPV,
    req.body.typeP,
    req.body.cadre,
    req.body.produit,
    req.body.cadreP,
    req.body.niveau,
    req.body.recherche,
    req.body.labdestination,
    req.body.dateEnvoi,
    ];
  
  db2.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.listen(8800, ()=> {
    console.log("API working!")
});