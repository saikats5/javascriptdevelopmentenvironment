import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("First Test",()=>{
    it("Should Pass",()=>{
        expect(true).to.equal(true);
    });
});

describe("index.html",()=>{
    it("Starting text",()=>{
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window){
            const div = window.document.getElementsByTagName('div')[0];
            expect(div.innerHTML).to.equal("Testing Public URL");
            window.close();
        });
    });
});