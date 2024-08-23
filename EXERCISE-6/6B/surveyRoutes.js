const express = require('express');
const router = express.Router();
const Survey = require('../models/surveyModel');

router.post('/submit-survey', async (req, res) => {
    try {
        const surveyData = req.body;
        const survey = new Survey(surveyData);
        await survey.save();

        // Get overall result of the survey
        const totalSurveys = await Survey.countDocuments();
        const totalPetOwners = await Survey.countDocuments({ ownsPets: true });

        // Calculate additional summary statistics
        const totalPets = await Survey.aggregate([
            { $match: { ownsPets: true } },
            { $group: { _id: null, total: { $sum: '$numberOfPets' } } }
        ]);

        const petTypesCount = await Survey.aggregate([
            { $unwind: '$petTypes' },
            { $group: { _id: '$petTypes', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 1 }
        ]);

        const totalAdoptions = await Survey.countDocuments({ acquisitionMethods: 'adopted' });

        const adoptionPercentage = totalSurveys ? (totalAdoptions / totalSurveys) * 100 : 0;

        res.json({ 
            message: 'Survey submitted successfully',
            totalSurveys: totalSurveys,
            totalPetOwners: totalPetOwners,
            averageNumberOfPets: totalPetOwners ? totalPets[0].total / totalPetOwners : 0,
            mostCommonPetType: petTypesCount.length ? petTypesCount[0]._id : 'None',
            adoptionPercentage: adoptionPercentage
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to submit survey' });
    }
});

module.exports = router;
