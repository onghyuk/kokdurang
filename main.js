(()=>{

    let yOffset = 0;
  
    let currentScene = 0;

    const sceneInfo = [
        {
            //0
            type: 'sticky',
            heightNum: 5, 
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 main-message.a'),
                messageB: document.querySelector('#scroll-section-0 main-message.b'),
                messageC: document.querySelector('#scroll-section-0 main-message.c'),
                messageD: document.querySelector('#scroll-section-0 main-message.d'),
            },
            values: {
                messageA_opacity: [0, 1]
            }
        },
        {
            //1
            type: 'normal',
            heightNum: 5, 
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            //2
            type: 'sticky',
            heightNum: 5, 
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            //3
            type: 'sticky',
            heightNum: 5, 
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        },
        {
            //4
            type: 'sticky',
            heightNum: 5, 
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-4')
            }
        },
        {
            //5
            type: 'sticky',
            heightNum: 5, 
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-5')
            }
        },
    ];

    function setLayout() {
        //각 스크롤 섹션의 높이 세팅
            for (let i = 0; i < sceneInfo.length; i++) {
            
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
                sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
            }

            yOffset = window.pageYOffset;
            let totalScrollHeight = 0;

            for (let i = 0; i < sceneInfo.length; i++) {
                totalScrollHeight += sceneInfo[i].scrollHeight;
                if (totalScrollHeight >= yOffset) {
                    currentScene = i;
                    break;
                }
            }
            document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    window.addEventListener('load', setLayout)
    window.addEventListener('resize', setLayout);
})