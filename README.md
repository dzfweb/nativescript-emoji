# NativeScript Emoji

Emojis for NativeScript

![Emoji](emojiprintscreen.png)

## Instalation
`tns plugin add nativescript-emoji`

## Usage
###### XML

```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:Emoji="nativescript-emoji" navigatingTo="navigatingTo" class="page">
  
    <Page.actionBar>
        <ActionBar title="NativeScript Emoji" icon="" class="action-bar">
        </ActionBar>
    </Page.actionBar>
    <StackLayout orientation="horizontal">
        <Label text="I'm happy "> </Label>
        <Emoji:Emoji name="joy" />
        <Emoji:Emoji name="joy" />
        <Emoji:Emoji name="joy" />
    </StackLayout>
</Page>
```

###### TS
```
import { Emoji } from 'nativescript-emoji';
```

###### ANGULAR
```
registerElement("Emoji", () => require("nativescript-emoji").Emoji);
```

## How to use
Set emoji property name with the short-name of the emoji. The full list you can access on the link below.
http://apps.timwhitlock.info/emoji/tables/unicode 



