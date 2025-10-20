import { Environment, Lightformer, SpotLight } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (
    <group name='lights'>
        <Environment resolution={256} >
            <group>
                <Lightformer 
                 from="react"
                 intensity={10}
                 scale={10}
                 position={[-10,5,-5]}
                 rotation-y={Math.PI/2}
                />
                 <Lightformer 
                 from="react"
                 intensity={10}
                 scale={10}
                 position={[10,0,1]}
                 rotation-y={Math.PI/2}
                />
            </group>

        </Environment>
        <SpotLight 
        position={[-2,10,5]}
         angle={0.15}
         decay={0}
         intensity={Math.PI* 0.2}
        />
        <SpotLight 
        position={[-2,10,5]}
         angle={0.15}
         decay={0}
         intensity={Math.PI* 0.2}
        />
        <SpotLight 
        position={[0,15,5]}
         angle={0.15}
         decay={0.1}
         intensity={Math.PI* 1}
        />
    </group> 
  )
}

export default StudioLights
