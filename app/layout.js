import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "./providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mohal Thoughts | A way to enhance life",
	description: "Thoughts where Life change!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeContextProvider>
					<ThemeProvider>
						<div className="container">
							<div className="wrapper">
								<Navbar />
								{children}
								<Footer />
							</div>
						</div>
					</ThemeProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
