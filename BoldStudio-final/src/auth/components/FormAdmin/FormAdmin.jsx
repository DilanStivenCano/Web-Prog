import { useState } from "react";
import { db } from "../../../firebase/firebase.config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "firebase/firestore";
import './FormAdmin.css'

export function FormAdmin({ onFormSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [project, setProject] = useState("");
  const [image, setImage] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const projectsCollection = collection(db, 'projects');
      const newDocRef = await addDoc(projectsCollection, { title, description, category, project});

      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + newDocRef.id);
      const uploadTask = uploadBytesResumable(storageRef, image);

  uploadTask.on('state_changed', 
    (snapshot) => {
      // Puedes mostrar el progreso del subido aquí
    }, 
    (error) => {
      console.error("Error al enviar image a Firebase:", error);
    }, 
    async () => {
      // Cuando el subido se completa, obtén la URL de la imagen
      const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

      // Aquí puedes actualizar el documento en Firestore con la URL de la imagen
      await updateDoc(doc(db, 'projects', newDocRef.id), { imageUrl });

      setTitle("");
      setDescription("");
      setCategory("");
      setProject("");
      setImage(null);
      setShowSuccessModal(true);

    })} catch (error) {
     console.error("Error al enviar datos a Firebase:", error);
    }
   };
   const handleImageChange = (e) => {
    setImage(e.target.files[0]);
   };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputContainer">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e)}
            required
          />
        </div>
        <div className="inputContainer">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => handleDescriptionChange(e)}
            required
          />
        </div>
        <div className="filterPost">
          <label>Category:</label>
          <select value={category} onChange={(e) => handleCategoryChange(e)} required>
            <option value="">Select a category</option>
            <option value="App / Web Development">App / Web Development</option>
            <option value="UI Design">UI Design</option>
            <option value="UX Design">UX Design</option>
            <option value="Prototyping">Prototyping</option>
            <option value="Branding">Branding</option>
          </select>
        </div>
        <div className="inputContainer">
          <label>Project link:</label>
          <input
            type="text"
            value={project}
            onChange={(e) => handleProject(e)}
            required
          />
        </div >
        <div className="uplodadFileInput">
        <label>Miniature:</label>
        <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        /></div>
        <button type="submit" className="publishButton">Publish</button>
      </form>

      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <p>New project created!</p>
            <button onClick={closeModal}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}
