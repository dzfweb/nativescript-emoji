import { EmojiCommon } from "./emoji.common";
export declare class Emoji extends EmojiCommon {
    private _ios;
    readonly ios: any;
    createNativeView(): UILabel;
}
