import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="fixed top-0 z-50 shadow-md w-full px-8 text-gray-700 bg-white body-font">
          <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <a
              href="#_"
              className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
            >
              <span>
                <svg id="outline" height={32} viewBox="0 0 512 512" width={32} xmlns="http://www.w3.org/2000/svg">
                  <path d="m48.54993 335.28882a48.076 48.076 0 0 0 47.44665 40.70581h32a48.07 48.07 0 0 0 47.34632-40.14356l73.25946-.26757a48.07226 48.07226 0 0 0 47.39422 40.41113h32a47.88832 47.88832 0 0 0 35.99634-16.29736 48.32638 48.32638 0 0 0 36.00366 16.29736h32a48.06719 48.06719 0 0 0 47.511-41.21045 24.038 24.038 0 0 0 16.489-22.78955v-64a56.06353 56.06353 0 0 0 -56-56h-52.99414l-41.37844-36.20606a79.97887 79.97887 0 0 0 -52.68066-19.79394h-193.06443a55.63355 55.63355 0 0 0 -39.59815 16.40185l-34.91162 34.91163a31.78928 31.78928 0 0 0 -9.37256 22.62744v86.05908a40.05922 40.05922 0 0 0 32.55335 39.29419zm.31952-16.37451a24.10851 24.10851 0 0 1 -15.53894-15.04431 7.98838 7.98838 0 0 0 4.91314-2.87781l12.00977-15.01219a58.57975 58.57975 0 0 1 91.48633 0l12.00976 15.01221a7.99952 7.99952 0 0 0 6.24707 3.00244h16v15.85376l-32.6842.11938a47.99135 47.99135 0 0 0 -94.44293-1.05346zm15.12713 9.08032a32 32 0 1 1 32 32 32.036 32.036 0 0 1 -32-32zm67.95832 31.74637a47.8461 47.8461 0 0 0 11.3671-23.773l15.68207-.05738a32.07723 32.07723 0 0 1 -27.04917 23.83038zm132.04168-31.74634a32 32 0 1 1 32 32 32.036 32.036 0 0 1 -32-32.00003zm67.95825 31.74634a47.84613 47.84613 0 0 0 11.36231-23.74634h15.66686a32.07881 32.07881 0 0 1 -27.02917 23.74634zm40.9292-14.76514a47.56989 47.56989 0 0 0 2.43311-8.9812h55.66686a31.99507 31.99507 0 0 1 -58.1 8.9812zm63.0708 14.76514a47.84613 47.84613 0 0 0 11.36231-23.74634h15.66686a32.07881 32.07881 0 0 1 -27.02917 23.74634zm36.04175-39.74634h-128.67944a47.989 47.989 0 0 0 -94.56738-.41187l-56.75318.20728v-15.79544h40a7.99949 7.99949 0 0 0 6.24707-3.00244l12.00977-15.01219a58.57975 58.57975 0 0 1 91.48633 0l12.00976 15.01221a7.99952 7.99952 0 0 0 6.24707 3.00244h120v8a8.00917 8.00917 0 0 1 -8 7.99998zm-88-64a16.01834 16.01834 0 0 1 -16-16h24v16zm24-16h71.19507a40.02741 40.02741 0 0 1 .80493 8v8h-72zm32-32a39.96212 39.96212 0 0 1 31.97815 16h-111.97815a7.99977 7.99977 0 0 0 -8 8v8a32.036 32.036 0 0 0 32 32h96v16h-116.15478l-9.60791-12.00977a74.58025 74.58025 0 0 0 -116.47461 0l-9.60791 12.00977h-36.15479v-16a7.99877 7.99877 0 0 0 -2.34326-5.65674l-21.65674-21.65723v-36.686h272zm-147.05322-56a63.98108 63.98108 0 0 1 42.14453 15.835l27.61719 24.165h-71.70264l-41.37844-36.20609c-1.52313-1.33276-3.101-2.58764-4.71-3.79394zm-96 0a63.98108 63.98108 0 0 1 42.14453 15.835l27.61719 24.165h-98.7085v-40zm-44.94678 40h-64.45458l28.57141-40h35.88318zm-115.314 6.62744 34.91162-34.91162a39.69445 39.69445 0 0 1 24.74115-11.55371l-30.84857 43.188a8 8 0 0 0 6.50976 12.6499h80v40a7.99881 7.99881 0 0 0 2.34326 5.65674l21.65674 21.65722v12.686h-12.15474l-9.60791-12.00977a74.58025 74.58025 0 0 0 -116.47461 0l-5.7627 7.20337v-27.1936h8a7.99944 7.99944 0 0 0 6.65625-3.5625l16-24a8 8 0 0 0 -6.65625-12.4375h-24v-6.05908a15.89423 15.89423 0 0 1 4.68604-11.31348zm-4.686 41.37256v-8h9.05176l-5.333 8z" />
                  <circle cx="95.997" cy="327.995" r={8} />
                  <path d="m191.997 231.995h24v16h-24z" />
                  <circle cx="295.997" cy="327.995" r={8} />
                </svg>
              </span>
              <span className="mr-2 text-xl font-black leading-none text-gray-900 select-none logo">
                A New Dawn<span className="text-indigo-600"></span>
              </span>
            </a>
            <div className="relative flex flex-col md:flex-row">
              <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
                {/* <a href="https://www.google.com" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="#_" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
                  Vehicles
                </a>
                <a href="#_" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
                <a href="#_" className="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">
                  Packages
                </a> */}
              </nav>
              <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                <span className="inline-flex rounded-md shadow-sm">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Book a taxi
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>

        <footer className="bg-white">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  About
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Team
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Pricing
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Terms
                </a>
              </div>
            </nav>
            <p href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900 text-center">
              A member of the{" "}
              <a className="text-blue-400" href="https://www.enjoythevi.com">
                @enjoythevi
              </a>{" "}
              family
            </p>
            <div className="flex justify-center mt-8 space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 ">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">© 2021 Chris Taxi Services, LLC. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
