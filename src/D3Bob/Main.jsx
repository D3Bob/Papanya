import React, {useState,useContext} from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, Header, Group, Cell, List, PanelHeaderBack, PanelHeaderButton,CardGrid,Card, CardScroll} from '@vkontakte/vkui';
import Context from './../Context'




import Icon28GameOutline from '@vkontakte/icons/dist/28/game_outline';
import Icon28RadiowavesLeftAndRightOutline from '@vkontakte/icons/dist/28/radiowaves_left_and_right_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28HeadphonesOutline from '@vkontakte/icons/dist/28/headphones_outline';
import Icon28ArrowLeftOutline from '@vkontakte/icons/dist/28/arrow_left_outline';
import Icon24MoreHorizontal  from '@vkontakte/icons/dist/24/more_horizontal';



import Paper from './Paper'
import Stone from './Stone'
import Scissors from './Scissors'
import Battle from './Battle';


function Main(props) {
  
  var {setState} = useContext(Context)

  
  var ScrollEnemy = 0;

  function MakeChoice(string) {

    var nowMainState = {
      activePanel : props.state.activePanel,
      selection : string,
      enemySelection : props.state.enemySelection
    }  

      setState(nowMainState)
      console.log(string)
      ScrollEnemy = document.getElementsByClassName('HorizontalScroll__in')[0]
      ScrollEnemy.style.overflow = "hidden"

      
  }






      
  function getStyle(string) {
    if(string == props.state.selection)
      return {border : '2px solid green', height: 96,   borderRadius : 5}
    else 
      return {height: 96}  
  }

  function logicEnemy() {
    let mi = 4, count = 21;

    let ran = Math.floor(Math.random() * count) + mi; // [4 ; 24]
    let countScroll = 16 + 8 * (ran-1) + 224 * (ran-1)
    let plusScroll = parseInt((window.innerWidth - 240)/2 + 8)
    let ans = countScroll - plusScroll


    let startLoop = performance.now()
    let FullTime = 2000
        requestAnimationFrame(function loop(timeLoop) {
        let del = (timeLoop - startLoop) / FullTime
        let progress = Math.sqrt(del)

        ScrollEnemy.scrollTo(parseInt(ans * progress), 0)



        console.log('loop')
        if(del < 1) requestAnimationFrame(loop)
    })
        return ran
  }


  function Brain(string) {
    MakeChoice(string)
    var index = logicEnemy()
    console.log(index)

    var enemyString = ''
    if(index % 3 == 0) enemyString = 'Stone'
    if(index % 3 == 1) enemyString = 'Paper'
    if(index % 3 == 2) enemyString = 'Scissors'
     
    var nowMainState = {
      activePanel : "vs",
      selection : string,
      enemySelection : enemyString
    }  
    setTimeout(()=>{
        setState(nowMainState)
    }, 4000)

    
    console.log(props.state)
  }

  


  function moveToGame() {
        var newState = {
          activePanel : 'game',
          selection : props.state.selection,
          enemySelection : props.state.enemySelection
        }
        setState(newState)
        console.log()
  }

  function moveToList() {
    var newState = {
      activePanel : 'list',
      selection : props.state.selection,
      enemySelection : props.state.enemySelection
    }
    setState(newState)
}


      

    return(
<View activePanel={props.state.activePanel}>

  <Panel id="list" >
    <PanelHeader>
      Список
    </PanelHeader>

    
    

    <Group>
      <List>
        <Cell expandable before={<Icon28GameOutline />} onClick={() => setState({
           activePanel : 'game',
           selection : props.state.selection,
           enemySelection : props.state.enemySelection
        })} >Играть</Cell>
      </List>
    </Group>

    <Group>
    <img src="https://i.ytimg.com/vi/FK5LbrccjkE/maxresdefault.jpg" style={{width: window.innerWidth}}></img>

        
    
        </Group>
  </Panel>








  <Panel id="game" >
    

                     <PanelHeader
                          left={<PanelHeaderBack onClick={() => setState({
                            activePanel : 'list',
                            selection : props.state.selection,
                            enemySelection : props.state.enemySelection
                          })}/>}
                          right={<PanelHeaderButton><Icon24MoreHorizontal /></PanelHeaderButton>}
                        >
                          Запись
                    </PanelHeader>

    <Group separator="hide" description="Ход соперника" >
      <CardScroll id="GameScroll">


       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 




      </CardScroll>
    </Group>

    <Group>
      <CardGrid>
                <Card size="s" onClick={()=> {if(props.state.selection == 'none')  Brain('Stone')}}>
                    <div style={ getStyle('Stone') } >
                        <Stone Type={"standard"}/>
                    </div>
                </Card>
                <Card size="s"  onClick={()=> {if(props.state.selection == 'none') Brain('Scissors')}}>
                <div style={ getStyle('Scissors') } >
                        <Scissors Type={"standard"}/>
                    </div>
                </Card>
                <Card size="s" style={{ height: 96 }} onClick={()=>  { if(props.state.selection == 'none') Brain('Paper')}}>
                    <div style={ getStyle('Paper') } >
                        <Paper Type={"standard"}/>
                    </div>
                </Card>
      </CardGrid>
    </Group>
    <Header mode="secondary">Ваш ход</Header>


  
     
    

    {/* <Group separator="hide" description="Ход соперника" >
      <CardScroll id="GameScroll">


       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 
       <Paper Type="mix"/> 
       <Scissors Type="mix"/> 
       <Stone Type="mix"/> 




      </CardScroll>
    </Group> */}
   





 
  </Panel>




  <Panel id="vs" >
    <PanelHeader>
      Бой
    </PanelHeader>

    
    <Group>
     
    <CardGrid>
                <Card size="s" >
                    <div style={{border : "2px solid red", borderRadius : 5}} >
                       {props.state.enemySelection == 'Stone' ? <Stone Type={"standard"}/> : ''}
                       {props.state.enemySelection == 'Paper' ? <Paper Type={"standard"}/> : ''}
                       {props.state.enemySelection == 'Scissors' ? <Scissors Type={"standard"}/> : ''}
                    </div>
                </Card>

                <Card size="s"  >
                 
                    <img src="https://yt3.ggpht.com/a/AATXAJwMUeNkQJymqT8tPpPeR13n1Rh19ppv5eCb7w=s900-c-k-c0xffffffff-no-rj-mo" style={{ width: '100%', height: '100%' }}></img>
                  
                </Card>

                <Card size="s" >
                    <div style={{border : "2px solid green" , borderRadius : 5}} >
                       {props.state.selection == 'Stone' ? <Stone Type={"standard"}/> : ''}
                       {props.state.selection == 'Paper' ? <Paper Type={"standard"}/> : ''}
                       {props.state.selection == 'Scissors' ? <Scissors Type={"standard"}/> : ''}
                    </div>
                </Card>

      </CardGrid>

    </Group>

      

      <Battle state={props.state}/>


  </Panel>







</View>
    );
}




export default Main;

// ()=>{GlobalData.Main.activePanel = "music"}