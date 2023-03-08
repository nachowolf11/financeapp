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
        user_id: req.user_id,
        ...req.body
    }
    
    try {
        // Verifico que exista el account
        let [account] = await knex.select('*').from('account').where('user_id', movement.user_id)
        if( !account ){
            return res.status(404).json({
                ok: false,
                msg: 'Account is not created'
            })
        }

        const movementSaved = await knex('account_movement').insert(movement);

        // Actualizo el balance
        movement.account_movement_type_id === 1 
            ? account.balance += movement.amount
            : account.balance -= movement.amount

        await knex('account').where('user_id', movement.user_id).update(account);

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
        const [movement] = await knex.select('*').from('account_movement').where('account_movement_id', movement_id);
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

        if( movement.amount !== newMovement.amount || movement.account_movement_type_id !== newMovement.account_movement_type_id ){
            return res.status(404).json({
                ok: false,
                msg:'Movement amount can not be changed. In this case, delete the movement and create it again.'
            });  
        }


        // Actualizando el movimiento
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
        const [movement] = await knex.select('*').from('account_movement').where('account_movement_id', movement_id);
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

        let [account] = await knex.select('*').from('account').where('user_id', movement.user_id);

        if( !account ){
            return res.status(404).json({
                ok: false,
                msg: 'Account is not created'
            })
        }

        // Actualizar balance
        movement.account_movement_type_id === 1 
            ? account.balance -= movement.amount
            : account.balance += movement.amount

        await knex('account').where('user_id', movement.user_id).update(account)

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