const mongoose = require('mongoose')
const slugify = require('slugify')

const RegionSchema = new mongoose.Schema({
    region: {
        type: String,
        enum: ['SEA', 'East Asia', "South Asia", "Central Asia"]
    },
    country: String,
    name: {
        type: String,
        required: [true, 'please add a name'],
        unique: true,
        trim: true,
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create slug from the name
RegionSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower:true})
    next()
})

module.exports = mongoose.model("Region", RegionSchema)