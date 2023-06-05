const express = require('express');
const { join } = require('path');
const router = express.Router();

const app = express();

const port = 3000;

router.get('/',function(req,res){
    res.sendFile(join(__dirname+'/index.html'));
});
app.use('/', router);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));