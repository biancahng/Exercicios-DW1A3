function calculoValor() {
	var buffet = document.getElementById("buffet").value;
        var consumo = document.getElementById("consumo").value;
        var resultado = buffet*(consumo/1000);
	resposta.innerHTML = resultado;
}
