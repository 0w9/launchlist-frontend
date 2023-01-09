import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en" class="bg-[#093145] max-w-5xl mx-auto">
      <Head />
      <body>
        <nav class="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between p-4 bold uppercase sm:items-baseline w-full font-bold">
          
          <div class="mb-2 sm:mb-0">
            <Link href="/" class="text-indigo-200 hover:text-blue-500 bold">LaunchList 🚀</Link>
          </div>

          <div class="hidden md:block sm:block">
            <div class="decoration-blue-500 p-2 rounded-lg">
              <Link href="https://www.twitter.com/lennardeth" class="text-indigo-200 hover:text-blue-500 ml-2 bold">Sponsor <span class="animate-bounce">✨</span></Link>
            </div>
          </div>

          <div class="hidden md:block sm:block">
            <div>
              <Link href="https://www.twitter.com/lennardeth" class="text-indigo-200 hover:text-blue-500 ml-2 bold">by @lennardeth</Link>
            </div>
          </div>

        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
