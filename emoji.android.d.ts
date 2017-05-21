import common = require("./emoji.common");
export declare class Emoji extends common.Emoji {
    private _android;
    readonly android: any;
    readonly _nativeView: any;
    createNativeView(): any;
}
