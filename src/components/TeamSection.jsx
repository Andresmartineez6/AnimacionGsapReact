
import React from 'react';
import ProfileImages from './ProfileImages';
import ProfileNames from './ProfileNames';
import { useTeamAnimation } from '../hooks/useTeamAnimation';
import { teamConfig } from '../config/teamConfig';
import '../styles/TeamSection.css';


const TeamSection = () => {

  const { 
    profileImagesRef, 
    nameElementsRef, 
    handleImageHover, 
    handleImageLeave, 
    handleImageTouch,
    handleDocumentTouch 
  } = useTeamAnimation();

  const teamMembers = teamConfig.members;


  return (
    <section className="team">
      <ProfileImages 
        teamMembers={teamMembers}
        profileImagesRef={profileImagesRef}
        onImageHover={handleImageHover}
        onImageLeave={handleImageLeave}
        onImageTouch={handleImageTouch}
        onDocumentTouch={handleDocumentTouch}
      />
      
      <ProfileNames 
        teamMembers={teamMembers}
        nameElementsRef={nameElementsRef}
      />
    </section>

  );

};

export default TeamSection;
