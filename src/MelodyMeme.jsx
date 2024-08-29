import React from 'react'
import CustomEditor from './CustomEditor'
import Lyrics from './Lyrics'

const MelodyMeme = () => {
  // com
  return (
    <div className='p-4'>
      <h1 className='mb-5 font-bold text-3xl'>MelodyMeme <span className='text-sm'>created by OlaNiyi(saiyan619)</span></h1> 
          <CustomEditor />
          <Lyrics />
       
        
    </div>
  )
}

export default MelodyMeme