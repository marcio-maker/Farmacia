// Interatividade com o botão CTA
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Explore nossa lista de produtos e medicamentos!');
});

// Interatividade com os produtos
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    product.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Interatividade com os botões de compra
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Produto adicionado ao carrinho!');
    });
});

// Adicionar lembrete
document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const medication = document.getElementById('medication').value;
    const time = document.getElementById('time').value;

    if (medication && time) {
        const reminderItem = document.createElement('li');
        reminderItem.textContent = `${medication} - ${time}`;
        document.getElementById('reminder-list').appendChild(reminderItem);
        document.getElementById('reminder-form').reset();
    }
});

// Adicionar pedido ao histórico
function addOrderToHistory(order) {
    const orderItem = document.createElement('li');
    orderItem.textContent = order;
    document.getElementById('order-list').appendChild(orderItem);
}

// Exemplo de adicionar pedido ao histórico
addOrderToHistory('Paracetamol - 10/10/2023');
addOrderToHistory('Vitamina C - 11/10/2023');