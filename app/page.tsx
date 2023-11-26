import Link from '@/node_modules/next/link'
import Image from 'next/image'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
