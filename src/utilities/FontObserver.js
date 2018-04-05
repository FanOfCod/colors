import React from 'react';
import FontFaceObserver from 'font-face-observer';



const ListOfFonts = [ "Arial", "Roboto", "Open Sans","Verdana","helo", "Gotham"];

const AvailableFonts = [];
const UnavailableFonts = [];



export async function CheckFonts() {


   await ListOfFonts.map(async function(key) {


    //  var FontFaceObserver = require('font-face-observer');
      var observer = new FontFaceObserver(key);
      var promisedFontResult = observer.check();

      
      try { 
        var CheckedFont = await promisedFontResult;
        AvailableFonts.push(key);
      }
      catch(err) {
        UnavailableFonts.push(key);
      }

    });
    console.log(UnavailableFonts);
    console.log(AvailableFonts);

}




  export function GetListOfFonts() {

   return (
      
      AvailableFonts.map(key =>
      <option value={key}>{key}</option>)
  
    );
  }