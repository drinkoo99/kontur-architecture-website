import { Seo } from '@/components/Seo'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TextLink } from '@/components/ui/TextLink'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="The page you were looking for does not exist." />

      <section className="shell flex min-h-[70svh] flex-col justify-center py-32">
        <SectionLabel>Error 404</SectionLabel>
        <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.25rem,7vw,5rem)]">
          This page could not be found.
        </h1>
        <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-ink-soft">
          The address may be incorrect, or the page may have moved.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <TextLink to="/">Return home</TextLink>
          <TextLink to="/projects">View projects</TextLink>
        </div>
      </section>
    </>
  )
}
