import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
 
import Cards from "./dbCards.js";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.1lybn.mongodb.net/tinderdb?retryWrites=true&w=majority`;
console.log(process.env.MONGO_USER, process.env.MONGO_PASS);

//Middlewares
app.use(express.json());
app.use(Cors());


//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to mongoDb")) .catch(err=>{console.error(err)});

//API Endpoint
app.get('/', (req, res) => {
    res.status(200).send("HELLO !!!")
});

app.post('/tinder/cards', (req, res)=> {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res)=> {
    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send(data);
        }
    })
});

//Listner
app.listen(port, ()=> console.log(`listening on localhost: ${port}`));