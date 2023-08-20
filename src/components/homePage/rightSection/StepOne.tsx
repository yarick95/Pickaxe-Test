import React, { useState } from "react";

import zapSvg from "../../../assets/images/home/stepComponent/zap.svg";
import styles from "../../../scss/homePage/StepOne.module.scss";

type Props = {
  handleDataSubmission: (data: string) => void;
  loading: boolean;
};

export default function StepOne({ handleDataSubmission, loading }: Props) {
  const [textInput, setTextInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDataSubmission(textInput);
  };

  return (
    <section className={styles.step}>
      <div className={styles.step_wrapper}>
        <img src={zapSvg} alt="Zap Icon" />
        <h1>Step 1</h1>
      </div>
      <p>Turn your idea into a prompt</p>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="In a phrase or two, describe what you want your bot to be good at."
          className={styles.textarea}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={!textInput || loading}
          className={`${textInput ? "" : styles.btn_disabled}`}
        >
          {loading ? "Loading..." : "Get your prompt"}
        </button>
      </form>
    </section>
  );
}
