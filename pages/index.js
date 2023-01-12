import Image from 'next/image'

export default function Home() {
  return (
    <main class="space-y-12 md:space-y-24 px-4">
      <div class="relative px-6 lg:px-8">
        <span class="text-gray-400 text-accent uppercase tracking-wide font-bold text-sm md:text-base">
          Launch with ease
        </span>

        <h2 class="text-gray-100 font-nunito text-3xl md:text-4xl font-extrabold mb-4 mt-4">
          Find your launch platform.
        </h2>

        <p class="text-gray-400 text-base-content/90 md:text-lg">
          We created an organized list of platforms to launch your startup and get your first 100 users with. <br />
          Delivered in a nicely organised Notion document, so you can use it as long as you want. <br />
          All updates are included for a lifetime.
        </p>

        <a class="bg-blue-400 hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 mt-8 flex gap -x-4 sm:justify-center rounded inline-flex items-center" href="https://buy.stripe.com/9AQ15v5DOe9x5WgaEF">
          Get the list

          <span class="ml-1.5">
            →
          </span>
        </a>
      </div>

      <div class="relative w-full mx-auto px-6 lg:px-8">
        <dl class="mt-10 text-center sm:mx-auto sm:grid sm:max-w-5xl sm:grid-cols-3 sm:gap-8">
          <div class="flex flex-col">
            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
              Get access to <span class="underline decoration-blue-400">over 80 links</span> in the organized Notion template.
            </dt>
            
            <dd class="order-1 text-3xl md:text-4xl font-bold tracking-tight text-white">
              80+
            </dd>
          </div>
          
          <div class="mt-10 flex flex-col sm:mt-0">
            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
              Reach <span class="underline decoration-blue-400">over 100,000</span> possible paying customers daily.
            </dt>
            
            <dd class="order-1 text-3xl md:text-4xl font-bold tracking-tight text-white">
              100k+
            </dd>
          
          </div>
          
          <div class="mt-10 flex flex-col sm:mt-0">
            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
              Get all <span class="underline decoration-blue-400">lifetime updates</span> completely for free. No extra fees.
            </dt>
            
            <dd class="order-1 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Unlimited
            </dd>
          </div>
        </dl>
      </div>

      <div class="relative w-full mx-auto px-6 lg:px-8  ">
        <div>
          
        </div>
      </div>

    </main>

  )
}