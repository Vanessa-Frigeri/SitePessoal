import React from 'react';
import SocialMedias from '../SocialMedias';
import profile from '../../assets/images/profile.jpeg';
import {
  SideProfileContainer,
  SideProfileHeader,
  SideProfileImg,
  SideProfileName,
  SideProfileProfession,
  SideProfileFooter
} from './SideProfileElements';

const SideProfile = () => {
  return (
    <>
      <SideProfileContainer>
        <SideProfileImg src={profile}/>
        <SideProfileHeader>
          <SideProfileName>Vanessa Fernandes</SideProfileName>
          <SideProfileProfession to="/project">Full Stack Developer</SideProfileProfession>
        </SideProfileHeader>
        <SideProfileFooter>
          <SocialMedias/>
        </SideProfileFooter>
      </SideProfileContainer>
    </>    
  );
};

export default SideProfile;