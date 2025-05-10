import styles from "./Banner.module.css";
import mathou from "../assets/images/mathou.webp";
import friends from "../assets/images/friends.gif";

function Banner() {
	return (
		<div className={styles.banner}>
			<img
				// src="/images/mathou.webp"
				src={mathou.src}
				alt="Mathou et Izzie"
				className={styles.mathou}
			/>
			<div className={styles.title}>
				<h1>Mathou's</h1>
				<h2>30th Birthday</h2>
				<h3>Party</h3>
			</div>
			<img
				// src="/images/friends.gif"
				src={friends.src}
				alt="friends gif"
				className={styles.friends}
			/>
		</div>
	);
}
export default Banner;
