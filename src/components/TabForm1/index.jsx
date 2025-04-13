import React, { useState } from 'react';
import AccountPreference from './AccountPreference';
import Address from './Address';
import Personal from './Personal';
import './tabForm1.css';


const Form = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const tabList = [
        {
            name: "Personal Details",
            component: Personal
        },
        {
            name: "Address",
            component: Address
        },
        {
            name: "Account Preference",
            component: AccountPreference 
        },
    ]

    const CurrentComponent = tabList[currentStep].component;
  

    return(
        <div>
            {tabList?.map(({name}) => (<p>{name}</p>))}
            <div>
                <CurrentComponent  setCurrentStep={setCurrentStep}  />
            </div>
        </div>
    )
}

export default Form