import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center font-poppins px-4 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 flex items-center justify-center gap-2">
          QuickNotes <span>📝</span>
        </h1>
        <p className="text-gray-600 text-sm">Fast, minimal note-taking — built for speed.</p>
      </div>

      {/* Unified Card Container */}
      <div className="w-full max-w-2xl flex flex-col gap-8">
        {/* Note Creator */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create a New Note</h2>
          <NoteForm />
        </div>

        {/* Notes List */}
        <div>
          <NoteList />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
