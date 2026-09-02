import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy-950 pt-24 text-white">
      <Container className="py-24 text-center">
        <p className="eyebrow eyebrow-dark justify-center">404</p>
        <h1 className="mt-5 text-4xl text-white sm:text-5xl">Page not found.</h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" arrow>Back to Home</Button>
          <Button href="/contact" variant="outline-light">Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}
