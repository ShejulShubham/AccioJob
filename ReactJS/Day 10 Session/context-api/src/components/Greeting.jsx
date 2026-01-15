import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Greeting() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <hr />
      {language === "en" ? <h1>Hello </h1> : <h1>Hola</h1>}
      <span>
        Language Selected: {language === "en" ? "English" : "Spanish"}
      </span>

      <br />
      <br />
      <button onClick={toggleLanguage}>
        Switch to {language === "en" ? "Spanish" : "English"}
      </button>
    </>
  );
}
