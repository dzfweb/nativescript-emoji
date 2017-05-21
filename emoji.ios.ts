import { iconProperty, EmojiCommon } from "./emoji.common";

global.moduleMerge(EmojiCommon, exports);

export class Emoji extends EmojiCommon {
  [iconProperty.getDefault](): number {
    return 0;
  }
  [iconProperty.setNative](value: number) {
    let emojiString = NSString.stringWithString(value.toString());
    let nsData = emojiString.dataUsingEncoding(NSUTF8StringEncoding);
    let nsString = NSString.alloc().initWithDataEncoding(null, NSNonLossyASCIIStringEncoding)
    this.nativeView.text = nsString;
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