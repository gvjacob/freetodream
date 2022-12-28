import SVG from '@components/SVG';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="hv-site-padding bg-white">
      <Link href="/about">About Hanvoice</Link>
      <Link href="/process">Process</Link>

      <div>
        <SVG.CanadaWordmark aria-hidden />
        <span class="sr-only">Sponsored by the government of Canada.</span>
      </div>

      <p>Program by HanVoice in collaboration with the Government of Canada</p>

      <p>© 2022 HanVoice.ca</p>
    </footer>
  );
}
