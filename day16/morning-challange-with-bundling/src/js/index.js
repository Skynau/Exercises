import { conversation } from "./chat-array"
import { looping } from "./function" 



conversation.forEach((element, i) => {
    setTimeout(() => {
    looping(i)
    // if (conversation[i].name === 'Cleverbot') {
    //     cleverbotInput.innerHTML += `<div class="message message--local">
    //         <div class="message__text">
    //             ${conversation[i].text}
    //         </div>
    //     </div>`
    // } else {cleverbotInput.innerHTML += `<div class="message message--remote">
    //         <div class="message__text">
    //             ${conversation[i].text}
    //         </div>
    //     </div>`
    // }

}, 500 * i)
})
