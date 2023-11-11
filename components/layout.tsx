import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "David Goldstein";
export const siteTitle = "David's Blog";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="max-w-xl px-4 mt-12 mx-auto mb-24">
      <Head>
        <link
          rel="icon"
          href="/images/acorn.png"
          title="Acorn icons created by Freepik - Flaticon"
        />
        <meta
          name="description"
          content="Check out my personal website that I built using the Next.js tutorial!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="text-[2.5rem]/[1.2] font-extrabold tracking-tight my-4">
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="text-2xl/snug my-4">
              <Link href="/" className="text-black font-bold">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
