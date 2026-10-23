import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pagehead">
      <div className="wrap narrow">
        <h1>Page not found</h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <p style={{ marginTop: 20 }}><Link className="btn btn-gold" href="/">Back to home</Link> <Link className="btn btn-line" href="/contact/">Contact us</Link></p>
      </div>
    </section>
  );
}
