import styles from "./Grid.module.css";
import chateaubernard from "../assets/images/chateaubernard.svg";
import ollie from "../assets/images/ollie.webp";
import house from "../assets/images/maison-mathou.webp";

function Grid() {
	return (
		<div className={styles.grid}>
			<div className={`${styles.chateaubernard} retro-border`}>
				<img src={chateaubernard.src} alt="chateaubernard styled name" />
			</div>
			<div className="retro-border">
				<img
					src={ollie.src}
					alt="Ollie en pixel art"
					className={styles.ollie}
				/>
			</div>
			<div className={`${styles.house} retro-border`}>
				<div className={styles.date}>
					<h2>31 Mai</h2>
				</div>
				<img src={house.src} alt="Maison en pixel art" />
			</div>

			<section className={styles.middleSection}></section>
		</div>
	);
}
export default Grid;
