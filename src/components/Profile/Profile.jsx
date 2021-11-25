import React from 'react';
import {
  ProfileContainer,
  ProfileTable,
  ProfileTableLines,
  ProfileTableTitle,
  ProfileTableValue
} from './ProfileElements';

const Profile = () => {
  return (
    <>
      <ProfileContainer>
            <ProfileTable>          
                <tbody>
                  <ProfileTableLines>
                    <ProfileTableTitle>Idade</ProfileTableTitle>
                    <ProfileTableValue>31</ProfileTableValue>
                  </ProfileTableLines>
                  <ProfileTableLines>
                    <ProfileTableTitle>Endereço</ProfileTableTitle>                 
                    <ProfileTableValue>Santo André - SP</ProfileTableValue>
                  </ProfileTableLines>
                  <ProfileTableLines>
                    <ProfileTableTitle>Email</ProfileTableTitle>                 
                    <ProfileTableValue>vanessa.vitor.fernandes@gmail.com</ProfileTableValue>
                  </ProfileTableLines>
                  <ProfileTableLines>
                    <ProfileTableTitle>Telefone</ProfileTableTitle>                 
                    <ProfileTableValue >+55 (11) 98581 6287</ProfileTableValue>
                  </ProfileTableLines>
                  <ProfileTableLines>
                    <ProfileTableTitle>Website</ProfileTableTitle>                 
                    <ProfileTableValue>http://www.vanessafernandes.com</ProfileTableValue>
                  </ProfileTableLines>
                </tbody>
            </ProfileTable>
      </ProfileContainer>
    </>    
  );
};

export default Profile;