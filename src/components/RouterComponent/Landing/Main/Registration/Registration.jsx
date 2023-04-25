import style from './Registration.module.scss';
import { useState } from 'react';
import FullNameForm from './FullNameForm';
import ContactsForm from './ContactsForm';
import AccountCreationForm from './AccountCreationForm';
import RegistrationSuccess from './RegistrationSuccess';
import RegistrationTabs from './RegistrationTabs';

export const Registration = () => {
  const [activeTab, setActiveTab] = useState({
    firstTab: true,
    secondTab: false,
    thirdTab: false,
  });

  const [isTabValid, setIsTabValid] = useState({
    firstTabValid: false,
    secondTabIsValid: false,
    thirdTabIsValid: false,
  });

  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    patronymic: '',
    phoneNumber: '',
    eMail: '',
    login: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      const regex = /[^0-9|+]/g;
      const phoneValue = value.replace(regex, '');

      return setFormValues({ ...formValues, phoneNumber: phoneValue });
    }

    setFormValues({ ...formValues, [name]: value });
  };

  const fullNameFormSubmit = () => {
    setIsTabValid({ ...isTabValid, firstTabValid: true });

    setActiveTab(() => ({
      firstTab: false,
      secondTab: true,
      thirdTab: false,
    }));
  };

  const contactsFormSubmit = () => {
    setIsTabValid({ ...isTabValid, secondTabIsValid: true });

    setActiveTab(() => ({
      firstTab: false,
      secondTab: false,
      thirdTab: true,
    }));
  };

  const accountCreationFormSubmit = () => {
    setIsTabValid({ ...isTabValid, thirdTabIsValid: true });
  };

  const switchActiveTab = (tab) => {
    const copyActiveTabObj = { ...activeTab };

    Object.keys(copyActiveTabObj).forEach((item) => {
      item === tab ?
        (copyActiveTabObj[tab] = true) :
        (copyActiveTabObj[item] = false);
    });

    setActiveTab(() => copyActiveTabObj);
  };

  return (
    <section className={style.registrationSection} id='registration'>
      <div className={style.registrationWrapper}>
        <h2 className={style.registrationTitle}>
          Как зарегистрироваться на платформе
        </h2>
        {isTabValid.firstTabValid &
        isTabValid.secondTabIsValid &
        isTabValid.thirdTabIsValid ? (
          <RegistrationSuccess />
        ) : (
          <>
            <p className={style.registrationText}>
              Пошагово заполните все поля формы
            </p>
            <div className={style.registrationFormUnderlay}>
              <div className={style.registarionFormWrapper}>
                <RegistrationTabs
                  switchActiveTab={switchActiveTab}
                  activeTab={activeTab}
                  isTabValid={isTabValid}
                />
                {activeTab.firstTab && (
                  <FullNameForm
                    fullNameFormSubmit={fullNameFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                  />
                )}
                {activeTab.secondTab && (
                  <ContactsForm
                    contactsFormSubmit={contactsFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                  />
                )}
                {activeTab.thirdTab && (
                  <AccountCreationForm
                    accountCreationFormSubmit={accountCreationFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
