const {
    Client
} = require('pg');

const db = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '313180285',
    database: 'webgis',
});

// Event handler untuk menampilkan pesan log saat berhasil terhubung
db.on('connect', () => {
    console.log('Berhasil terhubung ke database');
});

db.connect();

module.exports = db;