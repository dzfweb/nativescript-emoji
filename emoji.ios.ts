import { nameProperty, EmojiCommon, sizeProperty } from "./emoji.common";
import { EmojiDatabase } from "./emoji.database";

global.moduleMerge(EmojiCommon, exports);

export class Emoji extends EmojiCommon {
  [nameProperty.getDefault](): string {
    return '';
  }
  [nameProperty.setNative](value: string) {
    let emoji = EmojiDatabase.list().find((el) => el.shortname === value).unicode;
    let nsString = NSString.stringWithString(emoji);
    this.nativeView.text = nsString;
  }

  [sizeProperty.getDefault](): number {
    return 10;
  }

  [sizeProperty.setNative](value: number) {
    this.nativeView.font = UIFont.fontWithNameSize("HelveticaNeue", value);
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