const mongoose = require('mongoose');
//schema
const IssueSchema = mongoose.Schema({
    symptom: {
        type: String,
        required: true
    },
    workaround: {
        type: String,
        required: true
    },
    technicalNotes: {
        type: String,
    },
    poc: {
        type: String,
        required: true
    },
    nextUpdate: {
        type: String,
    },
    resolutionETA: {
        type: String,
    },
    additionalInfo: {
        type: String,
    },
    tags: {
        type: String,
    },
    comments: {
        type: String,
    },
    dateCreated: {
        type: Date,
    }
});

module.exports = mongoose.model('Issues', IssueSchema);