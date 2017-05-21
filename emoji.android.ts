import common = require("./emoji.common");
import * as utils from "tns-core-modules/utils/utils";
declare var java: any;

global.moduleMerge(common, exports);

export class Emoji extends common.Emoji {
  private _android: any;

  get android() {
    return this._android;
  }

  get _nativeView() {
    return this._android;
  }

  public createNativeView() {
    this._android = new android.widget.TextView(utils.ad.getApplicationContext());
    let unicode:number = 0x1F60A;
    this._android.setText(new java.lang.String(java.lang.Character.toChars(unicode)));
    return this._android;
  }
}