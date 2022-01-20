import { Component, OnInit } from '@angular/core';
import {
  faDoorClosed,
  faDoorOpen,
  faSignOutAlt,
  faPlusCircle,
  faItalic,
  faUnderline,
  faFont,
  faBold,
} from '@fortawesome/free-solid-svg-icons'; //import icon
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  faDoorClosed = faDoorClosed;
  faUnderline = faUnderline;
  faBold = faBold;
  faFont = faFont;
  faItalic = faItalic;
  showFontPopover = true;
  text: any;
  newText: any;
  start: any;
  end: any;
  firstTimeToClick = true;
  fonts = ['font1', 'font2', 'font3', 'font4', 'font5'];
  colors = [
    { text: 't-black', bg: 'bg-black' },
    { text: 't-dark_grey_4', bg: 'bg-dark_grey_4' },
    { text: 't-dark_grey_3', bg: 'bg-dark_grey_3' },
    { text: 't-dark_grey_2', bg: 'bg-dark_grey_2' },
    { text: 't-dark_grey_1', bg: 'bg-dark_grey_1' },
    { text: 't-grey', bg: 'bg-grey' },
    { text: 't-light_grey_1', bg: 'bg-light_grey_1' },
    { text: 't-light_grey_2', bg: 'bg-light_grey_2' },
    { text: 't-light_grey_3', bg: 'bg-light_grey_3' },
    { text: 't-white', bg: 'bg-white' },
    { text: 't-red_berry', bg: 'bg-red_berry' },
    { text: 't-red', bg: 'bg-red' },
    { text: 't-orange', bg: 'bg-orange' },
    { text: 't-yellow', bg: 'bg-yellow' },
    { text: 't-green', bg: 'bg-green' },
    { text: 't-cyan', bg: 'bg-cyan' },
    { text: 't-cornflower_blue', bg: 'bg-cornflower_blue' },
    { text: 't-blue', bg: 'bg-blue' },
    { text: 't-purple', bg: 'bg-purple' },
    { text: 't-magenta', bg: 'bg-magenta' },
    { text: 't-light_red_berry_3', bg: 'bg-light_red_berry_3' },
    { text: 't-light_red_3', bg: 'bg-light_red_3' },
    { text: 't-light_orange_3', bg: 'bg-light_orange_3' },
    { text: 't-light_yellow_3', bg: 'bg-light_yellow_3' },
    { text: 't-light_green_3', bg: 'bg-light_green_3' },
    { text: 't-light_cyan_3', bg: 'bg-light_cyan_3' },

    { text: 't-light_cornflower_blue_3', bg: 'bg-light_cornflower_blue_3' },
    { text: 't-light_blue_3', bg: 'bg-light_blue_3' },
    { text: 't-light_purple_3', bg: 'bg-light_purple_3' },
    { text: 't-light_magenta_3', bg: 'bg-light_magenta_3' },
    { text: 't-light_red_berry_2', bg: 'bg-light_red_berry_2' },
    { text: 't-light_red_2', bg: 'bg-light_red_2' },
    { text: 't-light_orange_2', bg: 'bg-light_orange_2' },
    { text: 't-light_yellow_2', bg: 'bg-light_yellow_2' },
    { text: 't-light_cyan_2', bg: 'bg-light_cyan_2' },
    { text: 't-light_cornflower_blue_2', bg: 'bg-light_cornflower_blue_2' },
    { text: 't-light_blue_2', bg: 'bg-light_blue_2' },
    { text: 't-light_purple_2', bg: 'bg-light_purple_2' },
    { text: 't-light_magenta_2', bg: 'bg-light_magenta_2' },
    { text: 't-light_red_berry_1', bg: 'bg-light_red_berry_1' },
    { text: 't-light_red_1', bg: 'bg-light_red_1' },
    { text: 't-light_orange_1', bg: 'bg-light_orange_1' },
    { text: 't-light_yellow_1', bg: 'bg-light_yellow_1' },
    { text: 't-light_green_1', bg: 'bg-light_green_1' },
    { text: 't-light_cyan_1', bg: 'bg-light_cyan_1' },
    { text: 't-light_cornflower_blue_1', bg: 'bg-light_cornflower_blue_1' },
    { text: 't-light_blue_1', bg: 'bg-light_blue_1' },
    { text: 't-light_purple_1', bg: 'bg-light_purple_1' },
    { text: 't-light_magenta_1', bg: 'bg-light_magenta_1' },

    { text: 't-dark_red_berry_1', bg: 'bg-dark_red_berry_1' },
    { text: 't-dark_red_1', bg: 'bg-dark_red_1' },
    { text: 't-dark_orange_1', bg: 'bg-dark_orange_1' },
    { text: 't-dark_yellow_1', bg: 'bg-dark_yellow_1' },
    { text: 't-dark_green_1', bg: 'bg-dark_green_1' },
    { text: 't-dark_cyan_1', bg: 'bg-dark_cyan_1' },
    { text: 't-dark_cornflower_blue_1', bg: 'bg-dark_cornflower_blue_1' },
    { text: 't-dark_blue_1', bg: 'bg-dark_blue_1' },
    { text: 't-dark_purple_1', bg: 'bg-dark_purple_1' },
    { text: 't-dark_magenta_1', bg: 'bg-dark_magenta_1' },
    { text: 't-dark_red_berry_2', bg: 'bg-dark_red_berry_2' },
    { text: 't-dark_red_2', bg: 'bg-dark_red_2' },
    { text: 't-dark_orange_2', bg: 'bg-dark_orange_2' },
    { text: 't-dark_yellow_2', bg: 'bg-dark_yellow_2' },
    { text: 't-dark_green_2', bg: 'bg-dark_green_2' },
    { text: 't-dark_cyan_2', bg: 'bg-dark_cyan_2' },
    { text: 't-dark_cornflower_blue_2', bg: 'bg-dark_cornflower_blue_2' },
    { text: 't-dark_blue_2', bg: 'bg-dark_blue_2' },
    { text: 't-dark_purple_2', bg: 'bg-dark_purple_2' },
    { text: 't-dark_magenta_2', bg: 'bg-dark_magenta_2' },
    { text: 't-dark_red_berry_3', bg: 'bg-dark_red_berry_3' },
    { text: 't-dark_red_3', bg: 'bg-dark_red_3' },
    { text: 't-dark_orange_3', bg: 'bg-dark_orange_3' },
    { text: 't-dark_yellow_3', bg: 'bg-dark_yellow_3' },
    { text: 't-dark_green_3', bg: 'bg-dark_green_3' },
    { text: 't-dark_cyan_3', bg: 'bg-dark_cyan_3' },
    { text: 't-dark_cornflower_blue_3', bg: 'bg-dark_cornflower_blue_3' },
    { text: 't-dark_blue_3', bg: 'bg-dark_blue_3' },
    { text: 't-dark_purple_3', bg: 'bg-dark_purple_3' },
    { text: 't-dark_magenta_3', bg: 'bg-dark_magenta_3' },
  ];
  bgColors = [
    'bg-black',
    'bg-dark_grey_4',
    'bg-dark_grey_3',
    'bg-dark_grey_2',
    'bg-dark_grey_1',
    'bg-grey',
    'bg-light_grey_1',
    'bg-light_grey_2',
    'bg-light_grey_3',
    'bg-white',
    'bg-red_berry',
    'bg-red',
    'bg-orange',
    'bg-yellow',
    'bg-green',
    'bg-cyan',
    'bg-cornflower_blue',
    'bg-blue',
    'bg-purple',
    'bg-magenta',
    'bg-light_red_berry_3',
    'bg-light_red_3',
    'bg-light_orange_3',
    'bg-light_yellow_3',
    'bg-light_green_3',
    'bg-light_cyan_3',
    'bg-light_cornflower_blue_3',
    'bg-light_blue_3',
    'bg-light_purple_3',
    'bg-light_magenta_3',
    'bg-light_red_berry_2',
    'bg-light_red_2',
    'bg-light_orange_2',
    'bg-light_yellow_2',
    'bg-light_green_2',
    'bg-light_cyan_2',
    'bg-light_cornflower_blue_2',
    'bg-light_blue_2',
    'bg-light_purple_2',
    'bg-light_magenta_2',
    'bg-light_red_berry_1',
    'bg-light_red_1',
    'bg-light_orange_1',
    'bg-light_yellow_1',
    'bg-light_green_1',
    'bg-light_cyan_1',
    'bg-light_cornflower_blue_1',
    'bg-light_blue_1',
    'bg-light_purple_1',
    'bg-light_magenta_1',
    'bg-dark_red_berry_1',
    'bg-dark_red_1',
    'bg-dark_orange_1',
    'bg-dark_yellow_1',
    'bg-dark_green_1',
    'bg-dark_cyan_1',
    'bg-dark_cornflower_blue_1',
    'bg-dark_blue_1',
    'bg-dark_purple_1',
    'bg-dark_magenta_1',
    'bg-dark_red_berry_2',
    'bg-dark_red_2',
    'bg-dark_orange_2',
    'bg-dark_yellow_2',
    'bg-dark_green_2',
    'bg-dark_cyan_2',
    'bg-dark_cornflower_blue_2',
    'bg-dark_blue_2',
    'bg-dark_purple_2',
    'bg-dark_magenta_2',
    'bg-dark_red_berry_3',
    'bg-dark_red_3',
    'bg-dark_orange_3',
    'bg-dark_yellow_3',
    'bg-dark_green_3',
    'bg-dark_cyan_3',
    'bg-dark_cornflower_blue_3',
    'bg-dark_blue_3',
    'bg-dark_purple_3',
    'bg-dark_magenta_3',
  ];
  fontSizes = [
    { name: '2px', fClass: 'f2' },
    { name: '4px', fClass: 'f4' },
    { name: '6px', fClass: 'f6' },
    { name: '8px', fClass: 'f8' },
    { name: '10px', fClass: 'f10' },
    { name: '12px', fClass: 'f12' },
    { name: '14px', fClass: 'f14' },
    { name: '16px', fClass: 'f16' },
    { name: '18px', fClass: 'f18' },
    { name: '20px', fClass: 'f20' },
    { name: '22px', fClass: 'f22' },
    { name: '24px', fClass: 'f24' },
    { name: '26px', fClass: 'f26' },
    { name: '28px', fClass: 'f28' },
    { name: '30px', fClass: 'f30' },
    { name: '32px', fClass: 'f32' },
    { name: '34px', fClass: 'f34' },
    { name: '36px', fClass: 'f36' },
    { name: '38px', fClass: 'f38' },
    { name: '40px', fClass: 'f40' },
    { name: '42px', fClass: 'f42' },
    { name: '44px', fClass: 'f44' },
    { name: '46px', fClass: 'f46' },
    { name: '48px', fClass: 'f48' },
    { name: '50px', fClass: 'f50' },
    { name: '52px', fClass: 'f52' },
    { name: '54px', fClass: 'f54' },
    { name: '56px', fClass: 'f56' },
    { name: '58px', fClass: 'f58' },
    { name: '60px', fClass: 'f60' },
    { name: '62px', fClass: 'f62' },
  ];
  bold = false;
  italic = false;
  // span: any;
  constructor() {}

  ngOnInit(): void {
    this.text = document.getElementById('text');
    // localStorage.setItem('text',  JSON.stringify( this.text) );

    this.newText = this.text;

    var colorsPallette = document.getElementById('colors-pallette');
  }

  makeBold() {
    this.bold = !this.bold;
    let span = document.createElement('B');
    let selection = window.getSelection();

    let range = selection!.getRangeAt(0);

    if (this.bold) {
      span.className = 'fw-1000';
    } else {
      span.className = 'fw-500';
    }
    range.surroundContents(span);
    selection?.removeAllRanges();
  }

  makeItalic() {
    this.italic = !this.italic;
    let span = document.createElement('SPAN');
    let selection = window.getSelection();
    if (this.italic) {
      span.className = 't-italic';
    } else {
      span.className = 't-not-italic';
    }
    let range = selection!.getRangeAt(0);
    range.surroundContents(span);
    selection?.removeAllRanges();
  }
  selectFont(font: any) {
    var selection = window.getSelection();
    var span = document.createElement('SPAN');
    var range = selection!.getRangeAt(0);
    // let selectedText = selection!.toString();

    span.className = font.value;
    // span.appendChild(range.extractContents());
    console.log('!!!!');
    console.log(range);
    var parentNode: any = window.getSelection()!.focusNode!.parentNode;
    range.surroundContents(span);
    // range.insertNode(span);
    // console.log(this.text.innerHTML);
    // console.log(parentNode.classList);
    // console.log(selection?.focusNode?.nodeName);

    selection!.removeAllRanges();
  }
  // selectColor(color: any) {
  //   let span = document.createElement('SPAN');
  //   let selection = window.getSelection();
  //   span.className = color.value;
  //   var range = selection!.getRangeAt(0);
  //   range.surroundContents(span);
  //   selection?.removeAllRanges();
  // }

  selectColor2(color: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    range = selection!.getRangeAt(0);
    if (
      (  parentNode?.nodeName == 'SPAN' ||
      parentNode?.nodeName == 'LI') &&
      parentNode.textContent == selection?.toString()
    ) {
      for (let item of parentNode.classList) {
        if (item != color) {
          parentNode.classList.remove(item);
        }
      }
      parentNode.classList.add(color);
      console.log(parentNode.classList);
    } else {
      range = selection!.getRangeAt(0);

      var span = document.createElement('SPAN');
      span.textContent = selection!.toString();

      span.className = color;
      // range!.surroundContents(span);
      range.deleteContents();
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }

  selectFont2(font: any) {
    // this.showFontPopover=false;
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode;
    var htmlText: any = parentNode.innerHTML;
    range = selection!.getRangeAt(0);
    if (
     ( parentNode.nodeName == 'SPAN' ||
     parentNode.nodeName == 'LI' ) &&
     parentNode.innerText === selection?.toString())
     {
       console.log('f1');
      for (let singleClass of parentNode.classList) {
        for (let font of this.fonts) {
          if (singleClass == font)
            parentNode.classList.remove(singleClass);
          htmlText = htmlText.replace(font, '');
        }
      }
      parentNode.classList.add(font);
      parentNode.innerHTML = htmlText;
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.innerText == selection!.toString()) {
        console.log('f2');

        for (let font of this.fonts) {
          htmlText = htmlText.replace(font, '');
        }
        span.innerHTML = htmlText;

      }
      if (parentNode.innerText != selection?.toString()) {
        console.log('f3');

        span.textContent = selectedText!;
      }
      span.className = font;
      // range!.surroundContents(span);
      range.deleteContents();
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }



  selectFont22(font: any) {
    // this.showFontPopover=false;
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;

    // console.log('imp');
    // console.log(selection!.focusNode?.parentNode?.textContent);
    // console.log(parentNode.textContent == selection?.toString());

    // // console.log(selection!.focusNode!.parentNode?.lastChild);

    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // console.log(parentNode?.nodeName == 'SPAN');
    range = selection!.getRangeAt(0);
    if (
    (  parentNode?.nodeName == 'SPAN' ||
      parentNode?.nodeName == 'LI') &&
        parentNode.textContent === selection?.toString()
    ) {
      for (let singleClass of parentNode.classList) {
        for (let font of this.fonts)
          if (singleClass == font) {
            parentNode.classList.remove(singleClass);
          }
      }
      parentNode.classList.add(font);
      console.log(parentNode.classList);
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.parentNode.innerText == selection?.toString()) {
        var htmlText: any = parentNode.parentNode.innerHTML;
        for (let font of this.fonts) {
          htmlText = htmlText.replace(font, '');
          console.log('parentNode');

          console.log(htmlText);
        }
        span.innerHTML = htmlText;
        console.log('htmlText');

        console.log(htmlText);
        console.log(selection?.toString());
      }
      if (parentNode.parentNode.innerText != selection?.toString()) {
        span.textContent = selection!.toString();
      }
      span.className = font;
      // range!.surroundContents(span);
      range.deleteContents();
      range.insertNode(span);
      this.firstTimeToClick = false;
    }
    selection?.removeAllRanges();
  }

  selectColor3(color: any) {
    // this.showFontPopover=false;
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode;
    var htmlText: any = parentNode.innerHTML;
    range = selection!.getRangeAt(0);
    if (
     ( parentNode.nodeName == 'SPAN' ||
     parentNode.nodeName == 'LI' ) &&
     parentNode.innerText === selection?.toString())
     {
       console.log('f1');
      for (let singleClass of parentNode.classList) {
        for (let color of this.colors) {
          if (singleClass == color.text)
            parentNode.classList.remove(singleClass);
          htmlText = htmlText.replace(color.text, '');
        }
      }
      parentNode.classList.add(color);
      parentNode.innerHTML = htmlText;
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.innerText == selection!.toString()) {
        console.log('f2');

        for (let color of this.colors) {
          htmlText = htmlText.replace(color.text, '');
        }
        span.innerHTML = htmlText;

      }
      if (parentNode.innerText != selection?.toString()) {
        console.log('f3');

        span.textContent = selectedText!;
      }
      span.className = color;
      // range!.surroundContents(span);
      range.deleteContents();
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }

  makeItalic2() {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    range = selection!.getRangeAt(0);
    var italicClass = 't-italic';

    if (
      (  parentNode?.nodeName == 'SPAN' ||
      parentNode?.nodeName == 'LI') &&
        parentNode.textContent === selection?.toString()
    ) {
      var found = false;
      for (let singleClass of parentNode.classList) {
        if (singleClass == 't-italic') {
          parentNode.classList.remove(singleClass);
          italicClass = '';
        }
      }
      parentNode.classList.add(italicClass);
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.parentNode.innerText == selection?.toString()) {
        var htmlText: any = parentNode.parentNode.innerHTML;
        span.innerHTML = htmlText;
      }
      if (parentNode.parentNode.innerText != selection?.toString()) {
        span.textContent = selection!.toString();
      }
      span.className = italicClass;
      range.deleteContents();
      range.insertNode(span);
      this.firstTimeToClick = false;
    }
    selection?.removeAllRanges();
  }

  makeBold2() {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    range = selection!.getRangeAt(0);
    var boldClass = 't-bold';

    if (
      (  parentNode?.nodeName == 'SPAN' ||
      parentNode?.nodeName == 'LI')&&
        parentNode.textContent === selection?.toString()
    ) {
      for (let singleClass of parentNode.classList) {
        if (singleClass == 't-bold') {
          parentNode.classList.remove(singleClass);
          boldClass = '';
        }
      }
      parentNode.classList.add(boldClass);
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.parentNode.innerText == selection?.toString()) {
        var htmlText: any = parentNode.parentNode.innerHTML;
        span.innerHTML = htmlText;
      }
      if (parentNode.parentNode.innerText != selection?.toString()) {
        span.textContent = selection!.toString();
      }
      span.className = boldClass;
      range.deleteContents();
      range.insertNode(span);
      this.firstTimeToClick = false;
    }
    selection?.removeAllRanges();
  }
  removeAllStyle() {
    let newText = this.text.innerText;
    this.text.innerText = newText;
  }

  makeUnderline() {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    range = selection!.getRangeAt(0);
    var underlinedClass = 't-underlined';

    if (
      (  parentNode?.nodeName == 'SPAN' ||
      parentNode?.nodeName == 'LI') &&
        parentNode.textContent === selection?.toString()
    ) {
      for (let singleClass of parentNode.classList) {
        if (singleClass == 't-underlined') {
          parentNode.classList.remove(singleClass);
          underlinedClass = '';
        }
      }
      parentNode.classList.add(underlinedClass);
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.parentNode.innerText == selection?.toString()) {
        var htmlText: any = parentNode.parentNode.innerHTML;
        span.innerHTML = htmlText;
      }
      if (parentNode.parentNode.innerText != selection?.toString()) {
        span.textContent = selection!.toString();
      }
      span.className = underlinedClass;
      range.deleteContents();
      range.insertNode(span);
      this.firstTimeToClick = false;
    }
    selection?.removeAllRanges();
  }

  selectBgColor(bg: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    range = selection!.getRangeAt(0);
    if (
      (  parentNode?.nodeName == 'SPAN' ||
      parentNode?.nodeName == 'LI') &&
        parentNode.textContent === selection?.toString()
    ) {
      for (let singleClass of parentNode.classList) {
        for (let color of this.colors)
          if (singleClass == color.bg) {
            parentNode.classList.remove(singleClass);
          }
      }
      parentNode.classList.add(bg);
      console.log(parentNode.classList);
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.parentNode.innerText == selection?.toString()) {
        var htmlText: any = parentNode.parentNode.innerHTML;
        for (let color of this.colors) {
          htmlText = htmlText.replace(color.bg, '');
          console.log('parentNode');

          console.log(parentNode.parentNode.innerText);
        }
        span.innerHTML = htmlText;
        console.log('htmlText');

        console.log(htmlText);
        console.log(selection?.toString());
      }
      if (parentNode.parentNode.innerText != selection?.toString()) {
        span.textContent = selection!.toString();
      }
      span.className = bg;
      // range!.surroundContents(span);
      range.deleteContents();
      range.insertNode(span);
      this.firstTimeToClick = false;
    }
    selection?.removeAllRanges();
  }

  selectFontSize(fontSize: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    range = selection!.getRangeAt(0);
    if (
      parentNode?.nodeName == 'SPAN' ||
      (parentNode?.nodeName == 'LI' &&
        parentNode.textContent === selection?.toString())
    ) {
      for (let singleClass of parentNode.classList) {
        for (let font of this.fontSizes)
          if (singleClass == font.fClass) {
            parentNode.classList.remove(singleClass);
          }
      }
      parentNode.classList.add(fontSize);
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.parentNode.innerText == selection?.toString()) {
        var htmlText: any = parentNode.parentNode.innerHTML;
        for (let font of this.fontSizes) {
          htmlText = htmlText.replace(font.fClass, '');
          console.log(parentNode.parentNode.innerText);
        }
        span.innerHTML = htmlText;
      }
      if (parentNode.parentNode.innerText != selection?.toString()) {
        span.textContent = selection!.toString();
      }
      span.className = fontSize;
      // range!.surroundContents(span);
      range.deleteContents();
      range.insertNode(span);
      this.firstTimeToClick = false;
    }
    selection?.removeAllRanges();
  }
  addList() {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    var span = document.createElement('SPAN');
    var li = document.createElement('LI');
    console.log('nodeName');

    console.log(parentNode.nodeName);
    var htmlText: any = parentNode.parentNode.innerHTML;

    range = selection!.getRangeAt(0);
    if (
      parentNode?.nodeName == 'LI' &&
      parentNode.textContent == selection?.toString()
    ) {
      // selection?.focusNode!.parentNode!.removeChild(li)

      parentNode.parentNode.innerHTML = parentNode.parentNode.innerHTML.replace(
        'li',
        'span'
      );
      // range.deleteContents();
      // let insertedNode= parentNode.parentNode? parentNode.parentNode.innerHTML:parentNode.innerHTML
      // range.insertNode(insertedNode);      // range.deleteContents();
      // range.insertNode(parentNode.parentNode.innerHTML);

      //  span.innerHTML = parentNode.parentNode.innerHTML;
      // span.innerHTML = htmlText;
      console.log('ok1');
      console.log(parentNode);
    } else {
      if (
        parentNode?.nodeName == 'SPAN' &&
        parentNode.parentNode.innerText == selection?.toString()
      ) {
        parentNode.parentNode.innerHTML =
          parentNode.parentNode.innerHTML.replace('span', 'li');
        // range.deleteContents();
        // let insertedNode= parentNode.parentNode? parentNode.parentNode.innerHTML:parentNode
        // range.insertNode(insertedNode);

        //  parentNode.parentNode.innerText = selection?.toString();
        console.log('???');
      }
      if (
        parentNode?.nodeName == 'DIV' ||
        parentNode.parentNode.innerText != selection?.toString()
      ) {
        if (parentNode.parentNode.innerText == selection?.toString()) {
          li.innerHTML = htmlText;
        }
        if (parentNode.parentNode.innerText != selection?.toString()) {
          li.textContent = selection!.toString();
        }
        range.deleteContents();
        range.insertNode(li);
      }
    }
    selection?.removeAllRanges();
  }

  addList2() {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    range = selection!.getRangeAt(0);
    var underlinedClass = 'list';

    if (
      parentNode?.nodeName == 'SPAN' &&
      parentNode.textContent === selection?.toString()
    ) {
      for (let singleClass of parentNode.classList) {
        if (singleClass == 't-underlined') {
          parentNode.classList.remove(singleClass);
          underlinedClass = '';
        }
      }
      parentNode.classList.add(underlinedClass);
    } else {
      var span = document.createElement('SPAN');
      if (parentNode.parentNode.innerText == selection?.toString()) {
        var htmlText: any = parentNode.parentNode.innerHTML;
        span.innerHTML = htmlText;
      }
      if (parentNode.parentNode.innerText != selection?.toString()) {
        span.textContent = selection!.toString();
      }
      span.className = underlinedClass;
      range.deleteContents();
      range.insertNode(span);
      this.firstTimeToClick = false;
    }
    selection?.removeAllRanges();
  }
}
