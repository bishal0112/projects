import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [color1, setColor1] = useState("#fff");
  const [color2, setColor2] = useState("#fff");

  const generateHexCode = () => {
    const hexCharacters = "0123456789ABCDEF";
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      colorCode += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return colorCode;
  };

  const handleColorChange = () => {
    const newColor = generateHexCode;
    setColor1(newColor);
    const newColor2 = generateHexCode;
    setColor2(newColor2);
  };
  const handleReset = () => {
    setColor1("#fff");
    setColor2("#fff");
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h3>Generate Random Gradients</h3>
        <div
          style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }}
          className="gradientBox"
        >
          <button className="btnChange" onClick={handleColorChange}>
            Change
          </button>
          <button className="btnChange" onClick={handleReset}>
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
