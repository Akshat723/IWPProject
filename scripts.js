function joinNeighborhood() {
    const passKey = document.querySelector('.hero input').value;
    if (passKey) {
        alert(`You have joined the neighborhood with pass key: ${passKey}`);
    } else {
        alert('Please enter a valid pass key.');
    }
}

function postLostItem() {
    const description = document.getElementById('item-description').value;
    if (description) {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `Lost Item: ${description}`;
        document.getElementById('lost-items').appendChild(itemDiv);
        document.getElementById('item-description').value = '';
    } else {
        alert('Please describe the lost item.');
    }
}

function postMarketItem() {
    const description = document.getElementById('market-item-description').value;
    if (description) {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `For Sale: ${description}`;
        document.getElementById('market-items').appendChild(itemDiv);
        document.getElementById('market-item-description').value = '';
    } else {
        alert('Please describe the item for sale.');
    }
}

function sendMessage() {
    const message = document.getElementById('chat-message').value;
    if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `Message: ${message}`;
        document.getElementById('chat-messages').appendChild(messageDiv);
        document.getElementById('chat-message').value = '';
    } else {
        alert('Please type a message.');
    }
}

function postEvent() {
    const description = document.getElementById('event-description').value;
    if (description) {
        const eventDiv = document.createElement('div');
        eventDiv.textContent = `Event: ${description}`;
        document.getElementById('events-list').appendChild(eventDiv);
        document.getElementById('event-description').value = '';
    } else {
        alert('Please describe the event.');
    }
}
