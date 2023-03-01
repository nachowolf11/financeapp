const express = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const knex = require('../database/config');

const crearUsuario = async(req, res = express.response) => {

    const { email, password, birthday, cellphone, name } = req.body

    try {
        const [user_id] = await knex.select('user_id').from('users').where('email', email);

        if ( user_id ){
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con este correo'
            })
        }

        let usuario = { name, email, birthday, cellphone, password }

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync( password, salt );
    
        usuario = await knex('users').insert(usuario);

        //Generar JWT
        const token = await generarJWT( usuario.user_id, usuario.name );
    
        res.status(201).json({
            ok: true,
            user_id: usuario.user_id,
            name: usuario.name,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error.'
        })
    }
}

const loginUsuario = async(req, res = express.response) => {
    
    const { email, password } = req.body

    try {
        const [usuario] = await knex('users').select('*').where('email', email);

        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        const validPassword = bcrypt.compareSync( password, usuario.password );
        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        //Generar JWT
        const token = await generarJWT( usuario.user_id, usuario.name );

        res.status(200).json({
            ok: true,
            user_id: usuario.user_id,
            name: usuario.name,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Server error.'
        });
    }
}

const revalidarToken = async(req, res = express.response) => {

    const { user_id, name } = req

    const token = await generarJWT( user_id, name );

    res.json({
        ok: true,
        user_id, name,
        token
    })
}

module.exports = {
    crearUsuario,
    revalidarToken,
    loginUsuario,
}