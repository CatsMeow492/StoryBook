// Top level routes

const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google

router.get('/google', passport.authenticate('google', {scope: 'profile'}))

// @desc    Google Auth Callback
// @route   GET /auth/google/callback

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
 (_req, res) => { 
     res.redirect('/dashboard')
    }
)
/*
// @desc    Auth with Apple
// @route   GET /auth/apple

router.get('/apple', passport.authenticate('apple', {scope: 'profile'}))
*/


module.exports = router;