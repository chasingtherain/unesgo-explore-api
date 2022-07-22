const mongoose = require('mongoose')
const slugify = require('slugify')

const CountrySchema = new mongoose.Schema({
    admin_region: String,
    name: {
        type: String,
        required: [true, 'please add a name'],
        trim: true,
    },
    slug: String,
    site_id: Number,
    unescoSiteUrl: String,
    country: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create slug from the name
CountrySchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower:true})
    next()
})

module.exports = mongoose.model("Country", CountrySchema)