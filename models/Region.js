const mongoose = require('mongoose')

const RegionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name'],
        trim: true,
        maxlength: [50, "name cannot be more than 50 characters"]
    },
    slug: String,
    unescoListProgress: Array,
    unescoSiteUrl: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Region", RegionSchema)