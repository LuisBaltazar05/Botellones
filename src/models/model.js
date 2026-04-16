import pool from '../config/db.js';

// Obtener todas las botellas con su catalogo
export const getAllBotellas = async () => {
  const [rows] = await pool.query(`
    SELECT b.id, b.nombre, b.descripcion, b.precio, 
           b.capacidad_ml, b.imagen_url, c.nombre AS catalogo
    FROM botellas b
    JOIN catalogos c ON b.catalogo_id = c.id
  `);
  return rows;
};

// Obtener una botella por id
export const getBotellaById = async (id) => {
  const [rows] = await pool.query(`
    SELECT b.id, b.nombre, b.descripcion, b.precio, 
           b.capacidad_ml, b.imagen_url, c.nombre AS catalogo
    FROM botellas b
    JOIN catalogos c ON b.catalogo_id = c.id
    WHERE b.id = ?
  `, [id]);
  return rows[0];
};

// Obtener botellas por catalogo
export const getBotellasByCatalogo = async (catalogo_id) => {
  const [rows] = await pool.query(`
    SELECT b.id, b.nombre, b.descripcion, b.precio, 
           b.capacidad_ml, b.imagen_url, c.nombre AS catalogo
    FROM botellas b
    JOIN catalogos c ON b.catalogo_id = c.id
    WHERE b.catalogo_id = ?
  `, [catalogo_id]);
  return rows;
};

// Obtener todos los catalogos
export const getAllCatalogos = async () => {
  const [rows] = await pool.query('SELECT * FROM catalogos');
  return rows;
};

// Insertar una botella nueva
export const insertBotella = async (botella) => {
  const { nombre, descripcion, precio, capacidad_ml, imagen_url, catalogo_id } = botella;
  const [result] = await pool.query(
    `INSERT INTO botellas 
     (nombre, descripcion, precio, capacidad_ml, imagen_url, catalogo_id) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [nombre, descripcion, precio, capacidad_ml, imagen_url, catalogo_id]
  );
  return result;
};