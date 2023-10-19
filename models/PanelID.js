const { Schema, model } = require('mongoose');
const PanelSchema = Schema({
    panelID: String
});


module.exports = model( 'Panel', PanelSchema );