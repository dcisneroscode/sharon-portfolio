import { Desktop } from "./Desktop.js";
import { Mobile } from "./Mobile.js";

function Desk(){
    const body = document.querySelector('body');
    const desktop = new Desktop();
    const watch = new ResizeObserver(entries =>{
        for(let entrie of entries){
            const viewport = entrie.contentRect;
            const viewportWidth = viewport.width;
            if(viewportWidth > 1152){
                desktop.DesktopAdd();
            }else{
                desktop.DesktopRemove();
            }

        }

    })

    watch.observe(body);
    

}

function Mobil(){
    const body = document.querySelector('body');
    const mobile = new Mobile();
    const watch = new ResizeObserver(entries =>{
        for(let entrie of entries){
            const viewport = entrie.contentRect;
            const viewportWidth = viewport.width;
            if(viewportWidth >= 320 && viewportWidth <= 1150){
                mobile.MobileAdd();
            }else{
                mobile.MobileRemove();
            }

            
        }

    })

    watch.observe(body);

}

export { Desk };
export { Mobil };
