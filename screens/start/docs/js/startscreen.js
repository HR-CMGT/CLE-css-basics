import { GameObject } from "./gameobject.js";
import { Gamescreen } from "./gamescreen.js";
export class Startscreen extends GameObject {
    constructor(game) {
        super("startscreen");
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.element.appendChild(text);
        this.element.appendChild(btn);
        text.innerText = "Robot Clicker";
        btn.innerText = "START GAME";
        btn.addEventListener("click", () => {
            let newScreen = new Gamescreen(game);
            game.switchScreen(newScreen);
        });
    }
}
//# sourceMappingURL=startscreen.js.map