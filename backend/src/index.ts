import Server from './server'

const PORT = parseInt(process.env.PORT, 10) || 3333
const HOST = process.env.HOST || '0.0.0.0'

Server.listen(PORT, HOST, () => console.log(`=> Listening in port ${PORT}.\n🌎  Open up http://${HOST}:${PORT}`))
