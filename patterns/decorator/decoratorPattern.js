//imegine we have class that creates a message, using 'decoratorPattern' we create new calss for new Decoration
//and just use them for every new message

class ChatMessage{
    constructor(text){
        this.text = text;
    }

    getText(){
        return this.text;
    }
}

class Bold{
    constructor(message){
        this.message = message;
    }

    getText(){
        return `<b>${this.message.getText()}</b>`;
    }
}

class Italic{
    constructor(message){
        this.message = message;
    }

    getText(){
        return `<i>${this.message.getText()}</i>`
    }
}

class Subscripted{
    constructor(message){
        this.message = message;
    }

    getText(){
        return `<sub>${this.message.getText()}</sub>`
    }
}

const message = new ChatMessage('Hello, Yuliia!');
const messageBold = new Bold(message);
const messageItalic = new Italic(message);

const outputElement = document.getElementById('output');
outputElement.innerHTML = messageBold.getText() + "<br>" + messageItalic.getText();