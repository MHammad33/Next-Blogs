import Image from "next/image";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
	return (
		<div className={styles.container}>
			{/* Popular Posts */}
			<h2 className={styles.subtitle}>{"What's hot?"}</h2>
			<h1 className={styles.title}>Most Popular</h1>
			<MenuPosts withImage={false} />

			{/* Categories */}
			<h2 className={styles.subtitle}>Discover by Topics</h2>
			<h1 className={styles.title}>Categories</h1>
			<MenuCategories />

			{/* Editor's Choice */}
			<h2 className={styles.subtitle}>Chosen by the Editors</h2>
			<h1 className={styles.title}>Editor's Choice</h1>
			<MenuPosts withImage={true} />
		</div>
	);
};
export default Menu;
