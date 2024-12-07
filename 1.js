const http = require('http');

let count = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    count += 1;

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`
            <a href="/about">Перейти на страницу обо мне</a>
            <h1>Просмотров: ${count}</h1>
        `);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`
            <a href="/">Перейти на главную страницу</a>
            <h1>Просмотров: ${count}</h1>
        `);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`
            <h1>Страница не найдена</h1>
            <h1>Просмотров: ${count}</h1>
        `);
    }
});


const port = 3000;

server.listen(port, () => {
    console.log(`запущен сервер на порту ${port}`);
});