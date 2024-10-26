import { pipeline, env } from '@xenova/transformers';
import express from 'express';

const app = express();

/* Se descarga en la carpeta cache el modelo. */
env.cacheDir = './.cache';

app.set('view engine', 'ejs');
app.use(express.static('.'))
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('index', {result:null})
})

app.post('/process', async (req, res) => {
    try {
        const task = 'sentiment-analysis'; /* Analisis de sentimientos */
        /* Modelo en ingles */
        const model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
        let result;
        const { text } = req.body;
        
        if (!text || text.length === 0) {
            result = { label: 'You must enter a text.' }; // Manejo de error para texto vacío
        } else {
            const progress_callback = (value) => console.log(value);
            const classifier = await pipeline(task, model, { progress_callback });
            const response = await classifier(text);
            result = response[0]; 
        }
        
        return res.render('index', { input: text, result });
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

app.listen(8000,(req,res)=>{
console.log('servidor running on port' , 8000)
})