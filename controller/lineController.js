const db = require('../config/dbConnection');

//get all point
module.exports.getLine = async (req, res) => {
    try {
        const sqlquery = `SELECT id_line, nama_line, ST_AsText(geom) AS geom, panjang_garis, deskripsi FROM line.line`;
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal mengambil data',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil mengambil data line',
                    data: result.rows,
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam permintaan',
            error: error.message,
        });
    }
};

//create line
module.exports.createLine = async (req, res) => {
    try {
        const {
            id_line,
            nama_line,
            geom,
            deskripsi
        } = req.body
        const sqlquery = `INSERT INTO line.line(id_line, nama_line, geom, panjang_garis, deskripsi)
        VALUES('${id_line}', '${nama_line}', ST_GeomFromText('LINESTRING(${geom})', 3857), ST_Length(ST_GeomFromText('LINESTRING(${geom})', 3857)), '${deskripsi}');`
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal menambahkan line',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil menambahkan line',
                    id_line: id_line,
                    nama_line: nama_line,
                    geom: geom,
                    deskripsi: deskripsi
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam permintaan',
            error: error.message,
        });
    }

};

//edit line
module.exports.editLine = async (req, res) => {
    try {
        const {
            id_line,
            nama_line,
            geom,
            deskripsi
        } = req.body
        const sqlquery = `UPDATE line.line SET id_line ='${id_line}', nama_line = '${nama_line}', geom = ST_GeomFromText('LINESTRING(${geom})', 3857), deskripsi = '${deskripsi}' WHERE id_line = '${id_line}';
        `;
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal mengubah line',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil mengubah line',
                    id_line: id_line,
                    nama_line: nama_line,
                    geom: geom,
                    deskripsi: deskripsi
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam permintaan',
            error: error.message,
        });
    }
}

//delete line
module.exports.deleteLine = async (req, res) => {
    try {
        const id_line = parseInt(req.params.id_line)
        const sqlquery = `DELETE FROM line.line WHERE id_line = '${id_line}'`;
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal menghapus line',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil menghapus line'
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam permintaan',
            error: error.message,
        });
    }
}