import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

const CategoryList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>
				<Link
					href="/blog?cat=style"
					className={`${styles.category} ${styles.style}`}
				>
					<Image
						src="/style.png"
						width={32}
						height={32}
						className={styles.image}
						alt=""
					/>
					style
				</Link>

				<Link
					href="/blog?cat=fashion"
					className={`${styles.category} ${styles.fashion}`}
				>
					<Image
						src="/fashion.png"
						width={32}
						height={32}
						className={styles.image}
						alt=""
					/>
					fashion
				</Link>

				<Link
					href="/blog?cat=food"
					className={`${styles.category} ${styles.food}`}
				>
					<Image
						src="/food.png"
						width={32}
						height={32}
						className={styles.image}
						alt=""
					/>
					food
				</Link>

				<Link
					href="/blog?cat=travel"
					className={`${styles.category} ${styles.travel}`}
				>
					<Image
						src="/travel.png"
						width={32}
						height={32}
						className={styles.image}
						alt=""
					/>
					travel
				</Link>

				<Link
					href="/blog?cat=culture"
					className={`${styles.category} ${styles.culture}`}
				>
					<Image
						src="/culture.png"
						width={32}
						height={32}
						className={styles.image}
						alt=""
					/>
					culture
				</Link>

				<Link
					href="/blog?cat=coding"
					className={`${styles.category} ${styles.coding}`}
				>
					<Image
						src="/culture.png"
						width={32}
						height={32}
						className={styles.image}
						alt=""
					/>
					coding
				</Link>
			</div>
		</div>
	);
};
export default CategoryList;
