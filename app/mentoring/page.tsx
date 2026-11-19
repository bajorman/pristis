import type { Metadata } from "next";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "Mentoring" };

export default function Mentoring() {
  return (
    <>
      <PageHeader title="Mentoring" current="/mentoring/" />
      <PageBody>
        <p>
          One-on-one mentoring for CTOs and VP Engineering – practical guidance
          on daily challenges...
        </p>
      </PageBody>
    </>
  );
}
