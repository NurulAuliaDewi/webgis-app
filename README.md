# Webgis-App
Webgis-App adalah backend dari mini aplikasi yang memungkinkan Anda untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada objek titik, garis, dan poligon.



## Authors

- [@Nurul Aulia Dewi](https://github.com/NurulAuliaDewi)


## Get Started
Berikut merupakan cara untuk menggunakan aplikasi ini

1. Download Aplikasi
```bash
  git clone https://github.com/NurulAuliaDewi/webgis-app.git 
```

2. Export SQL
Berikut beberapa langkahnya :
- buat database dengan nama webgis
- kemudian jalankan atau export file sql pada yang tedapat pada repositri

3. Jalankan Aplikasi
```bash
  npm run test
```
## API Reference
### Get all Data Point

```http
  GET /point
```
#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "data"    : object
}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil mengambil data point",
    "data": [
        {
            "id_point": "1",
            "nama_point": "Universitas Muhammadiyyah",
            "geom": "POINT(107.708394 -6.936111)"
        },
        {
            "id_point": "2",
            "nama_point": "Universitas Islam Nusantara",
            "geom": "POINT(107.643882 -6.945492)"
        },
        {
            "id_point": "3",
            "nama_point": "Universitas Informatika Dan Bisnis Indonesia (UNIBI)",
            "geom": "POINT(107.650503 -6.942229)"
        }
    ]
}

```

### Add data Point

```http
  POST /point/add
```

#### request body
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_point`    | `int`    | id dari point                     |
| `nama_point`  | `string` | nama tempat point                 |
| `geom`        | `geometry` | lokasi atau geometry dari point                 |

#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "id_point": int,
    "nama_point" : string,
    "geom" : geometry

}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil menambahkan point",
    "id_point": "3",
    "nama_point": "Universitas Informatika Dan Bisnis Indonesia (UNIBI)",
    "geom": "107.650503 -6.942229"
}


```


### Upadate data Point

```http
  UPDATE point/edit/:${id_point}
```

#### request Parames
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_point`    | `int`    | id dari point                     |


#### request body
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_point`    | `int`    | id dari point                     |
| `nama_point`  | `string` | nama tempat point                 |
| `geom`        | `geometry` | lokasi atau geometry dari point                 |

#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "id_point": int,
    "nama_point" : string,
    "geom" : geometry

}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil mengubah point",
    "id_point": "1",
    "nama_point": "Universitas Muhammadiyah Bandung",
    "geom": "107.708394 -6.936111"
}

```


### Upadate data Point

```http
  DELETE point/delete/:${id_point}
```

#### request Parames
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_point`    | `int`    | id dari point                     |


#### response
```javascript
{
    "success" : bool,
    "message" : string,
}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil menghapus point"
}

```

### Add data line

```http
  POST /line/add
```

#### request body
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_line`    | `int`    | id dari line                     |
| `nama_line`  | `string` | nama tempat dari line                 |
| `geom`        | `geometry` | lokasi atau koordinat dari line                 |
| `deskripsi`        | `string` | deskripsi lokasi dari line                 |


#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "id_line": int,
    "nama_line" : string,
    "geom" : geometry,
    "deskripsi" : string,

}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil menambahkan line",
    "id_line": "3",
    "nama_line": "Universitas Informatika Dan Bisnis Indonesia (UNIBI)",
    "geom": "107.650572 -6.942394, 107.650827 -6.942359",
    "deskripsi": "Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285"
}



```


### Update data line

```http
  UPDATE line/edit/:${id_line}
```

#### request Parames
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_line`    | `int`    | id dari line                     |


#### request body
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `nama_line`  | `string` | nama tempat line                 |
| `geom`        | `geometry` | lokasi atau geometry dari line                 |
| `deskripsi`        | `string` | deskripsi lokasi dari line                 |

#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "id_line": int,
    "nama_line" : string,
    "geom" : geometry,
    "deskripsi" : string,

}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil mengubah line",
    "id_line": "3",
    "nama_line": "Universitas Informatika Dan Bisnis Indonesia",
    "geom": "107.650572 -6.942394, 107.650827 -6.942359",
    "deskripsi": "Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285"
}


```


### Delete data line

```http
  DELETE line/delete/:${id_line}
```

#### request Parames
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_line`    | `int`    | id dari line                     |


#### response
```javascript
{
    "success" : bool,
    "message" : string,
}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil menghapus line"

}

```
### Get all Data line

```http
  GET /line
```
#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "data"    : object
}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil mengambil data line",
    "data": [
        {
            "id_line": "1",
            "nama_line": "Universitas Muhammadiyah Bandung",
            "geom": "LINESTRING(107.708394 -6.936111,107.708546 -6.936154)",
            "panjang_garis": "0.000157965186037813",
            "deskripsi": "Jl. Soekarno Hatta No.752, Cipadung Kidul, Kec. Panyileukan, Kota Bandung, Jawa Barat 40614"
        },
        {
            "id_line": "2",
            "nama_line": "Universitas Islam Nusantara",
            "geom": "LINESTRING(107.643831 -6.944966,107.645005 -6.94461)",
            "panjang_garis": "0.00122678930545581",
            "deskripsi": "Jl. Soekarno Hatta No.530, Sekejati, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286"
        },
        {
            "id_line": "3",
            "nama_line": "Universitas Informatika Dan Bisnis Indonesia (UNIBI)",
            "geom": "LINESTRING(107.650572 -6.942394,107.650827 -6.942359)",
            "panjang_garis": "0.000257390753534531",
            "deskripsi": "Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285"
        }
    ]
}


```

### Add data line

```http
  POST /line/add
```

#### request body
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_line`    | `int`    | id dari line                     |
| `nama_line`  | `string` | nama tempat dari line                 |
| `geom`        | `geometry` | lokasi atau koordinat dari line                 |
| `deskripsi`        | `string` | deskripsi lokasi dari line                 |


#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "id_line": int,
    "nama_line" : string,
    "geom" : geometry,
    "deskripsi" : string,

}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil menambahkan line",
    "id_line": "3",
    "nama_line": "Universitas Informatika Dan Bisnis Indonesia (UNIBI)",
    "geom": "107.650572 -6.942394, 107.650827 -6.942359",
    "deskripsi": "Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285"
}



```


### Update data line

```http
  UPDATE line/edit/:${id_line}
```

#### request Parames
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_line`    | `int`    | id dari line                     |


#### request body
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `nama_line`  | `string` | nama tempat line                 |
| `geom`        | `geometry` | lokasi atau geometry dari line                 |
| `deskripsi`        | `string` | deskripsi lokasi dari line                 |

#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "id_line": int,
    "nama_line" : string,
    "geom" : geometry,
    "deskripsi" : string,

}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil mengubah line",
    "id_line": "3",
    "nama_line": "Universitas Informatika Dan Bisnis Indonesia",
    "geom": "107.650572 -6.942394, 107.650827 -6.942359",
    "deskripsi": "Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285"
}


```


### Delete data line

```http
  DELETE line/delete/:${id_line}
```

#### request Parames
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_line`    | `int`    | id dari line                     |


#### response
```javascript
{
    "success" : bool,
    "message" : string,
}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil menghapus line"

}

```

### Get all Data polygon

```http
  GET /polygon
```
#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "data"    : object
}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil mengambil data polygon",
    "data": [
        {
            "id_polygon": "1",
            "nama_polygon": "Universitas Muhammadiyah Bandung",
            "geom": "POLYGON((107.708149 -6.936136,107.708535 -6.936082,107.708465 -6.936391,107.708138 -6.936289,107.708149 -6.936136))",
            "luas_area": "0.0000000833234999989304",
            "deskripsi": "Jl. Soekarno Hatta No.752, Cipadung Kidul, Kec. Panyileukan, Kota Bandung, Jawa Barat 40614"
        },
        {
            "id_polygon": "2",
            "nama_polygon": "Universitas Islam Nusantara",
            "geom": "POLYGON((107.643858 -6.944962,107.645093 -6.944638,107.644994 -6.946046,107.643816 -6.946173,107.643858 -6.944962))",
            "luas_area": "0.0000000833234999989304",
            "deskripsi": "Jl. Soekarno Hatta No.530, Sekejati, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286"
        },
        {
            "id_polygon": "3",
            "nama_polygon": "Universitas Informatika Dan Bisnis Indonesia (UNIBI)",
            "geom": "POLYGON((107.650837 -6.942393,107.650864 -6.941786,107.650515 -6.941754,107.650485 -6.94247,107.650837 -6.942393))",
            "luas_area": "0.000000231214499997489",
            "deskripsi": "Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285"
        }
    ]
}



```

### Add data polygon

```http
  POST /polygon/add
```

#### request body
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_polygon`    | `int`    | id dari polygon                     |
| `nama_polygon`  | `string` | nama tempat dari polygon                 |
| `geom`        | `geometry` | lokasi atau koordinat dari polygon                 |
| `deskripsi`        | `string` | deskripsi lokasi dari polygon                 |


#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "id_polygon": int,
    "nama_polygon" : string,
    "geom" : geometry,
    "deskripsi" : string,

}
```
#### example response
```javascript

{
    "success": true,
    "message": "Berhasil menambahkan polygon",
    "id_polygon": "3",
    "nama_polygon": "Universitas Informatika Dan Bisnis Indonesia (UNIBI)",
    "geom": "107.650837 -6.942393, 107.650864 -6.941786, 107.650515 -6.941754, 107.650485 -6.942470, 107.650837 -6.942393",
    "deskripsi": "Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285"
}

```

### Update data polygon

```http
  UPDATE polygon/edit/:${id_polygon}
```

#### request Parames
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_polygon`    | `int`    | id dari polygon                     |


#### request body
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `nama_polygon`  | `string` | nama tempat polygon                 |
| `geom`        | `geometry` | lokasi atau geometry dari polygon                 |
| `deskripsi`        | `string` | deskripsi lokasi dari polygon                 |

#### response
```javascript
{
    "success" : bool,
    "message" : string,
    "id_polygon": int,
    "nama_polygon" : string,
    "geom" : geometry,
    "deskripsi" : string,

}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil menambahkan polygon",
    "id_polygon": "3",
    "nama_polygon": "Universitas Informatika Dan Bisnis Indonesia",
    "geom": "107.650837 -6.942393,107.650864 -6.941786,107.650515 -6.941754,107.650485 -6.94247,107.650837 -6.942393",
    "deskripsi": "Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285"
}




```


### Delete data polygon

```http
  DELETE polygon/delete/:${id_polygon}
```

#### request Parames
| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `id_polygon`    | `int`    | id dari polygon                     |


#### response
```javascript
{
    "success" : bool,
    "message" : string,
}
```
#### example response
```javascript
{
    "success": true,
    "message": "Berhasil menghapus polygon"

}

```
## Tech Stack

**Server:** Node, Express

**Database:** postgresql, postgis
