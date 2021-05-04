import { pr } from '../componentsReact/App'
import { clickFullScreen } from '../store/actions'



const MAX_W = 400
const MIN_W = 350



export function createDeviceResizer (emitter) {

    const appWrapper = document.querySelector('.app-wrapper')
    emitter.subscribe('mouseDown')(key => {
        if (key === 'butt-fullscreen') openAppFullScreenIfMobile()
    })

    /** fullscreen */
    const openAppFullScreenIfMobile = () => {


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

    /** resize */
    const resize = e => {
        appWrapper.style.width = window.innerWidth + 'px'
        appWrapper.style.height = window.innerHeight + 'px'
        appWrapper.style.fontSize = Math.max(Math.min(Math.min(window.innerWidth, window.innerHeight), MAX_W), MIN_W) / 50 + 'px'

        if (!document.fullscreenElement) {
            clickFullScreen(pr.dispatch).exitFullScreen()
        }

    }


    window.addEventListener('resize', resize)
    resize()
}



const checkTouch = () => 
    navigator.maxTouchPoints || 'ontouchstart' in document.documentElement



const checkIsCanOrientation = () => 
    typeof window.orientation !== 'undefined'

