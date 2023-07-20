import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import EducationalBackground from './EducationalBackground';
import Declaration from './Decleration';
import FormSummary from './FormSummary';

const FinalComponent = () => {
    const [step, setStep] = useState(0);
   
    const [personaldetails, setpersonaldetails] = useState({});
    const [EducationBackground, setEducationBackground] = useState({});
    const [declarationInfo, setDeclarationInfo] = useState({});

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handlePersonalInfoSubmit = (info) => {
        setpersonaldetails(info);
        handleNextStep();
    };

    const handleEducationInfoSubmit = (info) => {
        setEducationBackground(info);
        handleNextStep();
    };

    const handleDeclarationSubmit = (info) => {
        setDeclarationInfo(info);
        handleNextStep();
    };

    switch (step) {
        case 0:
            return <PersonalInformation Props={handlePersonalInfoSubmit} Data={personaldetails} />;
        case 1:
            return (
                <EducationalBackground
                    Props={handleEducationInfoSubmit}
                    Prev={handlePrevStep}
                    Data={EducationBackground}
                />
            );
        case 2:
            return (
                <Declaration
                    Props={handleDeclarationSubmit}
                    Prev={handlePrevStep}
                    Data={declarationInfo}
                />
            );
        case 3:
            return <FormSummary personalInfo={personaldetails} educationInfo={EducationBackground} declarationInfo={declarationInfo} />;
        default:
            return null;
    }
};

export default FinalComponent;