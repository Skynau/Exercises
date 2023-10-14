import { conversation } from "./chat-array"
export const cleverbotInput = document.querySelector('.conversation')



export const looping = (i) => {
    if (conversation[i].name === 'Cleverbot') {
        cleverbotInput.innerHTML += `<div class="message message--local">
            <div class="message__text">
                ${conversation[i].text}
            </div>
        </div>`
    } else {cleverbotInput.innerHTML += `<div class="message message--remote">
            <div class="message__text">
                ${conversation[i].text}
            </div>
        </div>`
    }
}
