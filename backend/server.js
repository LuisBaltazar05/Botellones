import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import botellaRoutes from './src/routes/routes.js';
import catalogoRoutes from './src/routes/catalogoroutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/botellas', botellaRoutes);
app.use('/api/catalogos', catalogoRoutes);

// Ruta raíz para verificar que el servidor vive
app.get('/', (req, res) => {
  res.json({ mensaje: 'API Botellas funcionando correctamente' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});