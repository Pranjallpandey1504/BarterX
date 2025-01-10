const http = require('http')
const fs = require('fs')
const PORT = 8050

defineLog = (req) => {
    const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`
    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
            console.error("Failed to write log:", err)
        }
    })
}

const server = http.createServer((req, res) => {
    defineLog(req)

    res.setHeader('Content-Type', 'text/plain')
    switch (req.url) {
        case '/':
            res.end('Welcome to the BarterX')
            break
        case '/products':
            res.end('Here are the products up for Sale in BarterX')
            break
        case '/login':
            res.end('Login to the BarterX')
            break
        case '/signup':
            res.end('Sign up to the BarterX')
            break
        case '/profile':
            res.end('Trader Profile')
            break
        case '/cart':
            res.end('Your Shopping Cart is here')
            break
        case '/checkout':
            res.end('Lets\' start shipping')
            break
        case '/orders':
            res.end('Your Orders are here')
            break
        case '/categories':
            res.end('Browse Categories')
            break
        case '/chat':
            res.end('Your Chat with fellow Traders')
            break
        case '/contact':
            res.end('Contact Us at')
            break
        case '/about':
            res.end('The modern approach to trading our commodities')
            break
        default:
            res.end('Page not found')
            break
    }
})

server.listen(PORT, () => {
    console.log(`Server initiated on port ${PORT}...`)
})
