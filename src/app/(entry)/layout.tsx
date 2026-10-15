export const metadata = {
  metadataBase: new URL('https://habibdrira.github.io'),
  title: 'Habib Drira — Ingénieur Cloud & DevOps',
}

export default function EntryLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta httpEquiv="refresh" content="0; url=/fr/" />
      </head>
      <body>{children}</body>
    </html>
  )
}
