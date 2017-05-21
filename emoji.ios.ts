import { iconProperty, EmojiCommon } from "./emoji.common";
declare var java: any;

global.moduleMerge(EmojiCommon, exports);

export class Emoji extends EmojiCommon {
  [iconProperty.getDefault](): number {
    return 0;
  }
  [iconProperty.setNative](value: number) {
    this.nativeView.text = value;
  }

  private _ios: UILabel;

  get ios() {
    return this.nativeView;
  }

  public createNativeView() {
    this._ios = UILabel.alloc().init();
    return this._ios;
  }
}