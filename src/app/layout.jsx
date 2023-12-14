import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
// imports
import {
	HeaderComponents,
	FooterComponents,
	ContainerComponents,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pokedex Next App",
	description: "Created by Maxirpc",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className} data-bs-theme="dark">
				<HeaderComponents />
				<ContainerComponents>{children}</ContainerComponents>
				<FooterComponents />
			</body>
		</html>
	);
}
