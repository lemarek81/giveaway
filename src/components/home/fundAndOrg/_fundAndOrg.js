import React, { useState } from 'react';
import './_fundAndOrg.scss';
import Decoration from '../../../../src/assets/Decoration.svg'
import ArticleFund from './_articleFund';
import ArticleOrg from './_articleOrg';
import ArticleCollect from './_articleCollect';

export default function FundAndOrg() {
  const [currentmode, setCurrentMode] = useState("fund"); 

  const getArticleMode = () => {
    switch (currentmode) {
      case "fund":
        return <ArticleFund />;
      case "org":
        return <ArticleOrg />;
      case "collect":
        return <ArticleCollect />;
      default:
        return null;
    }
  };

  return (
    <div className="fundAndOrgSection" id="fundAndOrg">
      <div className="fundAndOrgMainSection">
        <h1>Komu pomagamy</h1>
        <img src={Decoration}></img>
        <div className="buttonWrapper">
          <button
            className="buttonMedium"
            onClick={() => setCurrentMode("fund")}
          >
            Fundacjom
          </button>
          <button
            className="buttonMedium"
            onClick={() => setCurrentMode("org")}
          >
            Organizacjom pozarządowym
          </button>
          <button
            className="buttonMedium"
            onClick={() => setCurrentMode("collect")}
          >
            Lokalnym zbiórkom
          </button>
        </div>
        {getArticleMode()}
      </div>
    </div>
  );
}
