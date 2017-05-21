import { nameProperty, EmojiCommon } from "./emoji.common";
import { EmojiDatabase } from "./emoji.database";
import * as utils from "tns-core-modules/utils/utils";
declare var java: any;

global.moduleMerge(EmojiCommon, exports);

export class Emoji extends EmojiCommon {
  [nameProperty.getDefault](): number {
    return 0;
  }
  [nameProperty.setNative](value: string) {
    let emoji = EmojiDatabase.list().find((el) => el.shortname === value).codepoint[0];
    this.nativeView.setText(new java.lang.String(java.lang.Character.toChars(emoji)));
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