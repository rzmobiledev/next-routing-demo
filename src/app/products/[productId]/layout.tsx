import Link from 'next/link'

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

export default function ProductDetailsLayout({
  children
}: {
  children: React.ReactNode
}) {
  const random = getRandomInt(2)

  if (random === 1) {
    throw new Error('Error loading product')
  }

  return (
    <>
      <Link href="/">Home</Link>
      {children}
      <h2>Features Products</h2>
    </>
  )
}
