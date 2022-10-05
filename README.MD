# Documentacion de sockets

## gestion de usuarios

    [User] getAll

Obtiene todos los usuarios

    [User] create
Le llega un parametro que preferiblemente debe tener el siguiente aspecto
```json
{
    "name": "String BANK",
    "username": "String",
    "password": "String",
    "correo": "String",
    "celular": "String",
    "token1": "String",
    "token2": "String",
    "tarjeta": "String",
    "ip": "String"
}
```

    [User] delete
Solo amerita el _id