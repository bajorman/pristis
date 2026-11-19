import type { Metadata } from "next";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "For Startups" };

export default function ForStartups() {
  return (
    <>
      <PageHeader title="For Startups" current="/for-startups/" />
      <PageBody>
        <p>
          We support technology startups at every stage – from idea to MVP to
          scale-up...
        </p>
      </PageBody>
    </>
  );
}
