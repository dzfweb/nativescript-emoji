import { Emoji } from 'nativescript-emoji';
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {
  
    let page = <Page>args.object;
    // console.log(Emoji);    
  
    page.bindingContext = new HelloWorldModel();
}