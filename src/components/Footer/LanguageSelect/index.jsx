import { Dropdown } from 'react-bootstrap';
import { Languages } from '@/constants';
import React, { useEffect, useState } from 'react';
import i18n from '@/i18n';

function LanguageSelect() {
  const localLanguage = localStorage.getItem('language');
  const [languageKey, setLanguageKey] = useState(localLanguage);

  const handleSelectLanguage = (eventKey) => {
    localStorage.setItem('language', eventKey);
    setLanguageKey(eventKey);
    i18n.changeLanguage(eventKey);
  };

  useEffect(() => {
    if (!localLanguage) {
      handleSelectLanguage(i18n.language);
    }
  }, []);

  return (
    <Dropdown onSelect={handleSelectLanguage}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {Languages[languageKey] || Languages.en}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.entries(Languages).map(([key, name]) => (
          <Dropdown.Item eventKey={key}>{name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelect;
