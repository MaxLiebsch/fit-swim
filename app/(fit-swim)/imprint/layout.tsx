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
      <body>
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      </body>
    </html>
  )
}
