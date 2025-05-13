export const metadata = {
  title: 'Impressum - Fit-Swim',
  description: 'Impressum - Fit-Swim',
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
