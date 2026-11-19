import Link from "next/link";
import PageBody from "./components/PageBody";
import PageHeader from "./components/PageHeader";

const buttonClass =
  "inline-block rounded border border-black/20 bg-button px-5 py-2 text-sm shadow-sm hover:brightness-95";

export default function Home() {
  return (
    <>
      <PageHeader title="Pristis Management" current="/" />
      <PageBody className="text-center">
        <div className="space-y-4">
          <p>
            PristisManagement is a consulting and mentoring company for
            technology leaders.
          </p>
          <p>
            We help CTOs, VP Engineering, and startups build scalable products,
            teams, and engineering organizations.
          </p>
          <p>
            Consulting companies in their way of digital and cloud
            transformation.
          </p>
          <p>
            Leading agile transformation initiatives, forging cloud strategies
            for different types of organizations.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="sm:text-left">
            <Link href="/contact/" className={buttonClass}>
              Contact us
            </Link>
          </div>
          <div>
            <Link href="/services/" className={buttonClass}>
              See our services
            </Link>
          </div>
        </div>
      </PageBody>
    </>
  );
}
