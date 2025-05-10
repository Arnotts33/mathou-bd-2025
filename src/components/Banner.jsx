import styles from "./Banner.module.css";
import mathou from "../assets/images/mathou.webp";
import friends from "../assets/images/friends.gif";

function Banner() {
	return (
		<div className={styles.banner}>
			<div>
				<img src={mathou.src} alt="Mathou et Izzie" className={styles.mathou} />
			</div>
			<div className={styles.title}>
				<h1>Mathou's</h1>
				<h2>30th Birthday</h2>
				<h3>Party</h3>
			</div>
			<div>
				<img src={friends.src} alt="friends gif" className={styles.friends} />
			</div>
		</div>
	);
}
export default Banner;
