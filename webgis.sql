
-- Extension: postgis

-- DROP EXTENSION postgis;

CREATE EXTENSION IF NOT EXISTS postgis
    SCHEMA public
    VERSION "3.4.0";



-- Create the 'point' schema and table
CREATE SCHEMA point AUTHORIZATION postgres;
CREATE TABLE point.point (
  id_point int8 NOT NULL,
  nama_point varchar(255) NULL,
  geom public.geometry NULL,
  CONSTRAINT point_pkey PRIMARY KEY (id_point)
);

-- Create the 'line' schema and table
CREATE SCHEMA line AUTHORIZATION postgres;
CREATE TABLE line.line (
  id_line int8 NOT NULL,
  nama_line varchar(255) NULL,
  geom public.geometry NULL,
  panjang_garis numeric NULL,
  deskripsi varchar(255) NULL,
  CONSTRAINT "Line_pkey" PRIMARY KEY (id_line)
);

-- Create the 'polygon' schema and table
CREATE SCHEMA polygon AUTHORIZATION postgres;
CREATE TABLE polygon.polygon (
  id_polygon int8 NOT NULL,
  nama_polygon varchar(255) NULL,
  geom public.geometry NULL,
  luas_area numeric NULL,
  deskripsi varchar(255) NULL,
  CONSTRAINT "Polygon_pkey" PRIMARY KEY (id_polygon)
);

-- Insert data into the 'polygon' table
INSERT INTO polygon.polygon (id_polygon, nama_polygon, geom, luas_area, deskripsi) VALUES
  (1, 'Universitas Muhammadiyah Bandung', 'SRID=4326;POLYGON ((107.708149 -6.936136, 107.708535 -6.936082, 107.708465 -6.936391, 107.708138 -6.936289, 107.708149 -6.936136))', 0.0000000833234999989304, 'Jl. Soekarno Hatta No.752, Cipadung Kidul, Kec. Panyileukan, Kota Bandung, Jawa Barat 40614'),
  (2, 'Universitas Islam Nusantara', 'SRID=4326;POLYGON ((107.643858 -6.944962, 107.645093 -6.944638, 107.644994 -6.946046, 107.643816 -6.946173, 107.643858 -6.944962))', 0.0000000833234999989304, 'Jl. Soekarno Hatta No.530, Sekejati, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286'),
  (3, 'Universitas Informatika Dan Bisnis Indonesia (UNIBI)', 'SRID=4326;POLYGON ((107.650837 -6.942393, 107.650864 -6.941786, 107.650515 -6.941754, 107.650485 -6.94247, 107.650837 -6.942393))', 0.000000231214499997489, 'Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285');

-- Insert data into the 'point' table
INSERT INTO point.point (id_point, nama_point, geom) VALUES
  (1, 'Universitas Muhammadiyyah', 'SRID=3857;POINT (107.708394 -6.936111)'),
  (2, 'Universitas Islam Nusantara', 'SRID=3857;POINT (107.643882 -6.945492)'),
  (3, 'Universitas Informatika Dan Bisnis Indonesia (UNIBI)', 'SRID=3857;POINT (107.650503 -6.942229)');


INSERT INTO line.line (id_line,nama_line,geom,panjang_garis,deskripsi) VALUES
	 (1,'Universitas Muhammadiyah Bandung','SRID=3857;LINESTRING (107.708394 -6.936111, 107.708546 -6.936154)',0.000157965186037813,'Jl. Soekarno Hatta No.752, Cipadung Kidul, Kec. Panyileukan, Kota Bandung, Jawa Barat 40614'),
	 (2,'Universitas Islam Nusantara','SRID=3857;LINESTRING (107.643831 -6.944966, 107.645005 -6.94461)',0.00122678930545581,'Jl. Soekarno Hatta No.530, Sekejati, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286'),
	 (3,'Universitas Informatika Dan Bisnis Indonesia (UNIBI)','SRID=3857;LINESTRING (107.650572 -6.942394, 107.650827 -6.942359)',0.000257390753534531,'Jl. Soekarno Hatta No.643, Sukapura, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40285');

