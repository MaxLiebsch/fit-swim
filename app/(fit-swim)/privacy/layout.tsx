export const metadata = {
  title: 'Datenschutz - Fit-Swim',
  description: 'Datenschutz - Fit-Swim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="prose">
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
