import { useState } from 'react';
import { useProject } from '../../hooks/useProject'; 
import './FilterWork.css'

export function FilterWork({ onFilter }) {
  const { projects } = useProject();
  const [filterText, setFilterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
    if (typeof onFilter === 'function') {
     onFilter({ text: e.target.value, category: selectedCategory });
    }
   };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    if (typeof onFilter === 'function') {
      onFilter({ text: filterText, category: e.target.value });
    }}

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter(project => project.category === selectedCategory);
  const searchedProjects = filterText === "" ? filteredProjects : filteredProjects.filter(project => project.title.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <>
    <div className='filterBody'>

      <div className='filterContainer'>
        <h3>Filter By:</h3>

        <div className='filterName'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Search names, projects or categories"
            value={filterText}
            onChange={handleFilterTextChange}
          />
        </div>

        <div className='filterOption'>
          <label htmlFor="select">Category</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">All</option>
            <option value="App / Web Development">App / Web Development</option>
            <option value="UI Design">UI Design</option>
            <option value="UX Design">UX Design</option>
            <option value="Prototyping">Prototyping</option>
            <option value="Branding">Branding</option>
          </select>
        </div>

      </div>

      <div className='cardBody'>
        {searchedProjects.map(project => (
          <div key={project.id} className='card'>
            <a href={project.project} target="_blank" rel="noopener"><img src={project.imageUrl}/></a>
            <a href={project.project} target="_blank" rel="noopener"><h3>{project.title}</h3></a>
            <p>{project.description}</p>
            <p>{project.category}</p>
            {/* <p>{project.project}</p> */}
          </div>
        ))}
      </div>

    </div>
    </>
  );
}
