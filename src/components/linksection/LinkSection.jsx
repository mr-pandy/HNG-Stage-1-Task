import React from 'react'
import './linksection.css';
import { useState } from "react";

const LinkSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  return (
    <div className='link__section'>
      {
        links.map( (link) => (
          <a key={link.id} href={link.url} id={link.id} target="_blank" rel="noreferrer" >
            <button className={`${!isDesktop ? "btn_sm" : "btn_lg"}`}>
              {link.name}
            </button>
          </a>
        ))
      }
    </div>
  )
}

export default LinkSection;

const links = [
  {
    id: "twitter",
    name: "Twitter Link",
    url: "https://twitter.com/just_cruise_",
  },
  {
    id: "btn__zuri",
    name: "Zuri Team",
    url: "https://training.zuri.team/",
  },
  {
    id: "books",
    name: "Zuri Books",
    url: "https://books.zuri.team/",
  },
  {
    id: "book__python",
    name: "Python Books",
    url: "https://books.zuri.team/python-for-beginners?ref_id=utin-francis-peter",
  },
  {
    id: "pitch",
    name: "Background Check for Coders",
    url: "https://background.zuri.team/",
  },
  {
    id: "book__design",
    name: "Design Books",
    url: "https://books.zuri.team/design-rules",
  },
  {
    id: "contact",
    name: "Contact Us",
    url: "/contact"
  }
];