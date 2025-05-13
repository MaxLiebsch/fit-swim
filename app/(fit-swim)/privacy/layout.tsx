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
      <body>
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      </body>
    </html>
  )
}
