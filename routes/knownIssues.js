const router = require('express').Router();
const Issue = require('../Models/Issue');


//fetch all known issues in the database
router.get('/', async (req,res)=>{
    try{
        const allKnownIssues = await Issue.find();
        res.json(allKnownIssues);
    }catch(error){
        res.status(400).send('An error has occurred....')
    }
});

//fetch a specific known issue

router.get('/:issueId', async (req, res) => {
    try{
        const knownIssue = await Issue.findById(req.params.issueId);
        res.json(knownIssue);
    }catch(error){
        res.status(400).send('KI not found!');
    }
});

//POST REQUESTS

//submits a new single known issue
router.post('/', async (req, res)=>{

        const knownIssue = new Issue({
            symptom: req.body.symptom,
            workaround: req.body.workaround,
            technicalNotes: req.body.technicalNotes,
            poc: req.body.poc,
            nextUpdate: req.body.nextUpdate,
            resolutionETA: req.body.resolutionETA,
            tags: req.body.tags,
            dateCreated: Date.now,
        });
        try{
            const savedKnownIssue = await knownIssue.save();
            res.json('New KI has been created..');
        }catch(error){
            res.status(400).send(error);
        }
});

//DELETE REQUESTS

//delete a specific KI
router.delete('/:issueId', async (req, res) => {
    try{
        const deletedKnownIssue = await Issue.remove({ _id: req.params.issueId});
        res.json(`KI has been deleted.`);
    }catch(error){
        res.status(400).send('Ooops, could not delete KI!')
    }
});

//UPDATE REQUESTS

router.patch('/:issueId', async (req, res) => {
    try{
        const updatedKnownIssue = await Issue.updateOne(
            { _id: req.params.issueId}, 
            { $set: { 
                symptom: req.params.symptom,
                workaround: req.params.workaround,
                technicalNotes: req.params.technicalNotes,
                poc: req.params.poc,
                nextUpdate: req.params.nextUpdate,
                resolutionETA: req.params.resolutionETA,
                tags: req.params.tags,
                lastUpdated: Date.now 
            }});
            res.json(updatedKnownIssue);
    }catch(error){
        res.status(400).send('Update has failed..')
    }
});
module.exports = router;
