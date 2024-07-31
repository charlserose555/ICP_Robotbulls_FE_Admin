import React, { useState, useMemo, useEffect } from "react";

// create context
export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('FR');

  // function changeLanguage(language) {
  //   setLanguage(language)
  // }

  const value = useMemo(
    () => ({
      language,
      changeLanguage
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};
