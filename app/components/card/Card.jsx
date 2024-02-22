import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src="/p1.jpeg" alt="" fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>11.02.2023 - </span>
					<span className={styles.category}>CULTURE</span>
				</div>
				<Link href="/">
					<h1>Improve your github profile using this simple trick.</h1>
				</Link>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit unde
					quia in assumenda possimus veniam doloremque? Fugiat et eligendi,
					animi accusantium sunt nisi. Ullam maiores praesentium necessitatibus
					id pariatur magnam nulla quod. Laudantium.
				</p>
				<Link href="/" className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
};
export default Card;
