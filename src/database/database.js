// database.js

const { Sequelize } = require('sequelize');

// Initialize SQLite database
const sequelize = new Sequelize('sqlite:database.sqlite');

// Define models for tables
const Grupo = sequelize.define('Grupo', {
    // Define attributes here
});

const Agricultor = sequelize.define('Agricultor', {
    // Define attributes here
});

const EntidadeExecutora = sequelize.define('EntidadeExecutora', {
    // Define attributes here
});

const Produto = sequelize.define('Produto', {
    // Define attributes here
});

const ItemProjetoPrincipal = sequelize.define('ItemProjetoPrincipal', {
    // Define attributes here
});

const ItemPorCaixa = sequelize.define('ItemPorCaixa', {
    // Define attributes here
});

const Projeto = sequelize.define('Projeto', {
    // Define attributes here
});

// Sync all defined models with the database
async function syncDatabase() {
    await sequelize.sync({ force: true }); // Use force: true to drop existing tables and create new ones
    console.log('Database synced!');
}

syncDatabase();