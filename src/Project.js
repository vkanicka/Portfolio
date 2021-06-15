import React, { useState } from 'react'
import { Button, Dimmer, Header, Image, Popup } from 'semantic-ui-react'
import comments from "./reviews/proj1"

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
  const commentColors =
  // [
  //   'olive','green','teal','purple','grey'
  // ]
  ['teal','grey','purple']
  const rando = (thisArray) => {return Math.floor(Math.random()*(thisArray.length))}

    const popupStyle = {
      opacity: 0.9,
      padding: '2em',
      color: 'white',
      background:'black',
      "whiteSpace":'nowrap',
      "border-radius":'50px'
    }

    const content = (
      <div>
        <Header as='h2' inverted>
          {props.title}
        </Header>

        <Button href={props.url} className="inverted purple">Play</Button>
        <Button href={props.github} className="inverted purple">GitHub</Button>

        <Popup
        content= {

            <div >
            {comments.map((comment, c) =>{
            return (

              <div margin='5px' key={`comment-${c}`}><i className={commentIcons[rando(commentIcons)]+' icon '+commentColors[rando(commentColors)].toLowerCase()}></i>      {comments[c]}</div>

            )
            })}
            </div>
          }
        position='right center'
        style={popupStyle}
        size='huge'
        wide='very'
        offset={[-200,50]}
        trigger={<Button className="inverted purple">Reviews</Button>}/>
      </div>
    )




    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={()=>toggleActive(!active)}
        onMouseLeave={()=>toggleActive(!active)}
        size='large'
        src={props.image}
      />
    )
}
