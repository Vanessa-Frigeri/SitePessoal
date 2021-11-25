import React from 'react';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaSlack, FaDiscord, FaFacebook } from 'react-icons/fa';
import {
  SocialMediasList,
  SocialMediasListItem,
  Link
} from './SocialMediasElements';

const SocialMedias = () => {
  return(
    <SocialMediasList>              
      <SocialMediasListItem>
        <Link href="https://www.linkedin.com/in/vanessavitorfernandes/"><FaLinkedinIn/></Link>                
      </SocialMediasListItem>
      <SocialMediasListItem>
        <Link href="https://github.com/Vanessa-Frigeri"><FaGithub/></Link>
      </SocialMediasListItem>
      <SocialMediasListItem>
        <Link href="https://wa.me/5511985816287?text=Olá%20tudo%20bem?%20Como%20posso%20te%20ajudar?">
          <FaWhatsapp/>
        </Link>
      </SocialMediasListItem>
      <SocialMediasListItem>
        <Link href="https://vanessafrigeri.slack.com"><FaSlack/></Link>
      </SocialMediasListItem>
      <SocialMediasListItem>
        <Link href="https://discord.com/channels/780534994773999677/905968743014871140">
          <FaDiscord/>
        </Link>                
      </SocialMediasListItem>
      <SocialMediasListItem>
        <Link href="https://www.facebook.com/fernandes.vnessa/">
          <FaFacebook/>
        </Link>
      </SocialMediasListItem>
    </SocialMediasList>
  );
}

export default SocialMedias;