import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import { ProjectContext } from "./projectContext";

export function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getDocs(collection(db, 'projects'));
      const projectsData = response.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
}
