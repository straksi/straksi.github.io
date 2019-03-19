window.addEventListener('DOMContentLoaded', () => {

    const boxImg = document.querySelector('.image img'),
    grayscale = document.querySelector('#grayscale'),
    contrast = document.querySelector('#contrast'),
    brightness = document.querySelector('#brightness'),
    sepia = document.querySelector('#sepia'),
    saturate = document.querySelector('#saturate'),
    size = document.querySelector('#size'),
    topLeftRadius = document.querySelector('#topLeft'),
    bottomRightRadius = document.querySelector('#bottomRight'),
    reset = document.querySelector('#reset'),
    btnM = document.querySelector('.btnM'),
    messageItem = document.querySelector('.message_item'),
    messageItemUl = messageItem.querySelector('ul'),
    liAdder = document.querySelector('#input'),
    input = document.querySelector('.input input'),
    liMenu = document.querySelectorAll('.nav-menu>ul>li')
    defaultsFilters = {
        grayscale:0,
        contrast:100,
        brightness:100,
        sepia:0,
        saturate:100,
        size:50
    },
    itemLiArray=[];  
    grayscale.addEventListener('input', onChange);
    contrast.addEventListener('input', onChange);
    brightness.addEventListener('input', onChange);
    sepia.addEventListener('input', onChange);
    saturate.addEventListener('input', onChange);
    topLeftRadius.addEventListener('input', onChangeRadius);
    bottomRightRadius.addEventListener('input', onChangeRadius);
    size.addEventListener('input',()=>{
        boxImg.style.transform = `scale(${size.value*0.02})`;
        reset.disabled=false;
    });
    input.addEventListener('input',()=>{
        boxImg.setAttribute('src', input.value);
    });
    reset.addEventListener('click', ()=>{
        grayscale.value = defaultsFilters.grayscale;
        contrast.value = defaultsFilters.contrast;
        brightness.value = defaultsFilters.brightness;
        sepia.value = defaultsFilters.sepia;
        saturate.value = defaultsFilters.saturate;
        size.value = defaultsFilters.size;
        boxImg.style.filter =`
        grayscale(${defaultsFilters.grayscale}%)
        contrast(${defaultsFilters.contrast}%)
        brightness(${defaultsFilters.brightness}%)
        sepia(${defaultsFilters.sepia}%)
        saturate(${defaultsFilters.saturate}%)`; 
        boxImg.style.transform = `scale(${defaultsFilters.size*0.02})`;
        reset.disabled=true;
    });
    function onChange(){
        reset.disabled=false;
        boxImg.style.filter =`
        grayscale(${grayscale.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        saturate(${saturate.value}%)`;   
    }
    function onChangeRadius(){
        boxImg.style.borderTopLeftRadius = `${topLeftRadius.value}%`;
        boxImg.style.borderBottomRightRadius = `${bottomRightRadius.value}%`;
    }
    btnM.addEventListener('click',()=>{
        
        if(messageItem.style.animation){
            messageItem.style.animation = `hideM 0.5s ease forwards`;
            setTimeout(()=>{
                messageItem.style.borderRight = ``
                messageItem.style.animation = '';
            }, 450);
        }else{
            messageItem.style.animation = `showM 0.5s ease forwards`;
            messageItem.style.borderRight = `5px solid #fff`
        }
    });
    liAdder.addEventListener('keydown', event => {
        if(event.key ==='Enter' || event.keyCode === 13){
            if(liAdder.value) {
                console.log(itemLiArray); 
                itemLiArray.unshift({
                    content:liAdder.value,
                    done:false,
                    selected:false});
                liAdder.value='';
                addLiEl();
            }
           
        }
    });
    function addLiEl(){
        messageItemUl.innerHTML = '';
        for(let i=0; i<itemLiArray.length; i++){
            const arrayItem = itemLiArray[i];
            const liElement = document.createElement('li');
            liElement.innerHTML=arrayItem.content;
            messageItemUl.appendChild(liElement);

            const removeBtn = document.createElement('div');
            removeBtn.classList.add('btn__remove');
            removeBtn.innerHTML = '&times';
            liElement.appendChild(removeBtn);
           
            messageItem.style.display = 'block';
           
            removeBtn.addEventListener('click',()=>{
                //const index = itemLiArray.indexOf(arrayItem);
                itemLiArray.splice(i, 1)
                addLiEl();
                console.log(i)
                if(itemLiArray.length==0){
                    messageItem.style.display = 'none';
                }
            })
        }
    }
   
    liMenu.forEach(function(item){
        const subMenu = item.querySelector('.sub__menu');
        item.onmouseover = function(){  
            subMenu.style.animation = `showSubMenu 0.6s ease forwards`;
        };
        item.onmouseout = function(){  
            subMenu.style.animation = `hideSubMenu 0.2s ease forwards`;
        };
    });
    mvcTest();
function mvcTest(){
    const productsList=[],
    productName = document.querySelector('.productName'),
    productDiscroption = document.querySelector('.productDiscroption'),
    productPrice = document.querySelector('.productPrice'),
    tableProduct = document.querySelector('.tableProduct tbody'),
    productAdd = document.querySelector('.productAdd');
    productAdd.addEventListener('click', ()=>{
        if(productName.value && productDiscroption.value && productPrice.value){
            productsList.push({
                name:productName.value,
                discroption:productDiscroption.value,
                price:productPrice.value});
                productName.value = '';
                productDiscroption.value = '';
                productPrice.value= '';
        } 
        addInTable();
    });
    function  addInTable(){
        tableProduct.innerHTML = '';
        for(let i=0; i<productsList.length; i++){
            const arrayItem = productsList[i],
            tableProductTr = document.createElement('tr'),
            tableProductTdName = document.createElement('td'),
            tableProductTdDiscroption = document.createElement('td'),
            tableProductTdPrice = document.createElement('td');
            tableProductTdName.innerHTML = arrayItem.name;
            tableProductTdDiscroption.innerHTML=arrayItem.discroption;
            tableProductTdPrice.innerHTML=arrayItem.price;
            tableProductTr.appendChild(tableProductTdName);
            tableProductTr.appendChild(tableProductTdDiscroption);
            tableProductTr.appendChild(tableProductTdPrice);        
            tableProduct.appendChild(tableProductTr);
        }
    }
}
superButtonMachine();
function superButtonMachine(){
    const superBtn = document.querySelector('.super-btn__main'),
    superBtnIcon = superBtn.querySelector('.icon'),
    btnBblockSecondary = document.querySelector('.btn-block__secondary'),
    btnBblockSecondaryTelegram = document.querySelector('.btn-block__secondary_telegram'),
    btnBblockSecondaryViber = document.querySelector('.btn-block__secondary_viber'),
    pulseFrame = document.querySelectorAll('.pulse-frame'),
    secondaryBtn = document.querySelector('.super-btn__secondary');
    superBtn.addEventListener('click', ()=>{
        if(superBtn.classList.contains('active')){
            superBtn.classList.remove('active');
            btnBblockSecondary.classList.remove('active');
            btnBblockSecondaryTelegram.classList.remove('active');
            btnBblockSecondaryViber.classList.remove('active');
            secondaryBtn.classList.remove('active');
            // superBtnIcon.classList.remove('active');
            setTimeout(()=>{
                superBtnIcon.classList.remove('fa-times');
                superBtnIcon.classList.add('fa-comment');
            },250)
            pulseFrame.forEach (pulse=>{
                pulse.style.display='block';
                pulse.classList.remove('active');
            });
        }else{
            superBtn.classList.add('active');
            btnBblockSecondary.classList.add('active');
            btnBblockSecondaryTelegram.classList.add('active');
            btnBblockSecondaryViber.classList.add('active');
            secondaryBtn.classList.add('active');
            // superBtnIcon.classList.add('active');
            setTimeout(()=>{
                superBtnIcon.classList.remove('fa-comment');
                superBtnIcon.classList.add('fa-times');
            },250);
            // setTimeout(()=>{
            //     superBtnIcon.classList.remove('active');
            // },750);
            pulseFrame.forEach (pulse=>{
                pulse.style.display='none';
                pulse.classList.add('active')
            });
        }
        superBtnIcon.classList.add('active');
        setTimeout(()=>{
            superBtnIcon.classList.remove('active');
        },750);
    })

  }
});