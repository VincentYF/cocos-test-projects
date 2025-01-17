import { _decorator, Component, Node, Label } from "cc";
const { ccclass, property, menu } = _decorator;

@ccclass("MaskInvertedEvent")
@menu('UI/MaskInvertedEvent')
export class MaskInvertedEvent extends Component {
    @property(Label)
    public label: Label = null!;

    @property
    public string = '';

    start () {
        this.node.on(Node.EventType.TOUCH_START, this.callback, this);
    }

    callback(){
        this.label.string = this.string;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
