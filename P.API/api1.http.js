//Esto lo estoy haciendo para practicar y sin usar IA, ya se que no es gran cosa jajaj

const http = require('node:http')

const Ditto = require('P.API/POKEMON/1Ditto.json')

const processRequest = (req,res) => {
  const {method, url} = req

  switch (method) {
    case 'GET':
        switch (url) { 
            case '/':
                res.setHeader('Content-Type', 'application/json; charset=utf-8')
                return res.end(JSON.stringify(Ditto))
            default:
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                return res.end('404 Pagina no encontrada')
        }
    case 'POST':
        switch (url) {
            case '/POKEMON': {
                let body = ''
            //Escuchar los datos que llegan en el cuerpo de la solicitud
                req.on('data', (chunk) => {
                    body += chunk.toString()
                })
                req.on('end', () => {
                    const data = JSON.parse(body)
                    //Aquí puedes hacer algo con los datos recibidos, como guardarlos en una base de datos o procesarlos de alguna manera
                    res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'})
                    res.end(JSON.stringify(data))
                })
                break
            }
        }
    }
}

const createServer = http.createServer(processRequest)

createServer.listen(3000, () => {
    console.log('Server listening on port http://localhost:3000')
})
