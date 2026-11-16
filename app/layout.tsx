import Link from "next/link"

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">home</Link>
          {" | "}
          <Link href="/recipes">recipes</Link>
          {" | "}
          <Link href="/recipes/new">create new recipe</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}