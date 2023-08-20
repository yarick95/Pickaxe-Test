import { useState, useEffect } from "react";
import editSvg from "../../../assets/images/home/stepComponent/edit.svg";
import styles from "../../../scss/homePage/StepTwo.module.scss";

type Props = {
  stepTwoResponse: string;
};

export default function StepTwo({ stepTwoResponse }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <section className={styles.step}>
      <>
        <div className={styles.step_wrapper}>
          <img src={editSvg} alt="Edit Icon" />
          <h1>Step 2</h1>
        </div>
        <p>Look over your prompt, polish it, and turn it into an app</p>

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder=""
            className={styles.textarea}
            defaultValue={stepTwoResponse ? stepTwoResponse : ""}
          />

          <button
            type="submit"
            disabled={loading}
            className={`${!loading ? "" : styles.btn_disabled}`}
          >
            {loading ? "Loading..." : "Build your app"}
          </button>
        </form>
      </>
    </section>
  );
}
