import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { db } from "@/lib/firsbase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!note.trim()) {
      toast.error("Please fill in the note");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "notes"), {
        content: note,
        createdAt: serverTimestamp(),
      });

      toast.success("Note added");
      setNote("");
    } catch (error) {
      toast.error("Failed to add note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-2xl shadow-md w-full">
      <Input
        placeholder="Type your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        maxLength={50}
        className="text-sm"
      />

      <div className="flex justify-between text-xs text-gray-500">
        <span>{note.length}/50</span>
      </div>

      <Button
        className="w-full"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </Button>
    </div>
  );
};

export default NoteForm;
