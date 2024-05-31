import Link from "next/link";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <h1 className="text-md font-medium">GetKetch.shop</h1>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Polaroid Posters
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Benefits
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get Ketch And Customize Your Space, Boost Your Productivity
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the power of customizable Polaroid posters to transform your room and unlock your full potential.
                </p>
                <div className="space-x-4 mt-6">
                  <Link className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="#">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img alt="Hero" className="mx-auto aspect-[3/2] overflow-hidden rounded-t-xl object-cover" height="400" src="/hero-image.png" width="600" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customize Your Polaroid Posters</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose from a wide range of designs, colors, and sizes to create the perfect Polaroid poster for your space.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <img alt="Poster 1" className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover" height="400" src="/poster1.jpg" width="300" />
                <h3 className="text-lg font-bold">Minimalist Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Clean and modern designs to complement any decor.
                </p>
              </div>
              <div className="grid gap-1">
                <img alt="Poster 2" className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover" height="400" src="/poster2.jpg" width="300" />
                <h3 className="text-lg font-bold">Vibrant Colors</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Bright and eye-catching colors to energize your space.
                </p>
              </div>
              <div className="grid gap-1">
                <img alt="Poster 3" className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover" height="400" src="/poster3.jpg" width="300" />
                <h3 className="text-lg font-bold">Personalized Designs</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Customize your posters with your own text and images.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Your Potential with Polaroid Posters</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover how Polaroid posters can transform your space and boost your productivity, focus, and motivation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <LightbulbIcon className="mx-auto h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Improved Focus</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Customized posters help you stay on task and avoid distractions.
                </p>
              </div>
              <div className="grid gap-1">
                <MoonIcon className="mx-auto h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Better Sleep</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Calming designs and colors promote a relaxing environment for better sleep.
                </p>
              </div>
              <div className="grid gap-1">
                <RocketIcon className="mx-auto h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Increased Motivation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Inspiring posters help you stay motivated and achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About GetKetch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                GetKetch is a company dedicated to creating high-quality, customizable posters that help people transform their spaces and unlock their full potential. Our mission is to empower individuals to create environments that inspire, motivate, and promote well-being.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <LightbulbIcon className="mx-auto h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Our Story</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                GetKetch was founded by a team of designers and entrepreneurs who recognized the power of customizable posters to transform spaces and improve well-being.
                </p>
              </div>
              <div className="grid gap-1">
                <MoonIcon className="mx-auto h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Our Values</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  At GetKetch, we believe in creating products that are not only beautiful, but also meaningful and impactful. We are committed to sustainability, innovation, and empowering our customers.
                </p>
              </div>
              <div className="grid gap-1">
                <RocketIcon className="mx-auto h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Our Team</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team is composed of passionate designers, engineers, and customer service professionals who are dedicated to delivering an exceptional experience to our customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 getkeech.shop. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
