function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold">Joyce Crosswhite</span>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-blue-200">About</a>
            <a href="#issues" className="hover:text-blue-200">Issues</a>
            <a href="#involved" className="hover:text-blue-200">Get Involved</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Joyce Crosswhite</h1>
          <p className="text-2xl md:text-3xl mb-2">for [Office]</p>
          <p className="text-xl text-blue-200 mb-8">[Campaign Slogan]</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#involved" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100">
              Get Involved
            </a>
            <a href="#donate" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900">
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Joyce</h2>
          <div className="md:flex gap-8 items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center text-gray-500">
                [Photo]
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                [Bio paragraph 1 - background, family, community ties]
              </p>
              <p className="text-lg text-gray-700">
                [Bio paragraph 2 - experience, qualifications, why running]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Issues */}
      <section id="issues" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Issues</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Issue 1', 'Issue 2', 'Issue 3'].map((issue, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">{issue}</h3>
                <p className="text-gray-600">[Description of stance on this issue]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="involved" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">Help us spread the word in your community.</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Sign Up →</a>
            </div>
            <div id="donate" className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Donate</h3>
              <p className="text-gray-600 mb-4">Support our campaign with a contribution.</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Donate →</a>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Yard Sign</h3>
              <p className="text-gray-600 mb-4">Request a yard sign to show your support.</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Request →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have questions? Want to learn more? Reach out!
          </p>
          <p className="text-lg">
            <a href="mailto:info@joycecrosswhite.com" className="text-blue-600 hover:underline">
              info@joycecrosswhite.com
            </a>
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2">Paid for by [Committee Name]</p>
          <p className="text-blue-200 text-sm">© 2026 Joyce Crosswhite for [Office]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
