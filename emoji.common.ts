import { View, Property } from "ui/core/view";

export class EmojiCommon extends View {
  name: string;
  constructor() {
      super();
  }
}

export const nameProperty = new Property<EmojiCommon, string>(
  {
    name: "name",
    defaultValue: ""
  });
nameProperty.register(EmojiCommon);

export const sizeProperty = new Property<EmojiCommon, number>(
  {
    name: "size",
    defaultValue: 10,
    valueConverter:(v) => parseInt(v)
  });

sizeProperty.register(EmojiCommon);