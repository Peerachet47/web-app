const express = require("express");
const path = require("path");
const con = require("./config/db");
const bcrypt = require('bcrypt');
const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/regist.html', (_req, res) => {
    res.sendFile(path.join(__dirname, 'views/regist.html'));
});


// Register Create routes
app.post("/regist/create", async (req, res) => {
    const { name, email, username, password } = req.body;
    try {
        connection.query(
            "INSERT INTO users(stuId, email, username, password, role) VALUES(?,?,?,?,1)",
            [stuId, username, email, password],
            (err, results, fields) => {
                if(err){
                    console.log("Error while inserting a user in to the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({message: "New user successfully creaeted!"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})


// Routes
app.get('/password/:raw', function(req, res){
    const raw = req.params.raw;
    bcrypt.hash(raw, 10, function(err, hash){
        if(err){
            res.status(500).send('Server error');
        }
        else{
            res.send(hash);
        }
    });
});

app.post('/login', function(req, res){
    const username = req.body.username;
    const raw_password = req.body.password;
    const sql = "SELECT id,role,password FROM users WHERE username=?";
    
    con.query(sql, [username], function(err, results){
        if(err) {
            console.error(err);
            res.status(500).send('Server error');
        }
        else{
            if(results.length === 1){
                const hash = results[0].password;
                bcrypt.compare(raw_password, hash, function(err, same){
                    if(err){
                        res.status(500).send('Server error');
                    }else{
                        if(same){
                            res.json({ role: results[0].role });
                        }
                        else {
                            res.status(401).send('Login fail: wrong password');
                        }
                    }
                });
            }
            else{
                res.status(401).send('Login fail: wrong username');
            }
        }
    });
});

// Routes for serving HTML files
app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
// Routes for redirection after login
app.get('/G10HomeUser', function(req, res){
    res.sendFile(path.join(__dirname, '/views/G10HomeUser.html'));
});

app.get('/G10Homelecturer', function(req, res){
    res.sendFile(path.join(__dirname, '/views/G10Homelecturer.html'));
});

app.get('/G10Homestaff', function(req, res){
    res.sendFile(path.join(__dirname, '/views/G10Homestaff.html'));
});
app.get('/G10Dash', function(req, res){
    res.sendFile(path.join(__dirname, '/views/G10Dash.html'));
});
app.get('/history_lecturer', function(req, res){
    res.sendFile(path.join(__dirname, '/views/history_lecturer.html'));
});
app.get('/history_student', function(req, res){
    res.sendFile(path.join(__dirname, '/views/history_student.html'));
});
app.get('/historystaff', function(req, res){
    res.sendFile(path.join(__dirname, '/views/historystaff.html'));
});
app.get('/room_list_user', function(req, res){
    res.sendFile(path.join(__dirname, '/views/room_list_user.html'));
});
app.get('/roomlist_lecturer', function(req, res){
    res.sendFile(path.join(__dirname, '/views/roomlist_lecturer.html'));
});
app.get('/roomlist_staff', function(req, res){
    res.sendFile(path.join(__dirname, '/views/roomlist_staff.html'));
});

const port = 3000;
app.listen(port, function () {
    console.log("Server is ready at " + port);
});
// Routes for serving static files
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('node_modules'));

// Routes for serving static files
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('node_modules'));

// Routes for serving static files
app.use(express.static('public'));
app.use(express.static('views'));

app.use(express.static('node_modules'));  
// Routes for serving static files
app.use(express.static('public'));
app.use(express.static('views'));

app.use(express.static('node_modules'));

// Routes for serving static files  
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('node_modules'));
// Create user route
app.post("/createuser", (req, res) => {
  const { username, email, password } = req.body;

  // Check if all required fields are provided
  if (!username || !email || !password) {
      return res.status(400).json({ message: "Missing username, email, or password in request body" });
  }

  // Hash the password
  bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
          console.error("Password hashing error:", err);
          return res.status(500).send("Password hashing error");
      }

      // Insert user into database
      const sql = "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, 3)";
      con.query(sql, [username, email, hash], function (err, results) {
          if (err) {
              console.error("Error while inserting a user into the database:", err);
              return res.status(500).send("Error while inserting a user into the database");
          }
          return res.status(201).json({ message: "New user successfully created!" });
      });
  });
});









