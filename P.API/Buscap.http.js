const http = require('node:http')

const desiredPort = process.env.PORT ??  1234

const processRequest = (rec,res) => {
         res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if(rec.url === '/'){
        res.statuscode = 200
         res.end('Bienvenido a mi servidor http')
} else if (rec.url === '/contacto') {
    res.statuscode = 200
    res.end('Pagina de contacto')
} else {
    res.statuscode = 404
    res.end('404 Pagina no encontrada')
}
server.listen(desiredPort, () => {
    console.log(`serverlistening on port http://localhost:${desiredPort}`)
})}