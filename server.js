require('dotenv').config()
const adminRoutes=require('./routes/admin')
const userRoutes=require('./routes/user')
const busRoutes=require('./routes/bus')
const seatRoutes=require('./routes/seats')
const ticketRoutes=require('./routes/ticket_booking')
const authuserRoutes=require('./routes/auth_user')
const authadminRoutes=require('./routes/auth_admin')
const express=require('express')
const mongoose=require('mongoose')
//express app madu
const app=express()


app.use(express.json())


//request ge respond madbeku
//if you dont call it will not move to the middleware
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/admin',adminRoutes) 
app.use('/api/user',userRoutes) 
app.use('/api/bus',busRoutes)
app.use('/api/seats',seatRoutes)
app.use('/api/ticket',ticketRoutes)
app.use('/api/auth-user',authuserRoutes)
app.use('/api/auth-admin',authadminRoutes)
//if i fire the route api/workouts then use that handler workoutRoutes
//we have to listen to a specific port number


mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        console.log("connected to mongodb")
        //listen to the request once you create a database
        //request nan listen madbeku
        app.listen(process.env.PORT,()=>{
            console.log('listening on port '+process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })



