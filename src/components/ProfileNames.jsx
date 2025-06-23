
import React from 'react';


const ProfileNames = ({ teamMembers, nameElementsRef }) => {

  return (

    <div className="profile-names" ref={nameElementsRef}>

      {/*titulo por defecto de equipo*/}
      <div className="name default">
        <h1>Equipo</h1>
      </div>
      
      {/*nombres del equipo*/}
      {teamMembers.map((member, index) => (
        <div key={index} className="name">
          <h1>{member.name}</h1>
        </div>
      ))}

    </div>
  );

};

export default ProfileNames;
