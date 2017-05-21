import { View, Property } from "ui/core/view";

export class EmojiCommon extends View {
  icon: number;
  constructor() {
      super();
  }
}

export const iconProperty = new Property<EmojiCommon, number>(
  {
    name: "icon",
    defaultValue: 0,
    valueConverter: (v) => parseInt(v),
  });
iconProperty.register(EmojiCommon);