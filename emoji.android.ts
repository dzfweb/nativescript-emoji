import { iconProperty, EmojiCommon } from "./emoji.common";
import * as utils from "tns-core-modules/utils/utils";
declare var java: any;

global.moduleMerge(EmojiCommon, exports);

export class Emoji extends EmojiCommon {
  [iconProperty.getDefault](): number {
    return 0;
  }
  [iconProperty.setNative](value: number) {
    this.nativeView.setText(new java.lang.String(java.lang.Character.toChars(value)));
  }

  private _android: android.widget.TextView;

  get android() {
    return this.nativeView;
  }

  public createNativeView() {
    this._android = new android.widget.TextView(utils.ad.getApplicationContext());
    return this._android;
  }
}