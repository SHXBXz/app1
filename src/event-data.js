import React from 'react'

export function EventData2() {
    const onClickStartStop  = (ev)=>{
    let t = eval.target.innerText
    let s = (t === 'Start') ?'Stop' : 'Start'
    ev.target.innerText = s
    }
    const onClickAdd = (ev) => {
    let t = ev.target.innerText
    let r = eval(t)
    alert(`${t} = ${r}`)
    }
    return (
    <div style={{textAlign:'center', marginTop:20}}>
        <button onClick={(ev) => onClickStartStop(ev)}>Start</button><br/><br/>
        <button onClick={(ev) => onClickAdd(ev)}>10 + 0</button><br/><br/>
        <button onClick={(ev) => onClickAdd(ev)}>30 * 40</button><br/><br/>
    </div>
    )
}