import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
 faGithub,
 faInstagram,
 faLinkedin,
 faMedium,
 faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { Box, HStack } from "@chakra-ui/react";

const socials = [
 {
   icon: faEnvelope,
   url: "mailto: hello@littlelemmon.com",
 },
 {
   icon: faLinkedin,
   url: "https://www.linkedin.com/in/littlelemmon/",
 },
 {
   icon: faFacebook,
   url: "https://facebook.com/littlelemmon",
 },
 {
   icon: faInstagram,
   url: "https://instagram.com/users/littlelemmon",
 },
];

const Socials = () => {
 return ( 
    <nav>
        <HStack spacing={8}>
            {socials.map(({ icon, url }) => (
               <a
                 key={url}
                 href={url}
                 target="_blank"
                 rel="noopener noreferrer"
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a>
             ))}
           </HStack> 
    </nav>
 );
};

export default Socials; 