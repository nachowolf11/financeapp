const express = require('express');
const knex = require('../database/config');

const getMovements = async( req, res = express.response ) => {
    const user_id = req.user_id
    try {
        const movements = await knex('account_movement').select('*').where('user_id', user_id);
        res.status(200).json({
            ok: true,
            movements
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'Server error.'
        });        
    }
};

const createMovement = async( req, res = express.response ) => {

    // Mediante la validación del token se asigna el user_id al REQ
     const movement = {
        ...req.body,
        user_id: req.user_id
    }
    try {
        const movementSaved = await knex('account_movement').insert(movement);

        res.status(201).json({
            ok: true,
            movement: movementSaved
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'Server error.'
        });
    }
};

const updateMovement = async( req, res = express.response ) => {
    const movement_id = req.params.id

    try {
        const [movement] = await knex('account_movement').select('*').where('account_movement_id', movement_id);
        const user_id = req.user_id

        if( !movement ){
            return res.status(404).json({
                ok: false,
                msg:'Movement does not exist.'
            });            
        }

        if( movement.user_id !== user_id ){
            return res.status(404).json({
                ok: false,
                msg:'Movement does not belong to this user.'
            });    
        }

        const newMovement = { ...req.body, user_id: req.user_id }

        await knex('account_movement').where('account_movement_id', movement_id).update(newMovement);

        res.status(201).json({
            ok: true,
            newMovement
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'Server error.'
        });        
    }
    };

    const deleteMovement = async( req, res = express.response ) => {
    const movement_id = req.params.id

    try {
        const [movement] = await knex('account_movement').select('*').where('account_movement_id', movement_id);
        const user_id = req.user_id

        if( !movement ){
            return res.status(404).json({
                ok: false,
                msg:'Movement does not exist.'
            });            
        }

        if( movement.user_id !== user_id ){
            return res.status(404).json({
                ok: false,
                msg:'Movement does not belong to this user.'
            });    
        }

        await knex('account_movement').where('account_movement_id', movement_id).del();

        res.status(200).json({
            ok: true,
            msg:`Movement ${movement_id} deleted.`
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'Server error.'
        });        
    }
};

module.exports = {
    getMovements,
    createMovement,
    deleteMovement,
    updateMovement,
}