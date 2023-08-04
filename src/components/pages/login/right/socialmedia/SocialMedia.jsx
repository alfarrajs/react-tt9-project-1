import React from 'react'
import SocialMediaElement from './SocialMediaElement'
import { StyledSocialMedia } from './style'

const SocialMedia = () => {
  const sites = [{
    id : '1',
    name : 'google',
    url : '!#',
    icon : '/assets/socialmedia/google.png'
  },{
    id : '2',
    name : 'twitter',
    url : '!#',
    icon : '/assets/socialmedia/twitter.png'
  },{
    id : '3',
    name : 'linkedin',
    url : '!#',
    icon : '/assets/socialmedia/linkedin.png'
  },{
    id : '4',
    name : 'github',
    url : '!#',
    icon : '/assets/socialmedia/github.png'
  },
]
  return (
    <StyledSocialMedia className='social-media'>
      {sites.map(site => {
        return <SocialMediaElement url={site.url} icon={site.icon} name={site.name} />
      })}
    </StyledSocialMedia>
  )
}

export default SocialMedia