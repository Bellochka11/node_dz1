const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const counterFilePath = path.join(__dirname, 'counter.json');

function readCounter() {
    if (fs.existsSync(counterFilePath)) {
        const data = fs.readFileSync(counterFilePath, 'utf8');
        return JSON.parse(data);
    }
    return { home: 0, about: 0 };
}

function writeCounter(counter) {
    fs.writeFileSync(counterFilePath, JSON.stringify(counter), 'utf8');
}

app.get('/', (req, res) => {
    let counters = readCounter();
    counters.home += 1;
    writeCounter(counters);
    res.send(`<h1>Добро пожаловать</h1><p>Количество посещений: ${counters.home}</p> <a href="/about">На страницу обо мне</a>`);
});

app.get('/about', (req, res) => {
    let counters = readCounter();
    counters.about += 1;
    writeCounter(counters);
    res.send(`<h1>Обо мне</h1><p>Количество посещений: ${counters.about}</p> <a href="/">На главную страницу</a>`);
});

app.listen(3000);