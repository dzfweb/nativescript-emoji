import { EmojiCommon } from "./emoji.common";
export declare class Emoji extends EmojiCommon {
    private _android;
    readonly android: any;
    createNativeView(): android.widget.TextView;
}
