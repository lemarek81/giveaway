import React from 'react';
import './_article.scss';
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
    {
      title: 'Orgnaizacja "lorem ipsum 4"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 5"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 6"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 7"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 8"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 6"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 7"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
    {
      title: 'Orgnaizacja "lorem ipsum 8"',
      shortage: "Quic Varius quadam id diam vel quam elementru pulivinar",
      tags: "Egestat, sed, tempus",
    },
  ];

  return (
    <div className="articleSectionFundation">
      <span className="articleIntro">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at maximus purus. 
      Sed vitae maximus ex. In eget enim nec velit hendrerit dignissim. Quisque ut ultricies metus. 
      Cras auctor augue sed purus sodales lacinia. Aliquam ornare arcu sed elit ornare, eget blandit lectus bibendum. 
      Quisque lacinia gravida ipsum, vel pharetra velit varius ut. 
      </span>

      <ArticlePageCounter data={fundList} />
    </div>
  );
}

