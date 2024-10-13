const express = require('express');
const router = express.Router();
const { getUsersBySubcategory, refundDeposit } = require('../controllers/refunddepositcontroller/depositController');

// Get all users who paid a deposit for a subcategory
router.get('/subcategory/:subcategoryId/users', getUsersBySubcategory);

// Refund all or individual users
router.post('/subcategory/:subcategoryId/refund/:userId?', refundDeposit);

module.exports = router;
