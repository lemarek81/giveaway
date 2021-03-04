import React from "react";
import "./_article.scss";
import ArticlePageCounter from './_articlePageCounter';

export default function Article() {
  const fundList = [
    {
      title: 'Orgnaizacja "lorem ipsum 1"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 2"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 3"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
   
  ];

  return (
    <div className="articleSectionFundation">
      <span className="articleIntro">
      Morbi ut faucibus nunc. Pellentesque quis rutrum turpis. 
      Duis quis ante sit amet dui rhoncus mattis. Etiam ac mi neque. 
      Curabitur eu lectus quis ipsum euismod egestas. 
      Morbi vitae nunc in turpis tempor finibus et et purus. 
      Ut metus leo, accumsan et porttitor ac, pharetra a sem. Vivamus malesuada non magna ac interdum. 
      Sed velit lectus, placerat ac posuere sed, hendrerit eget magna. 
      Proin elit mi, finibus non maximus vitae, bibendum id lorem. 
      Aliquam vitae dapibus arcu. 
      </span>

      <ArticlePageCounter data={fundList} />
    </div>
  );
}
