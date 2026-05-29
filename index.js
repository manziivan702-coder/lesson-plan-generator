export default function Home() {
  return (

    <section className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-800 text-white flex items-center">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Create Professional CBC Lesson Plans with AI
          </h1>

          <p className="mt-6 text-lg text-green-100">
            Save hours of preparation using Rwanda’s modern AI-powered lesson planning platform for teachers.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-green-700 transition">
              Learn More
            </button>

          </div>

        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl">

          <div className="bg-white rounded-2xl p-5 text-gray-800">

            <h2 className="font-bold text-xl mb-4">
              AI Generated Lesson
            </h2>

            <div className="space-y-3 text-sm">

              <div className="bg-gray-100 p-3 rounded-lg">
                Subject: Mathematics
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                Topic: Fractions
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                Competence-based activities generated automatically.
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}