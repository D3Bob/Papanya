import React, {useState} from 'react';
import { View, Panel, PanelHeader, Header, Group, Cell, List, PanelHeaderBack, PanelHeaderButton,CardGrid,Card, CardScroll} from '@vkontakte/vkui';


function Scissors(props) {
    
    if(props.Type == "mix") {
        return (
            <Card size="m">
            <div style={{ width: 224, height: 96}} > 
                <Scissors Type={"scroll"}/> 
            </div>
          </Card>
        )
    }

    if(props.Type == 'standard') 
        return <img src="https://sun9-8.userapi.com/c854124/v854124319/222ce3/YI1FkKRmdJc.jpg" style={{width: '100%',height:'100%'}} />

    if(props.Type == 'scroll')
        return <img src="https://sun9-8.userapi.com/c854124/v854124319/222ce3/YI1FkKRmdJc.jpg" style={{width: 96,height:96, marginLeft: 64}} /> 
    
}



export default Scissors;
