const express = require('express');
const cors = require('cors');
const fileUpload = require('./routes/filesUploads')

const app = express();
app.use(cors())
const PORT = process.env | 5000
app.use('/uploads', express.static('uploads'));
app.use(express.json({extended : false}));

app.get('/', (req, res)=> {
    res.send("welcome-->");
}) 
app.use("/api/file-upload",fileUpload);
app.listen(PORT, ()=> console.log("node running on port", PORT))