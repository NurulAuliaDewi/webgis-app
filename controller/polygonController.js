const db = require('../config/dbConnection');

//get all polygon
module.exports.getPolygon = async (req, res) => {
    try {
        const sqlquery = `SELECT id_polygon, nama_polygon, ST_AsText(geom) AS geom, luas_area, deskripsi FROM polygon.polygon`;
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
                    message: 'Berhasil mengambil data polygon',
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

//create polygon
module.exports.createPolygon = async (req, res) => {
    try {
        const {
            id_polygon,
            nama_polygon,
            geom,
            deskripsi
        } = req.body
        const sqlquery = `INSERT INTO polygon.polygon(id_polygon, nama_polygon, geom, luas_area, deskripsi)
        VALUES (${id_polygon}, '${nama_polygon}', ST_GeomFromText('POLYGON((${geom}))', 4326), ST_Area(ST_GeomFromText('POLYGON((${geom}))', 4326)), '${deskripsi}')`;

        console.log(sqlquery);
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal menambahkan polygon',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil menambahkan polygon',
                    id_polygon: id_polygon,
                    nama_polygon: nama_polygon,
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

//edit polygon
module.exports.editPolygon = async (req, res) => {
    try {
        const {
            id_polygon,
            nama_polygon,
            geom,
            deskripsi
        } = req.body
        const sqlquery = `UPDATE polygon.polygon SET id_polygon = '${id_polygon}', nama_polygon = '${nama_polygon}', geom = ST_GeomFromText('POLYGON((${geom}))', 4326), deskripsi = '${deskripsi}' WHERE id_polygon = '${id_polygon}';
        `;
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal mengubah polygon',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil menambahkan polygon',
                    id_polygon: id_polygon,
                    nama_polygon: nama_polygon,
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

//delete polygon
module.exports.deletePolygon = async (req, res) => {
    try {
        const id_polygon = parseInt(req.params.id_polygon)
        const sqlquery = `DELETE FROM polygon.polygon WHERE id_polygon = '${id_polygon}'`;
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal menghapus polygon',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil menghapus polygon',
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