import Image from "next/image";
import Link from "next/link";

const featureGroups = [
  {
    title: "Manage Your Job\nSearch With Ease",
    image: {
      src: "/images/jobs-lists.png",
      alt: "JobPilot job match table preview",
      width: 2364,
      height: 1778,
    },
    items: [
      {
        title: "Find jobs that actually fit",
        description:
          "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
      },
      {
        title: "Know the Company Before You Apply",
        description:
          "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
      },
      {
        title: "Keep track of every application",
        description:
          "Keep a clear view of every job you've found, tailored. Your activity and progress all stay in one simple place.",
      },
    ],
    imageSide: "right",
  },
  {
    title: "Apply With More\nConfidence, Every Time",
    image: {
      src: "/images/agnet-log.png",
      alt: "JobPilot agent log preview",
      width: 2144,
      height: 1656,
    },
    items: [
      {
        title: "Understand your match score",
        description:
          "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
      },
      {
        title: "AI-Powered Job Matching",
        description:
          "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
      },
      {
        title: "Focus on the right roles",
        description:
          "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
      },
    ],
    imageSide: "left",
  },
] as const;

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/find-jobs", label: "Find Jobs" },
  { href: "/profile", label: "Profile" },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-border bg-surface">
        <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-6 md:px-10">
          <Link href="/" aria-label="JobPilot home">
            <Image
              src="/logo.png"
              alt="JobPilot"
              width={118}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-10 md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium leading-5 text-text-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/login"
            className="rounded-md bg-overlay px-4 py-2 text-sm font-medium leading-5 text-accent-foreground"
          >
            Start for free
          </Link>
        </header>

        <section className="px-6 pt-14 md:px-20">
          <div className="landing-gradient border border-border px-6 pb-16 pt-16 text-center md:px-10 md:pb-20 md:pt-18">
            <h1 className="mx-auto max-w-[760px] text-4xl font-bold leading-[1.08] tracking-normal text-text-slate md:text-[56px]">
              Job hunting is hard.
              <br />
              Your tools shouldn&apos;t be.
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-sm font-medium leading-6 text-text-secondary md:text-base">
              Stop applying blind. JobPilot finds the jobs, researches the
              companies, and gives you everything you need to stand out.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="rounded-md bg-overlay px-6 py-3 text-sm font-medium leading-5 text-accent-foreground"
              >
                Get Started <span aria-hidden="true">▸</span>
              </Link>
              <Link
                href="/find-jobs"
                className="rounded-md border border-border bg-surface/70 px-6 py-3 text-sm font-medium leading-5 text-text-primary"
              >
                Find Your First Match
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface-tertiary px-6 py-14 md:px-20">
          <Image
            src="/images/dashboard-demo.png"
            alt="JobPilot dashboard preview"
            width={4788}
            height={2416}
            className="mx-auto w-full max-w-[1130px] rounded-xl landing-preview-shadow"
            priority
          />
        </section>

        {featureGroups.map((group) => (
          <section
            key={group.title}
            className="grid border-b border-border md:grid-cols-2"
          >
            <div
              className={`flex min-h-[420px] flex-col justify-center ${
                group.imageSide === "left" ? "order-2 md:order-2" : ""
              }`}
            >
              <div className="border-b border-border px-8 py-12 md:px-16">
                <h2 className="whitespace-pre-line text-[34px] font-semibold leading-[1.1] tracking-normal text-text-slate md:text-[44px]">
                  {group.title}
                </h2>
              </div>
              <div>
                {group.items.map((item, itemIndex) => (
                  <article
                    key={item.title}
                    className={`border-b border-border px-8 py-8 last:border-b-0 md:px-16 ${
                      itemIndex === 0 ? "border-l-2 border-l-accent" : ""
                    } ${itemIndex === 1 ? "border-l-2 border-l-success" : ""}`}
                  >
                    <h3 className="text-base font-semibold leading-6 text-text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[490px] text-sm font-medium leading-6 text-text-secondary">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div
              className={`flex min-h-[420px] items-center justify-center bg-surface-muted px-8 py-14 md:px-14 ${
                group.imageSide === "left" ? "order-1 md:order-1" : ""
              }`}
            >
              <Image
                src={group.image.src}
                alt={group.image.alt}
                width={group.image.width}
                height={group.image.height}
                className={
                  group.imageSide === "left"
                    ? "w-full max-w-[540px] rounded-lg landing-card-shadow"
                    : "w-full max-w-[580px] rounded-lg landing-card-shadow"
                }
              />
            </div>
          </section>
        ))}

        <section className="landing-pattern border-b border-border px-6 py-20 text-center md:px-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Success Stories
          </p>
          <blockquote className="mx-auto mt-7 max-w-[800px] text-2xl font-semibold leading-9 text-text-slate md:text-[32px] md:leading-[44px]">
            “I used to spend my evenings copy-pasting resumes. Now I open my
            dashboard to see interviews waiting. It feels like cheating. Had 3
            offers on the table simultaneously.”
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src="/images/user-icon.png"
              alt="Tom Wilson"
              width={48}
              height={48}
              className="rounded-md"
            />
            <div className="text-left">
              <p className="text-sm font-semibold leading-5 text-text-primary">
                Tom Wilson
              </p>
              <p className="text-xs font-normal leading-4 text-text-muted">
                Junior Developer
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pt-0 md:px-20">
          <div className="landing-gradient border-x border-border px-6 py-16 text-center md:px-10 md:py-20">
            <h2 className="mx-auto max-w-[760px] text-4xl font-bold leading-[1.08] tracking-normal text-text-slate md:text-[48px]">
              Your next job search can feel a
              <br className="hidden md:block" />
              lot less overwhelming
            </h2>
            <p className="mx-auto mt-7 max-w-[650px] text-sm font-medium leading-6 text-text-secondary">
              Set up your profile, upload your resume, and start finding
              matches in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="rounded-md bg-overlay px-6 py-3 text-sm font-medium leading-5 text-accent-foreground"
              >
                Get Started <span aria-hidden="true">▸</span>
              </Link>
              <Link
                href="/find-jobs"
                className="rounded-md border border-border bg-surface/70 px-6 py-3 text-sm font-medium leading-5 text-text-primary"
              >
                Find Your First Match
              </Link>
            </div>
          </div>
        </section>

        <footer className="landing-pattern flex flex-col gap-8 border-t border-border px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10">
          <Link href="/" aria-label="JobPilot home">
            <Image
              src="/logo.png"
              alt="JobPilot"
              width={118}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-8"
          >
            <Link
              href="/dashboard"
              className="text-sm font-medium leading-5 text-text-dark"
            >
              Dashboard
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium leading-5 text-text-dark"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium leading-5 text-text-dark"
            >
              Terms & Condition
            </Link>
          </nav>
        </footer>
      </div>
    </main>
  );
}
