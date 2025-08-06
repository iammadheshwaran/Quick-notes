import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-100 to-purple-100 ">
        {/* Main content area grows to push footer down */}
        <main className="flex-grow w-full max-w-xl mx-auto space-y-10">
          <Home />
        </main>


        {/* Footer */}
        <footer className="text-center font-poppins text-sm text-gray-500 mt-8 pb-3">
          © 2025 QuickNotes. Made with 💻 by {' '}
          <a
            href="https://github.com/iammadheshwaran"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-blue-600"
          >
            Marsh
          </a>
        </footer>
      </div>
    </>
  )
}

export default App