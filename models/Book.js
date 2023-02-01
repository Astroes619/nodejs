const { Schema , default : mongoose } = require ("mongoose")

const BookSchema = new Schema({


    Name: {

        type : String,
        required : true
    },
    CheckinDate: {
        type : Date,
        required : true

    },
    CheckoutDate: {

        type : Date,
        required : true
    },
    

   


})


module.exports =  mongoose.model("Book",BookSchema,"book");