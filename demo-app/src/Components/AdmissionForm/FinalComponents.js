import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import EducationBackground from './EducationBackground';
import Declaration from './Declaration';
import FormSummary from './FormSummary';

const FinalComponent = () => {
    const [step, setStep] = useState(0);
    const [personalInfo, setPersonalInfo] = useState({});
    const [educationInfo, setEducationInfo] = useState({});
    const [declarationInfo, setDeclarationInfo] = useState({});

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handlePersonalInfoSubmit = (info) => {
        setPersonalInfo(info);
        handleNextStep();
    };

    const handleEducationInfoSubmit = (info) => {
        setEducationInfo(info);
        handleNextStep();
    };

    const handleDeclarationSubmit = (info) => {
        setDeclarationInfo(info);
        handleNextStep();
    };

    switch (step) {
        case 0:
            return <PersonalInformation props={handlePersonalInfoSubmit}  personalInfo={personalInfo} />;
        case 1:
            return (
                <EducationBackground
                    props={handleEducationInfoSubmit}
                    onPrev={handlePrevStep}
                    educationInfo={educationInfo}
                />
            );
        case 2:
            return (
                <Declaration
                    Props={handleDeclarationSubmit}
                    onPrev={handlePrevStep}
        
                />
            );
        case 3:
            return <FormSummary personalInfo={personalInfo} educationInfo={educationInfo} declarationInfo={declarationInfo} data={handlePrevStep }  />;
            
        default:
            return null;
    }
};

export default FinalComponent;