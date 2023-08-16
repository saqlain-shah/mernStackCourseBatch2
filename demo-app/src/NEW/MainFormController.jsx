import React from 'react';
import PersonalInformation from './PersonalInformation';
import OtherFieldsComponent from './OtherFieldsComponent'; // Assuming you've created this component

const MainFormController = (props) => {
    const { control } = props;

    switch (control) {
        case 'input':
            return <PersonalInformation />;
            case 'select':
                return <OtherFieldsComponent />;
        case 'radio':
        case 'textarea':
       
        default:
            return null; // Handle default case or return an error message
    }
};

export default MainFormController;

