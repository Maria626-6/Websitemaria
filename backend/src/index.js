const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const messageRoutes = require('./routes/messages');
const { initialize } = require('./config/database');

dotenv.config({ path: path.join(__dirname, '../../.env') });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.set('trust proxy', 1);

app.use(cors());
app.use(express.json());

app.use('/api/messages', messageRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error initializing database:', err);
        process.exit(1);
    });
