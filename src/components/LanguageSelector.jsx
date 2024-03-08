import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="menu-list">
      {languages.map(([lang, version]) => (
        <button
          key={lang}
          className={`menu-item ${lang === language ? "active" : ""}`}
          onClick={() => onSelect(lang)}
        >
          {lang}
          &nbsp;
          <span>({version})</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
