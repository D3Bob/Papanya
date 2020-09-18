import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css'
import Main from './D3Bob/Main'
import Context from './Context'
import './App.css'

import VIKA from './D3Bob/VIKA.mp3'









function App() {



    var [state, setState] = useState({
        activePanel : "list",
        selection : 'none',
        enemySelection : 'none'
    })
    
    function music() {
        console.log(document.getElementsByClassName('mobilePrestitial__wrapper')[0])
      }

    

    return (
            <Context.Provider value={{setState}} >
                
               
                
               

                <div>
                

                <Main state={state}/>

                <video controls loop autoPlay  preload="auto"  style={{position : "fixed", zIndex : 9999,  bottom : 0, margin: 'auto', left: 0, right : 0 }}>
                    <source src={VIKA} type="video/mp4"></source>
                 </video>
                



                </div>
               

     

            </Context.Provider>
         
            
    );
}

export default App;


