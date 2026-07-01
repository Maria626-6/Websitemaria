const Message = require('../models/message');
const { validationResult } = require('express-validator');
const { sendMessageNotification } = require('../services/emailService');

exports.sendMessage = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, phone_number, message } = req.body;
        
        const newMessage = await Message.create({
            name,
            email,
            phone_number,
            message,
            ip_address: req.ip,
            user_agent: req.headers['user-agent']
        });
        try {
            await sendMessageNotification({ name, email, phone_number, message });
        } catch (emailError) {
            console.error('Error sending email notification:', emailError);
        }

        res.status(201).json({
            success: true,
            message: 'Message sent properly',
            data: { id: newMessage.id }
        });
    } catch (error) {
        console.error('Error saving the message:', error);
        res.status(500).json({
            success: false,
            message: 'Error sending the message'
        });
    }
};

exports.obtainMessage = async (req, res) => {
    try {
        const message = await Message.findAll();
        res.json({ success: true, data: message });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching' });
    }
};

exports.markAsRead = async (req, res) => {
    try {
        const message = await Message.markAsRead(req.params.id);
        res.json({ success: true, data: message });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error when mark as read' });
    }
};