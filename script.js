const AddElement = function (type, parent, text, properties, eventListeners) {
    let NewElement = document.createElement(type);
    if (text !== undefined) NewElement.textContent = text;

    for (key in properties)
    {
        NewElement[key] = properties[key];
    }
    for (key in eventListeners)
    {
        NewElement.addEventListener(key, eventListeners[key]);
    }

    if (parent) parent.appendChild(NewElement);

    return NewElement;
};
const RandomColor = function () {
    // 16777215 is the highest hex number used in colors
    return "#" + (Math.round(Math.random() * 16777215).toString(16));
};

AddElement('button', document.body, 'Add Square', {}, {
    click: function () {
        AddElement('div', flexbox, '', { className: 'square', id: squares++ }, {
            mouseover: function () {
                this.textContent = this.id;
            },
            mouseout: function () {
                this.textContent = "";
            },
            click: function () {
                this.style.backgroundColor = RandomColor();
            },
            dblclick: function () {
                const id = parseInt(this.id);
                //even
                if (id % 2 == 0)
                {
                    let NextElement;
                    flexbox.childNodes.forEach((value) => {
                        if (!NextElement && parseInt(value.id) > id)
                        {
                            NextElement = value;
                        }
                    });
                    if (!NextElement)
                    {
                        alert("There is no next element!");
                        return;
                    }
                    NextElement.remove();
                }
                //odd
                else 
                {
                    let NextElement;
                    flexbox.childNodes.forEach((value) => {
                        if (parseInt(value.id) < id)
                        {
                            NextElement = value;
                        }
                    });
                    if (!NextElement)
                    {
                        alert("There is no previous element!");
                        return;
                    }
                    NextElement.remove();
                }
            }
        });
    }
});

let squares = 1;
const flexbox = AddElement('div', document.body, '', {
    className: "flexbox"
})