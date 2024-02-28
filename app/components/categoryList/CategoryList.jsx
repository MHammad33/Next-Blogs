import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

const getData = async () => {
	const res = await fetch("http://localhost:3000/api/categories", {
		cache: "no-store", // ! change it when finishing (remove)
	});

	if (!res.ok) {
		return new Error("Failed to fetch Categories");
	}

	return res.json();
};

const CategoryList = async () => {
	const data = await getData();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>
				{data?.map((item) => {
					return (
						<Link
							href={`/blog?cat=${item.slug}`}
							className={`${styles.category} ${styles[item.slug]}`}
							key={item._id} // * in mongodb we use _id
						>
							{item.img && (
								<Image
									src={item.img}
									width={32}
									height={32}
									className={styles.image}
									alt=""
								/>
							)}
							{item.title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
export default CategoryList;
