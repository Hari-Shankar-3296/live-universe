import React from "react";
import "./MagicText.css";

export default function MagicText({
  text = "Love is Game wanna Play",
  splitWords = 2,
  Tag = "h1",
  prefix = "",
  suffix = ""
}) {
  //   function setInnerHtml(data) {
  //     return {
  //       __html: data
  //     };
  //   }

  function magictextMaker() {
    let divideBySpace = text.split(" ");
    let wordsArr = divideBySpace.map((eachWord, i) => {
      let className = "";
      if (i % splitWords === 0) {
        className = "sp-uc-span";
      }
      let appender = eachWord.split("").map(eachLetter => {
        return <span className={className}>{eachLetter}</span>;
      });
      return <span>{appender}&nbsp;</span>;
    });
    let count = 1;
    let packingArray = [];
    let returner = [];
    wordsArr.map(eachFormedWord => {
      packingArray.push(eachFormedWord);
      if (count === splitWords) {
        returner.push(<p>{packingArray.map(e => e)}</p>);
        count = 0;
        packingArray = [];
      }
      count += 1;
      return null;
    });
    // console.log(setInnerHtml(<p>{returner.map(e => e)}</p>), "magicTest");
    return <p>{returner.map(e => e)}</p>;
  }
  return (
    <Tag className={`magic-text-wrap`}>
      <span>{prefix}</span>
      {magictextMaker()}
      <span>{suffix}</span>
    </Tag>
  );
}

/*

<h1 className="magic-text-wrap">
          <p>
            <span>
              <span className="sp-uc-span">H</span>
              <span className="sp-uc-span">o</span>
              <span className="sp-uc-span">m</span>
              <span className="sp-uc-span">e</span>
            </span>
            <span>&nbsp;</span>
            <span>
              <span>P</span>
              <span>a</span>
              <span>g</span>
              <span>e</span>
            </span>
          </p>
          <p>
            <span>
              <span className="sp-uc-span">U</span>
              <span className="sp-uc-span">n</span>
              <span className="sp-uc-span">d</span>
              <span className="sp-uc-span">e</span>
              <span className="sp-uc-span">r</span>
            </span>
            <span>&nbsp;</span>
            <span>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>s</span>
              <span>t</span>
              <span>r</span>
              <span>u</span>
              <span>c</span>
              <span>t</span>
              <span>i</span>
              <span>o</span>
              <span>n</span>
            </span>
          </p>
          <p>
            <span>
              <i className="fa fa-warning" />
            </span>
          </p>
        </h1>

*/
