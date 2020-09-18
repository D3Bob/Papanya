import React, {useState, useContext} from 'react';
import { View, Panel, PanelHeader, Header, Group, Cell, List, PanelHeaderBack, PanelHeaderButton,CardGrid,Card, CardScroll, Div, Button} from '@vkontakte/vkui';
import { func } from 'prop-types';
import Context from './../Context'

import Icon28CancelCircleOutline from '@vkontakte/icons/dist/28/cancel_circle_outline';
import Icon28CheckCircleOutline from '@vkontakte/icons/dist/28/check_circle_outline';
import Icon28WaterDropOutline from '@vkontakte/icons/dist/28/water_drop_outline';

{/* <img src="https://i.ytimg.com/vi/0NqOCT0FtTQ/sddefault.jpg" /> */}

function Battle(props) {
    
    var win = [
        ` https://sun9-34.userapi.com/c855628/v855628483/209f4a/Fls9WrHNha8.jpg`,
         `https://yt3.ggpht.com/a/AGF-l7-LI4OOzd83JdJ_NjhmNG4t4VNwVwD8yHS2YA=s900-c-k-c0xffffffff-no-rj-mo`,
         `https://sun9-37.userapi.com/c854228/v854228133/219b9d/8igE1Gzmgjw.jpg`,
         `https://yt3.ggpht.com/a/AGF-l7-O4I5LpwBkxSlxY9jqPLtKAD78x6EZmm7gBw=s900-c-k-c0xffffffff-no-rj-mo`,
         `https://sun9-36.userapi.com/c857424/v857424999/1b9f9d/zHt1NstYYVE.jpg`,
         `https://sun9-46.userapi.com/c853524/v853524036/20fcea/8HBy9xwH-A0.jpg`
    ], loss = [
       ` https://vk.vkfaces.com/834304/v834304005/f8893/kUhjgb2yZD4.jpg`,
         `https://avatars.mds.yandex.net/get-zen_doc/133957/pub_5d85ec6b35ca3100ac3411b3_5d87373f3d873600adff8e2e/scale_1200`,
         `https://avatars.mds.yandex.net/get-zen_doc/1931664/pub_5caf3a060b1fb500b33a8ae3_5caf41f3cdc11f00b2fb1dd5/scale_1200`,
        ` https://favouritecs.ru/files/avatars/1580823326.jpg`,
        ` https://i.ytimg.com/vi/ihKmdYoyDCQ/hqdefault.jpg`,
         `https://sun3-12.userapi.com/c857428/v857428916/1b096a/9YR0dH0PuVw.jpg`,
        ` https://steamuserimages-a.akamaihd.net/ugc/936056931457762586/7CC367517DBF8400D669618C9B63B912A777F1F0/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true`
            ], draw = [
                 `https://img.youtube.com/vi/GBEgFn3xeCM/0.jpg`,
                 `https://i.ytimg.com/vi/oYzRu6nEXRM/hqdefault.jpg`,
                 `https://i.ytimg.com/vi/OIGTQuqh3PM/hqdefault.jpg`,
                 `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_image/881785bb50d/9b813169ed585c57bb7be/med_1528412157_00032.jpg`
            ];


    function getWin() {     
        return win[ Math.floor(Math.random() * win.length) % win.length]
    }
    function getLoss() {
        return loss[ Math.floor(Math.random() * loss.length) % loss.length]
    }
    function getDraw() {
        return draw[ Math.floor(Math.random() * draw.length) % draw.length]
    }
   


var {setState} = useContext(Context)

   function repeat() {
    setState({
        activePanel : "game",
        selection : 'none',
        enemySelection : 'none'
    })
   }


    if(props.state.selection == props.state.enemySelection) {
        var string = getDraw()
        return(
            <Group>
               <Cell before={<Icon28WaterDropOutline/>}>Ничья</Cell>
                <img src={string} style={{width : window.innerWidth}}/>

                <Div>
                    <Button size="xl" mode="secondary" onClick={() => repeat()}>Повторить</Button>
                </Div>
            </Group>
           
        )
    }

    if(
        props.state.selection == 'Stone' && props.state.enemySelection == 'Paper'
                    ||
        props.state.selection == 'Paper' && props.state.enemySelection == 'Scissors'  
                    ||
        props.state.selection == 'Scissors' && props.state.enemySelection == 'Stone'            
        ) {

        var string = getLoss()
        return(
            <Group>
                <Cell before={<Icon28CancelCircleOutline/>}>Проигрыш</Cell>
                <img src={string} style={{width : window.innerWidth}}/>

                <Div>
                    <Button size="xl" mode="secondary" onClick={() => repeat()}>Повторить</Button>
                </Div>
           

            </Group>

                       
        )

        }

        if(
            props.state.selection == 'Paper' && props.state.enemySelection == 'Stone'
                        ||
            props.state.selection == 'Scissors' && props.state.enemySelection == 'Paper'  
                        ||
            props.state.selection == 'Stone' && props.state.enemySelection == 'Scissors'            
            ) {
    
            var string = getWin()
            return(
                <Group>
                    
                    <Cell before={<Icon28CheckCircleOutline/>}>Победа</Cell>
                    <img src={string} style={{width : window.innerWidth}}/>

                    <Div>
                        <Button size="xl" mode="secondary" onClick={() => repeat()}>Повторить</Button>
                    </Div>
               
                </Group>
                            
            )
    
            }

    
    





    
    
 
}




export default Battle;
