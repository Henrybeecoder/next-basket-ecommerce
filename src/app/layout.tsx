import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { ReduxProvider } from "@/components/providers/ReduxProver";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Basket commerce",
	description: "Next basket ecommerce site",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head></head>
			<body className={montserrat.className}>
				<ReduxProvider>
					<ReactQueryProvider>
						<div>{children}</div>
					</ReactQueryProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
