const form = document.getElementById("form-atividade");
const nomeContato = [];
const numeroContato = [];

let linhas = " ";

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
}) 

    function adicionaLinha() {
        const inputNomeContato = document.getElementById('nome-contato');
        const inputnumeroContato = document.getElementById('numero-contato');

        if (nomeContato.includes(inputNomeContato.value)) {
            alert(`Um contato com o nome de: ${inputNomeContato.value} ja foi adicionado`);
        } else {
            nomeContato.push(inputNomeContato.value);
            numeroContato.push(inputnumeroContato.value);

            let linha = "<tr>";
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputnumeroContato.value}</td>`;
            linha += '</tr>';

            linhas += linha;
        };
            const corpoAgenda = document.querySelector('tbody');
            corpoAgenda.innerHTML = linhas;
        
        inputNomeContato.value = ('');
        inputnumeroContato.value = ('');
};