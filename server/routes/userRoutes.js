const { Router } = require('express');
const {
    register,
    login,
    getUser,
    editUser,
    changeAvatar,
    getAuthors,
} = require('../controllers/user.controller'); // Import controller functions

const router = Router();

// Default route for users
router.get('/', (req, res) => {
    res.json("This is the user route");
});

// Other user routes
router.post('/register', register);          // POST request to register a user
router.post('/login', login);                // POST request to log in a user
router.get('/:id', getUser);                 // GET request to get user details by ID
router.put('/change-avatar/', changeAvatar); // PUT request to change user avatar
router.patch('/edit-user', editUser);       // PATCH request to edit user details
router.get('/authors', getAuthors);         // GET request to fetch authors list

module.exports = router; // Export the router
