const barre = document.querySelector('.barre')

function barref(temps,color){
    let j= 0
    let veri = false
    barre.style.width = 0+'px'
    barre.style.borderRadius = 10+'px'
    barre.style.backgroundColor = color
    const t = setInterval(() => {
        ++j
        barre.style.width = j+'%'
        barre.innerHTML = j+' %'
        if(j == 100) {
            clearInterval(t)
            const t1 = setInterval(() => {
                --j
                if(j == 99){
                    barre.style.width = 0+'px'
                    clearInterval(t1)
                    barre.innerHTML = ''
                }
            }, 1000);
        }
    }, temps);

}

let h = innerHeight -10
function anim(j) {
    let i = 0
    const par = document.querySelector('.div1')
    const t = setInterval(() => {
        let w =Math.round(Math.random()*innerWidth) -20
        let op = (Math.random() *1).toFixed(2)
        i++ 
        const div = document.querySelector('.div')
        const e = document.createElement('div')
        e.className = 'div'
        e.style.opacity = ''+op
        e.style.transform = 'translate('+w+'px,0px)'
        par.insertBefore(e,div)
        setTimeout(() => {
            e.style.transform = 'translate('+w+'px,'+h+'px)'
            setTimeout(() => {
                par.removeChild(e)
            }, 5000);
        }, 200);
        if(i=== j){
            clearInterval(t)
            i =0
        } 
    }, 50);

}
window.onclick = () =>  anim(50)

// const def = document.querySelector('.def')
// // def.style.height =  innerHeight+'px'
// setInterval(() => {
//     def.style.transform = 'all 2s'
//     let tr = 'translate('+innerWidth+'px,'+innerHeight+'px) '
//     let rt = 'rotate(60deg)'
//     def.style.transform = tr+rt
//     setTimeout(() => {
//         // def.style.transition = '0s'
//         def.style.transform = 'translate(0,0) '+rt
        
//         // def.style.transform = 'all 2s'
//     }, 2000);
// }, 3000);
