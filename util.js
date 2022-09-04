//============== Re-call elements ==============//

let $ = function (select) {
   return document.querySelector(select);
}

// ==============   Creat element   ============== //

let creatElement = function (tagname, className, text) {
   let newElement = document.createElement(tagname);
   if (className) {
      newElement.setAttribute("class", className);
   }

   if (text) {
      newElement.textContent = text;
   }
   return newElement;
}