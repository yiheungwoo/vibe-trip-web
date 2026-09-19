import "./globals.css";

/** Global 404 (the pass-through root layout renders no <html>, so this page brings its own). */
export default function NotFound() {
  return (
    <html lang="ko">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
          <h1 className="text-[28px] font-bold">404</h1>
          <p className="text-white/60">페이지를 찾을 수 없습니다. / Page not found.</p>
          <a href="/" className="text-vibe-cyan underline underline-offset-4">
            Vibe Trip
          </a>
        </main>
      </body>
    </html>
  );
}
