import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>FullCalendar Next.js 13 Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='navbar'>
        <Link href='/'>Home</Link>
        <Link href='/calendar'>Calendar</Link>
        <Link href='/about'>About</Link>
      </div>
      <div>
        {children}
      </div>
    </>
  )
}
