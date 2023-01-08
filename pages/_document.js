import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" class="bg-[#093145] max-w-5xl mx-auto">
      <Head />
      <body>
        <nav class="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between p-4 bold uppercase sm:items-baseline w-full font-bold">
          <div class="mb-2 sm:mb-0">
            <a href="/" class="text-blue-400 hover:text-blue-500 bold">LaunchList 🚀</a>
          </div>

          <div>
            <a href="https://www.twitter.com/lennardeth" class="text-blue-400 hover:text-blue-500 ml-2 bold">by @lennardeth</a>
          </div>
          </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
