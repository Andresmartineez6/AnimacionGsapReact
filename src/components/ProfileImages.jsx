
import React, { useEffect } from 'react';


const ProfileImages = ({ 
  teamMembers, 
  profileImagesRef, 
  onImageHover, 
  onImageLeave, 
  onImageTouch,
  onDocumentTouch 
}) => {
  


  useEffect(() => {

    //configurar los evcentos para movil
    if (window.innerWidth <= 900) {

      document.addEventListener('touchstart', onDocumentTouch);
      
      return () => {
        document.removeEventListener('touchstart', onDocumentTouch);
      };

    }

  },[onDocumentTouch]);


  const handleImageInteraction = (index, eventType, event) => {

    if (window.innerWidth > 900) {

      //eventos para escritorio
      if (eventType === 'mouseenter') {
        onImageHover(index);

      } else if (eventType === 'mouseleave') {
        onImageLeave(index);

      }

    } else {
      //eventos para movil
      if (eventType === 'touchstart') {
        event.preventDefault();
        onImageTouch(index, event);

      }

    }

  };


  return (
    <div className="profile-images" ref={profileImagesRef}>
      {teamMembers.map((member, index) => (
        <div 
          key={index}
          className="img"
          onMouseEnter={(e) => handleImageInteraction(index, 'mouseenter', e)}
          onMouseLeave={(e) => handleImageInteraction(index, 'mouseleave', e)}
          onTouchStart={(e) => handleImageInteraction(index, 'touchstart', e)}
        >
          <img src={member.image} alt={member.name} />
        </div>
      ))}
    </div>
  );

  
};

export default ProfileImages;
