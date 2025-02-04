import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";

const getData = async (page) => {
	const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
		cache: "no-store", // ! change it when finishing (remove)
	});

	if (!res.ok) {
		return new Error("Failed to fetch Categories");
	}

	return res.json();
};

const CardList = async ({ page }) => {
	const data = await getData(page);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>
			<div className={styles.posts}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Pagination />
		</div>
	);
};
export default CardList;
