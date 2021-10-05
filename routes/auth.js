// Top level routes

const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] } ))


// @desc    Google Auth Callback
// @route   GET /auth/google/callback

router.get(
    '/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
 (req, res) => { 
     res.redirect('/dashboard')
    }
)

// @desc    Logout User
// @route   /auth/logout
router.get('/logout', (req, res) => {
    res.logout()
    res.redirect('/')
})
/*
// @desc    Auth with Apple
// @route   GET /auth/apple

router.get('/apple', passport.authenticate('apple', {scope: 'profile'}))
*/


module.exports = router;