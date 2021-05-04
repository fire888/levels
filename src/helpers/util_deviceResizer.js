const MAX_W = 400
const MIN_W = 350



export function createDeviceResizer () {

    setTimeout(() => {
        const appWrapper = document.querySelector('.app-wrapper')
        const fullScreenButton = document.querySelector('.butt-fullscreen')
    
        /** fullscreen */
        const openAppFullScreenIfMobile = () => {    
            if (document.fullscreenElement) { return; }
        
            if (appWrapper.requestFullscreen) {
                appWrapper.requestFullscreen()
            } else if (appWrapper.mozRequestFullScreen) { 
                appWrapper.mozRequestFullScreen()
            } else if (appWrapper.webkitRequestFullscreen) { 
                appWrapper.webkitRequestFullscreen()
            } else if (appWrapper.msRequestFullscreen) { 
                appWrapper.msRequestFullscreen()
            }
        }
        fullScreenButton.addEventListener('click', openAppFullScreenIfMobile)
    
        /** resize */
        const resize = e => {
            appWrapper.style.width = window.innerWidth + 'px'
            appWrapper.style.height = window.innerHeight + 'px'
            appWrapper.style.fontSize = Math.max(Math.min(Math.min(window.innerWidth, window.innerHeight), MAX_W), MIN_W) / 50 + 'px'
    
            fullScreenButton.style.display = document.fullscreenElement ? "none" : "flex"
        }
        window.addEventListener('resize', resize)
        resize()
    }, 1000)
 
}



const checkTouch = () => 
    navigator.maxTouchPoints || 'ontouchstart' in document.documentElement



const checkIsCanOrientation = () => 
    typeof window.orientation !== 'undefined'

