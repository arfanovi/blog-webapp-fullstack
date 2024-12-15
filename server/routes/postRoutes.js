const { Router } = require('express');
const router = Router();

// Define the '/posts' route
router.get('/', (req, res) => {
    res.json({ message: "This is the posts route" });
});

module.exports = router; // Export the router
