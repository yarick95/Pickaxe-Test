import { useState, useEffect } from "react";
import { simulateRequest } from "../utils/simulateRequest";

import Container from "../components/Container";
import HomeBanner from "../components/homePage/leftSection/HomeBanner";
import StepOne from "../components/homePage/rightSection/StepOne";
import StepTwo from "../components/homePage/rightSection/StepTwo";

import styles from "../scss/homePage/Home.module.scss";
import stylesStepOne from "../scss/homePage/StepOne.module.scss";
import stylesStepTwo from "../scss/homePage/StepTwo.module.scss";
import stylesNotify from "../scss/Notification.module.scss";

type Props = {};

export default function HomePage({}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [showStepTwo, setShowStepTwo] = useState<boolean>(false);
  const [stepTwoResponse, setStepTwoResponse] = useState<string>("");
  const [notifications, setNotifications] = useState<
    { status: "Successful" | "Error"; message: string }[]
  >([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(0, -1));
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [notifications]);

  const handleDataSubmission = async (dataInput: string) => {
    setShowStepTwo(false);
    setNotifications((prevNotifications) => prevNotifications.slice(0, -1));

    try {
      setLoading(true);
      const responseData = await simulateRequest(dataInput);

      setStepTwoResponse(responseData.response);
      setShowStepTwo(true);

      setNotifications([{ status: "Successful", message: "Successful!" }]);

      console.log("Response:", responseData);
    } catch (error) {
      setShowStepTwo(false);
      setNotifications([
        {
          status: "Error",
          message: (error as Error).toString(),
        },
      ]);

      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.background_half}></div>
      <Container>
        <div className={styles.home_content}>
          <HomeBanner />
          <div
            className={`${styles.step_wrapper} ${
              showStepTwo
                ? `${stylesStepTwo.show_step} ${stylesStepOne.move_step}`
                : ""
            }`}
          >
            <StepOne
              handleDataSubmission={handleDataSubmission}
              loading={loading}
            />
            <StepTwo stepTwoResponse={stepTwoResponse} />
          </div>
        </div>
      </Container>

      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`${stylesNotify.notify_wrapper} ${
            notification.status === "Successful"
              ? stylesNotify.success
              : stylesNotify.error
          }`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
}
