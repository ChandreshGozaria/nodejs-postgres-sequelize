const express = require('express');
const userRoutes = require('../routes/users');
const placeRoutes = require('../routes/places');
const serviceRoutes = require('../routes/service');
const appointmentRoutes = require('../routes/appointments');
const reviewRoutes = require('../routes/reviews');

const server = express();
server.use(express.json());

server.use('/api/users', userRoutes);
server.use('/api/places', placeRoutes);
server.use('/api/services', serviceRoutes);
server.use('/api/appointments', appointmentRoutes);
server.use('/api/reviews', reviewRoutes);

module.exports = server;