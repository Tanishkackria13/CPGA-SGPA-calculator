const gradeMapping = {
    'A+': 10,
    'A': 9,
    'B+': 8,
    'B': 7,
    'C+': 6,
    'C': 5,
    'D': 4,
    'F': 0,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
};

function getNumericGrade(letterGrade) {
    return gradeMapping[letterGrade.toUpperCase()] || alert("enter either grade between 4-10 or in (A+,A,B+ etc.)format");
}

function addSGPAInput() {
    const sgpaInputs = document.getElementById('sgpaInputs');

    const newInputDiv = document.createElement('div');
    newInputDiv.className = 'flex space-x-4';

    const newGradeInput = document.createElement('input');
    newGradeInput.type = 'text';
    newGradeInput.className = 'sg_grade w-full p-2 mb-2 border rounded';
    newGradeInput.placeholder = 'Grade of subject (e.g., A+)';

    const newCreditInput = document.createElement('input');
    newCreditInput.type = 'number';
    newCreditInput.className = 'sg_credit w-full p-2 mb-2 border rounded';
    newCreditInput.placeholder = 'Credit of subject';

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-button bg-red-500 text-white p-2 rounded';
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        newInputDiv.remove();
    };

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex items-center';
    buttonContainer.appendChild(removeButton);

    newInputDiv.appendChild(newGradeInput);
    newInputDiv.appendChild(newCreditInput);
    newInputDiv.appendChild(buttonContainer);

    sgpaInputs.appendChild(newInputDiv);
}

function calculateSGPA() {
    const gradeInputs = document.querySelectorAll('.sg_grade');
    const creditInputs = document.querySelectorAll('.sg_credit');

    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < gradeInputs.length; i++) {
        const grade = getNumericGrade(gradeInputs[i].value);
        const credit = parseFloat(creditInputs[i].value);

        if (!isNaN(grade) && !isNaN(credit)) {
            totalGradePoints += grade * credit;
            totalCredits += credit;
        }
    }

    const sgpa = totalGradePoints / totalCredits;
    document.getElementById('sgpaResult').textContent = 'Your SGPA is: ' + sgpa.toFixed(2);
}

function calculateCGPA() {
    const prevCGPA = parseFloat(document.getElementById('prev_cgpa').value);
    const prevCredits = parseFloat(document.getElementById('prev_credits').value);
    const currSGPA = parseFloat(document.getElementById('curr_sgpa').value);
    const currCredits = parseFloat(document.getElementById('curr_credits').value);

    const totalGradePoints = (prevCGPA * prevCredits) + (currSGPA * currCredits);
    const totalCredits = prevCredits + currCredits;

    const cgpa = totalGradePoints / totalCredits;
    document.getElementById('cgpaResult').textContent = 'Your CGPA is: ' + cgpa.toFixed(2);
}
