import React from "react";

import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";

const portText = [
  {
    num: "01",
    title: "포트폴리오",
    desc: "설명",
    img: port01,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "02",
    title: "포트폴리오",
    desc: "설명",
    img: port02,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "03",
    title: "포트폴리오",
    desc: "설명",
    img: port03,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "04",
    title: "포트폴리오",
    desc: "설명",
    img: port04,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "05",
    title: "포트폴리오",
    desc: "설명",
    img: port05,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "06",
    title: "포트폴리오",
    desc: "설명",
    img: port06,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "07",
    title: "포트폴리오",
    desc: "설명",
    img: port07,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "08",
    title: "포트폴리오",
    desc: "설명",
    img: port08,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "09",
    title: "포트폴리오",
    desc: "설명",
    img: port09,
    code: "",
    view: "",
    name: "",
  },
  {
    num: "10",
    title: "포트폴리오",
    desc: "설명",
    img: port10,
    code: "",
    view: "",
    name: "",
  }
];

const Port = () => {
  return (
    <section id="port">
      <div className="port__inner">
        <div className="port__title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article className={`port__item p${key + 1}`} key={key}>
              <span className="num">{port.num}.</span>
              <a href={port.code} target="_blank" className="img" rel="noreferrer">
                <img src={port.img} alt={port.name} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port