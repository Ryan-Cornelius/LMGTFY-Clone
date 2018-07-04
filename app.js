const express    = require('express'),
      bodyParser = require('body-parser'),
      app         = express(),
      { BitlyClient } = require('bitly');
      bitly = new BitlyClient('5582d12b77d558f659048fabdbd40bb95f2e6bb6', {});

//Config
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text());

//TODO: Bit.ly coming back with invalid URI cause of localhost. Might have to host it

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:query', (req, res) => {
    res.render(
        'google', 
        {displayQuery: req.params.query.replace(/\+/ig, ' '),
         rawQuery: req.params.query}
    )
});

app.post('/', (req, res) => {
    res.send(shortenURL(req.body))
    console.log(req.body)
});

app.listen(3000,() => {
    console.log('listening')
});

async function shortenURL(input){
    let result;
    try {
    result = await bitly.shorten(`${input}`);
    } catch(e) {
    throw e;
    }
    return result.url;
    console.log(input)
}