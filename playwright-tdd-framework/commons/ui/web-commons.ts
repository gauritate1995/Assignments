import {Page, locator, expect} from '@playwright/test';
import config from '../../config/config.json' with {type:'json'};

export class WebCommons{
    page: Page;

    constructor(page:Page){
        this.page = page;
    }

    async lauchApplication(){
        await this.page.goto(config.web.url);
        

    }
}