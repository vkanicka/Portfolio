import React, { useState } from 'react'
import { Button, Dimmer, Header, Image, Popup } from 'semantic-ui-react'

export default function Project (props) {
  const [active,toggleActive] = useState(false)

  const commentIcons = [
  'comment',
  'comment outline',
  'comment alternate',
  'comment alternate outline',
  'comments',
  'comments outline'
]
  const commentColors = ['teal','grey','purple']
  const rando = (thisArray) => {return Math.floor(Math.random()*(thisArray.length))}
  const popupStyle = {
      opacity: 0.95,
      padding: '2em',
      color: '#caff8a',
      background:'black',
      "whiteSpace":'nowrap',
      "border-radius":'50px'
    }
  const content = (
    <div>
      <Header as='h2' inverted>
        {props.project.title}
      </Header>

      <Button href={props.project.url} target='none' className="inverted purple">App</Button>
      <Button href={props.project.github} target='none' className="inverted purple">GitHub</Button>

      <Popup
      content= {
          <div >
          {props.project.comments.map((comment, c) =>{
          return (
            <div margin='5px' key={`comment-${c}`}><i className={commentIcons[rando(commentIcons)]+' icon '+commentColors[rando(commentColors)].toLowerCase()}></i>      {comment}</div>
          )
          })}
          </div>
        }
      position='right center'
      style={popupStyle}
      size='large'
      wide='very'
      offset={[-100,20]}
      trigger={<Button className="inverted purple">Reviews</Button>}/>
    </div>
  )

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={()=>toggleActive(true)}
        onMouseLeave={()=>toggleActive(false)}
        size='large'
        src={props.project.image}
      />
    )
}
