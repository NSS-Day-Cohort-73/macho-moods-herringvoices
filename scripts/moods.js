
import { database } from "./database.js"

export const getFeelings = () => {

let moodsHTML = ""
for (const item of database){
moodsHTML +=`
<div class="item">
            <h2>${item.name}</h2>
            <img src="${item.imageUrl}">
                <div class="quote-box">
                  <h3>Macho Advice</h3>
                  <div class="quotes">
                  <div>${item.quotes[0]}</div>
                    <div>${item.quotes[1]}</div>
                  </div>
                </div>
        </div>`
}
return moodsHTML
}