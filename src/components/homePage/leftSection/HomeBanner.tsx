import leftRobotImg from "./../../../assets/images/home/banner/roboPng.png";
import styles from "../../../scss/homePage/Banner.module.scss";

type Props = {};

export default function HomeBanner({}: Props) {
  return (
    <section className={styles.home_banner}>
      <img src={leftRobotImg} alt="robot" />
      <h1 className={styles.title}>Create your own AI app with our wizard</h1>
    </section>
  );
}
