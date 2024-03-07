import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
 faGithub,
 faLinkedin,
 faMedium,
 faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { Box, HStack } from "@chakra-ui/react";

const socials = [
 {
   icon: faEnvelope,
   url: "mailto: hello@example.com",
 },
 {
   icon: faGithub,
   url: "https://www.github.com/sureskills",
 },
 {
   icon: faLinkedin,
   url: "https://www.linkedin.com/in/sureskills/",
 },
 {
   icon: faMedium,
   url: "https://medium.com/@sureskills",
 },
 {
   icon: faStackOverflow,
   url: "https://stackoverflow.com/users/sureskills",
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