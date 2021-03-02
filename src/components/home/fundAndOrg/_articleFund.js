import React from "react";
import Paginator from "./Paginator";
import "./_article.scss";

export default function _article() {
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
  ];

  return (
    <div className="articleSectionFundation">
      <span className="articleIntro">
        W naszej bazie znajdziesz liste zweryfikowanych fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </span>

      <Paginator data={fundList} />
    </div>
  );
}
