document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('survey-form');
    const resultContainer = document.getElementById('result');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const surveyData = {};
        for (const [key, value] of formData.entries()) {
            surveyData[key] = value;
        }

        try {
            const response = await fetch('http://localhost:8080/submit-survey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(surveyData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit survey');
            }

            const data = await response.json();
            resultContainer.textContent = `Survey submitted successfully\n\nTotal Surveys: ${data.totalSurveys}\nTotal Pet Owners: ${data.totalPetOwners}\nAverage Number of Pets: ${data.averageNumberOfPets}\nMost Common Pet Type: ${data.mostCommonPetType}\nAdoption Percentage: ${data.adoptionPercentage}%`;
        } catch (error) {
            console.error(error.message);
            resultContainer.textContent = 'Failed to submit survey. Please try again.';
        }
    });
});
