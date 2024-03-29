const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter=require('./controllers/blogs')
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

mongoose.connect(config.MONGODB_URI)
    .then(result => {
        console.log("connected")
    })
    .catch(result => {
        console.log("failed to connect")
    })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use('/api/blogs',blogsRouter)

module.exports=app