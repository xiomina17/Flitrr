//1- Import mongoose.
const mongoose = require('mongoose');
const DB ='Flitrr_db'

//2. Connect to the database,

module.exports = (DB) => {
    mongoose.connect('mongodb+srv://flitrr:Ninfadora2903!@cluster0.zc34c.mongodb.net/?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => console.log('🍃🍃🍃🍃🍃🍃🍃🍃🍃Established a connection to the ${DB} db 🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃🍃'))
.catch(err => console.log('Something went wrong when connecting to the database ', err));
}