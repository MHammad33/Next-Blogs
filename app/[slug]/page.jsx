import Image from "next/image";
import Menu from "../components/menu/Menu";
import styles from "./singlePage.module.css";
import Comments from "../components/comments/Comments";

const SinglePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						Improve your coding skills by doing this simple task daily.
					</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>M Hammad Afzal</span>
							<span className={styles.date}>23.02.2024</span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src="/p1.jpeg" alt="" fill className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.desc}>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
							alias id quas. Voluptatem possimus ab harum exercitationem eum
							quibusdam, nihil ipsa voluptate ipsam fuga id dolorem. Quibusdam,
							ullam consectetur nobis facere culpa expedita?
						</p>
						<h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ut
							dignissimos facere amet reprehenderit mollitia, illum, natus
							molestias ipsa excepturi soluta odit?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
							ea ullam.
						</p>
					</div>
					<div className={styles.comment}>
						<Comments />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
};
export default SinglePage;
