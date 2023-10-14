import { conversation } from "./chat-array"
import { looping } from "./function" 
import { Conversation } from "./Classes/Conversation"
import { cleverbotInput } from "./function"

const conversationClass = new Conversation(cleverbotInput)

conversation.forEach((element, i) => {
    
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
})
