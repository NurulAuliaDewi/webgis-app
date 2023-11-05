const db = require('../config/dbConnection');

//get all point
module.exports.getPoint = async (req, res) => {
    try {
        const sqlquery = `SELECT id_point, nama_point, ST_AsText(geom) AS geom FROM point.point`;
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
                    message: 'Berhasil mengambil data point',
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


//create point
module.exports.createPoint = async (req, res) => {
    try {
        const {
            id_point,
            nama_point,
            geom
        } = req.body
        const sqlquery = `INSERT INTO point.point(id_point, nama_point, geom) VALUES('${id_point}', '${nama_point}', ST_GeomFromText('POINT(${geom})', 3857))`;
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal menambahkan point',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil menambahkan point',
                    id_point: id_point,
                    nama_point: nama_point,
                    geom: geom
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

module.exports.editPoint = async (req, res) => {
    try {
        const {
            id_point,
            nama_point,
            geom
        } = req.body
        const sqlquery = `UPDATE point.point SET id_point = '${id_point}', nama_point = '${nama_point}', geom = ST_GeomFromText('POINT(${geom})', 3857) WHERE id_point = '${id_point}'`;
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal mengubah point',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil mengubah point',
                    id_point: id_point,
                    nama_point: nama_point,
                    geom: geom
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

//delete point
module.exports.deletePoint = async (req, res) => {
    try {
        const id_point = parseInt(req.params.id_point)
        const sqlquery = `DELETE FROM point.point WHERE id_point = '${id_point}'`;
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal menghapus point',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil menghapus point',
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