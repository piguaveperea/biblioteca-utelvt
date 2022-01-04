const jwt = require('jsonwebtoken')

exports.verificarToken = async (req, res, next)=>{
    const bearerHeader  = req.headers['authorization']
    if(bearerHeader){
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1];
        const payload = jwt.verify(bearerToken, process.env.SECRET_KEY)
        req.usuario_id = payload.id
        next()
    }
    else{
        res.json(
            {
                message: "Hola"
            }
        )
    }
}