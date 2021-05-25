import { useRouter } from "next/router";
import { Provider } from "next-auth/client";
import SiteLayout from "../components/SiteLayout";
import LessonsLayout from "../components/LessonsLayout";
import AdminLayout from "../components/AdminLayout";
import "antd/dist/antd.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<Provider session={pageProps.session}>
			{router.route.startsWith("/lessons/") ? (
				<LessonsLayout>
					<Component {...pageProps} />
				</LessonsLayout>
			) : router.route.startsWith("/admin") ? (
				<AdminLayout>
					<Component {...pageProps} />
				</AdminLayout>
			) : (
				<SiteLayout>
					<Component {...pageProps} />
				</SiteLayout>
			)}
		</Provider>
	);
}

export default MyApp;
