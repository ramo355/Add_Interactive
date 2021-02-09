import { modal } from './modals/modals.js'
import { tabs } from './modals/tabs.js'

window.addEventListener('DOMContentLoaded' , () => {
    modal();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content','active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div','after_click')
}) 