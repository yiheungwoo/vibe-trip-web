/**
 * Pass-through root layout. The <html>/<body> tags are rendered by app/[locale]/layout.tsx
 * so that the `lang` attribute can follow the active locale.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
