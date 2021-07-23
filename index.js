const stackEle = document.querySelector('#stack');
const item = 'This is a test Item';
const itemsList = [
    {
        title:"The German Embassy response",
        desc:"when an unknown printer took a galley",
        avatar:"./images/1.svg"
    },
    {
        title:"A jobe proposle in germany",
        desc:"when an unknown printer took a galley",
        avatar:"./images/2.svg"
    },
    {
        title:"Your universty has sent us the approval",
        desc:"when an unknown printer took a galley",
        avatar:"./images/3.svg"
    },
    {
        title:"Your family did recive the money",
        desc:"when an unknown printer took a galley",
        avatar:"./images/4.svg"
    },
    {
        title:"Your VISA request was accepted",
        desc:"when an unknown printer took a galley",
        avatar:"./images/5.svg"
    },
    {
        title:"The German Embassy response",
        desc:"when an unknown printer took a galley",
        avatar:"./images/1.svg"
    },
    {
        title:"A jobe proposle in germany",
        desc:"when an unknown printer took a galley",
        avatar:"./images/2.svg"
    }
];

const createElement = (type, className=null, innerHTML=null,src=null)=>{
    const ele = document.createElement(type);
    ele.classList.add(className);
    ele.innerHTML = innerHTML;
    if (src != null){
        ele.src = src
    }
    return ele; 
}

document.addEventListener('DOMContentLoaded',(e)=>{

    itemsList.map(({title,desc,avatar})=>{

        const containerEle = createElement('div','item-container')
        const avatarEle = createElement('img','item-avatar',null,avatar)
        const contentEle = createElement('div','content-container')
        const titleEle = createElement('h3','item-title',title)
        const descEle = createElement('span','item-desc',desc)

        contentEle.append(titleEle)
        contentEle.append(descEle)
        
        document.addEventListener('click',(e)=>{
            containerEle.style.transform = null
        })
        
        containerEle.append(avatarEle)
        containerEle.append(contentEle)

        stackEle.append(containerEle)
    })
});

    
stackEle.addEventListener('click',(e)=>{
    e.stopPropagation();
    const containerEle = document.querySelectorAll('.item-container')
    
    let deg = 0;
    let translateY = 0;
    let scale = 0.966666;
    let test = 0.13

    containerEle.forEach((item)=>{
        item.style.transform = `rotate(${deg}deg) translateY(-${translateY}px) scale(${scale})`;
        item.style.transition = `ease-out ${test}s`;
        
        deg += 0.8
        translateY += 71
        scale -= 0.013333
        test += 0.03
    })

})