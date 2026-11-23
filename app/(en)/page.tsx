import HomePage from "../components/HomePage";
import { en } from "../content/en";

// English home page (default language). The Polish one is app/(pl)/pl/page.tsx.
export default function Home() {
  return <HomePage t={en} />;
}
