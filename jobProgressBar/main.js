class progressBar {
    constructor(percentage, completeLine, percentLabel) {
        this.percentage = percentage;
        this.completeLine = completeLine;
        this.percentLabel = percentLabel;
    }

    updateProgressLabel() {
        this.completeLine.style.width = `${this.percentage}%`
        if(this.percentage == 100) {
            this.percentLabel.style.marginRight = 0;
        } else {
            this.percentLabel.style.marginRight = '';
        }
        this.percentLabel.innerHTML = `${this.percentage}%`;
    }
    
    getProgress() {
        return this.percentage;
    }
    
    setProgress(value) {
        this.percentage = value;
        this.updateProgressLabel();
    }
    
    addProgress(value) {
        if(this.percentage + value <= 100)
            this.setProgress(this.percentage + value);
        else
            this.setProgress(100);
    }
    
    subtractProgress(value) {
        if(this.percentage - value >= 0)
            this.setProgress(this.percentage - value);
        else
            this.setProgress(0);
    }
}

const validationClasses = { 
    valid: 'field-complete',
    error: 'field-error'
};

let validFields = {
    totalFields: 0,
    step: 0,
    get getProgress() {
        if(this.totalValid !== 0)
            return (this.totalValid / this.totalFields) * 100;
        else
            return 0;
    },
    get totalValid() {
        return document.querySelectorAll(`.${validationClasses.valid}`).length;
    }
};

function validateEmail(email) {
    var re = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;
    return re.test(email);
}

function validateUniversity(str) {
    return str.length >= 2 && str.length <= 32;
}

const completeLine = document.querySelector('.complete-line'),
      percentLabel = document.querySelector('.check-mark'),
      progress = new progressBar(0, completeLine, percentLabel);

const selectBoxes = document.querySelectorAll('select'),
      textBoxes = document.querySelectorAll('input');

validFields.totalFields = document.querySelectorAll('input, select').length;

Array.from(selectBoxes).forEach(dropdown => {
    dropdown.addEventListener('change', function(event) {
        let fieldValue = event.target.value;
        if(fieldValue !== '') {
            dropdown.classList.remove(validationClasses.error);
            dropdown.classList.add(validationClasses.valid);
        } else {
            dropdown.classList.remove(validationClasses.valid);
            dropdown.classList.add(validationClasses.error);
        }
        progress.setProgress(validFields.getProgress);
    });
});

let emailField = document.querySelector('#email');

emailField.addEventListener('keyup', (event) => {
    let fieldValue = event.target.value;

    if(validateEmail(fieldValue)) {
        emailField.classList.remove(validationClasses.error);
        emailField.classList.add(validationClasses.valid);
    } else {
        emailField.classList.remove(validationClasses.valid);
        emailField.classList.add(validationClasses.error);
    }
    progress.setProgress(validFields.getProgress);
});

let universityField = document.querySelector('#university');

universityField.addEventListener('keyup', (event) => {
    let fieldValue = event.target.value;

    if(validateUniversity(fieldValue)) {
        universityField.classList.remove(validationClasses.error);
        universityField.classList.add(validationClasses.valid);
    } else {
        universityField.classList.remove(validationClasses.valid);
        universityField.classList.add(validationClasses.error);
    }
    progress.setProgress(validFields.getProgress);
});
