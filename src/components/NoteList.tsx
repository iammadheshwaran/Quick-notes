import { useEffect, useState } from "react";
import { db } from "@/lib/firsbase";
import {
    collection,
    onSnapshot,
    deleteDoc,
    doc,
    orderBy,
    query,
} from "firebase/firestore";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

type Note = {
    id: string;
    content: string;
};

const NoteList = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const notesData: Note[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                content: doc.data().content,
            }));

            setNotes(notesData);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, "notes", id));
        toast.success("Note deleted");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl mx-auto min-h-[150px] mt-6">
            <h2 className="text-2xl font-bold mb-4">Your Notes</h2>

            {notes.length === 0 ? (
                <p className="text-gray-400 text-center">No notes yet. Start typing...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-1">
                    {notes.map((note, index) => {
                        const isLastOdd =
                            notes.length % 2 === 1 && index === notes.length - 1;

                        return (
                            <div
                                key={note.id}
                                className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${isLastOdd ? "md:col-span-2 md:justify-self-center md:w-1/2" : ""
                                    }`}

                            >
                                <p className="text-gray-700">{note.content}</p>
                                <Button
                                    onClick={() => handleDelete(note.id)}
                                    className="bg-red-600 hover:bg-red-700 ml-4"
                                >
                                    Delete
                                </Button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default NoteList;
