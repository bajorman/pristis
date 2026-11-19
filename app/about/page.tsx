import type { Metadata } from "next";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHeader title="About" current="/about/" />
      <PageBody>
        <p>
          PristisManagement was founded by Paweł Bajorek, a seasoned technology
          leader with over 20 years of experience.
        </p>
      </PageBody>
    </>
  );
}
