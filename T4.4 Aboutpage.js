import Head from 'next/head'


export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Learn more about us" />
        <meta name="keywords" content="about, company, nextjs" />
      </Head>

      <section className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About Page
        </h2>

        <p className="text-gray-600 leading-relaxed">
          This is the about page content. Here you can write information 
          about your company, mission, and goals.
        </p>
      </section>
    </>
  )
}
