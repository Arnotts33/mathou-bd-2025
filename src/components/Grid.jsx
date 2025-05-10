import styles from "./Grid.module.css";
import chateaubernard from "../assets/images/chateaubernard.svg";
import house from "../assets/images/maison-mathou.webp";
import legumes from "../assets/images/legumes.webp";
import sardinade from "../assets/images/sardines.webp";
import chatSardine from "../assets/images/chat-sardine.webp";
import champagne from "../assets/images/champagne.gif";
import cheesecake from "../assets/images/cheesecake.webp";

const songs = [
	"One More Time",
	"Billie Jean",
	"Sweet Child O Mine",
	"Wonderwall",
	"Smells Like Teen Spirit",
	"Backstreet's Back",
	"Livin' on a Prayer",
	"Wannabe",
	"I Want It That Way",
	"Toxic",
	"Hey Ya!",
];

function Grid() {
	return (
		<div className={styles.grid}>
			{/* Top Section */}
			<div className={`${styles.chateaubernard} retro-border`}>
				<img src={chateaubernard.src} alt="chateaubernard styled name" />
			</div>

			<div className={`${styles.ollieContainer} retro-border`}></div>

			<div className={`${styles.house} retro-border`}>
				<div className={styles.date}>
					<h2>31 Mai</h2>
				</div>
				<img src={house.src} alt="Maison en pixel art" />
			</div>

			{/* Middle Section */}
			<div className={`${styles.partyWords} retro-border`}>
				<h2>Food</h2>
				<h2>Drinks</h2>
				<h2>Music</h2>
				<h2>Games</h2>
			</div>

			<div className={styles.gridCenter}>
				<div className={`${styles.sardinadeContainer} retro-border`}>
					<h2>Sardinade</h2>
					<div className={styles.imagesContainer}>
						<div className={styles.legumes}>
							<img src={legumes.src} alt="Assiette de legumes en pixel art" />
						</div>
						<div className={styles.sardinade}>
							<img src={sardinade.src} alt="Sardinade en pixel art" />
						</div>
						<div className={styles.chatSardine}>
							<img
								src={chatSardine.src}
								alt="Chat mangeant sardine en pixel art"
							/>
						</div>
					</div>
				</div>
				<div className={styles.champCakeContainer}>
					<div className={`${styles.champagne} retro-border`}>
						<img src={champagne.src} alt="Champagne gif" />
					</div>
					<div className={styles.cheesecake}>
						<img src={cheesecake.src} alt="Cheesecake in pixel art" />
						<div className={`${styles.cheesecakeText} retro-border`}>
							<p>Vanilla Cheesecake</p>
						</div>
					</div>
				</div>
			</div>

			<div className={`${styles.playlist} retro-border`}>
				<div className={styles.title}>
					<h2>Playlist</h2>
					<p>From '95 to '25 classics</p>
				</div>

				<div className={`${styles.playlistContainer} old-scrollbar`}>
					{songs.map((song, index) => (
						<div key={index} className={`${styles.songBox} retro-border`}>
							<p className={styles.song}>{song}</p>
						</div>
					))}
				</div>
			</div>

			{/* Bottom Section */}
			<div className={`${styles.ikeaGift} retro-border`}>
				<a
					href="https://www.leetchi.com/fr/c/meubler-le-chateau-de-la-princesse-mathilde-1248838?utm_source=copylink&utm_medium=social_sharing"
					target="_blank"
					className={`${styles.cagnotteBtn} retro-border`}
				>
					Participer à la cagnotte
				</a>
			</div>

			<div className={`${styles.seeYou} retro-border`}>
				<div className={styles.seeYouText}>
					<p>See You There!</p>
				</div>
			</div>

			<div className={`${styles.chirac} retro-border`}>
				<div className={styles.chiracText}>
					<p>1995</p>
				</div>
			</div>
		</div>
	);
}
export default Grid;
