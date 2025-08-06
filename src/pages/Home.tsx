import NoteForm from "@/components/NoteForm"
import NoteList from "@/components/NoteList"

const Home = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8 bg-gray-50 max-w-screen-sm mx-auto w-full font-poppins">
        <div className="w-full">
            <h1 className="font-poppins text-3xl mb-8 font-bold text-center">Quick Notes</h1>

            <div className="p-6 bg-white rounded-lg shadow">
                <NoteForm/>
            </div>
            <NoteList/>
        </div>
    </div>
  )
}

export default Home