import React from 'react';
import  IconCloud from  '@/components/ui/icon-cloud'

const slugs = [
  "typescript",
  "javascript",
  // "dart",
  "java",
  "react",
  // "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  // "cypress",
  "docker",
  "git",
  // "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const HomeIcon = () => {
  return (
    <div>
      <IconCloud  iconSlugs={slugs} />
      
      </div>
  )
}

export default HomeIcon