import React, { useState, useEffect, useRef } from 'react';
import { StaffMember, HeaderTitle } from './../../components';
import Dilan from '../../assets/Dilan.png';
import Santiago from '../../assets/Santiago.png';
import Juli from '../../assets/Juli.png';
import Ana from '../../assets/Ana.png';
import './StaffPage.css';

const staffData = [
  { img: Santiago, role: 'BACKEND DEVELOPER' },
  { img: Juli, role: 'FRONTEND DEVELOPER' },
  { img: Ana, role: 'UI DESIGNER' },
  { img: Dilan, role: 'UX DESIGNER' },
];

export function StaffPage() {
  const [showTitle, setShowTitle] = useState(false);
  const colors = ['#01B0B5', '#FFF', '#ED447B', '#121113'];
  const staffSectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setShowTitle(entry.isIntersecting);
      });
    }, options);

    if (staffSectionRef.current) {
      observer.observe(staffSectionRef.current);
    }

    return () => {
      if (staffSectionRef.current) {
        observer.unobserve(staffSectionRef.current);
      }
    };
  }, []);

  return (
    <div className='staffBody'>
      {showTitle && (
        <div className="title">
          <HeaderTitle title="Staff"/>
        </div>
      )}
      
      <div className="staffMembers" ref={staffSectionRef}>
        {staffData.map((staff, index) => (
          <StaffMember 
            key={index} 
            img={staff.img} 
            role={staff.role} 
            backgroundColor={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
}
