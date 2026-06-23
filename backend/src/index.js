const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const messageRoutes = require('./routes/messages');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.set('trust proxy', 1);

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/messages', messageRoutes);

// Ruta de salud (para verificar que el backend está vivo)
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});