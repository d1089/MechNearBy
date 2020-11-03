const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    phone: {
        type: String,
        maxlength: [20, 'Number can not be more than 20 digit']
    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'
        ]
    },
    address: {
        type :  String,
        required :  [true, 'Please add an address']  
    },
    location:  {
        //GeoJson [mongoose.js/docs/geojson for reference]
        type: {
            type:  String,
            enum:   ['Point'],
            required:  true
        },
        coordinates: {
            type: [Number],
            required:  true,
            index: '2dsphere'
        },
        formattedAddress:  String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be atleast 1'],
        max: [10, 'Rating can not be more than 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Shops', ShopSchema)


