import {
  getAllBotellas,
  getBotellaById,
  getBotellasByCatalogo,
  getAllCatalogos,
  insertBotella,
  updateBotella,
  deleteBotella
} from '../models/model.js';

// GET todas las botellas
export const getAll = async (req, res) => {
  try {
    const data = await getAllBotellas();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET botella por ID  
export const getById = async (req, res) => {
  try {
    const botella = await getBotellaById(req.params.id);
    if (!botella) {
      return res.status(404).json({ error: 'Botella no encontrada' });
    }
    res.json(botella);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET botellas por catálogo  
export const getByCatalogo = async (req, res) => {
  try {
    const data = await getBotellasByCatalogo(req.params.catalogo_id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET todos los catálogos 
export const getCatalogos = async (req, res) => {
  try {
    const data = await getAllCatalogos();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST crear botella
export const create = async (req, res) => {
  try {
    const result = await insertBotella(req.body);
    res.status(201).json({ mensaje: 'Botella creada exitosamente', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT actualizar botella
export const update = async (req, res) => {
  try {
    const result = await updateBotella(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Botella no encontrada' });
    res.json({ mensaje: 'Botella actualizada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE eliminar botella
export const remove = async (req, res) => {
  try {
    const result = await deleteBotella(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Botella no encontrada' });
    res.json({ mensaje: 'Botella eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};