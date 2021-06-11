function creatEstados() {
  let estadosBrasil = ['AC- Acre', 'AL- Alagoas', 'AP- Amapá',
  'AM- Amazonas', 'BA- Bahia', 'CE- Ceará', 'DF- Distrito Federal',
  'ES- Espírito Santo', 'GO- Goiás', 'MA- Maranhão', 'MT- Mato Grosso',
  'MS- Mato Grosso do Sul', 'MG- Minas Gerais', 'PA- Pará', 'PB- Paraíba',
  'PR- Paraná', 'PE- Pernambuco', 'PI- Piauí', 'RJ- Rio de Janeiro',
  'RN- Rio Grande do Norte', 'RS- Rio Grande do Sul', 'RO- Rondônia',
  'RR- Roraima', 'SC- Santa Catarina', 'SP- São Paulo', 'SE- Sergipe',
  'TO- Tocantins']
  for (creatEstados in estadosBrasil) {
      let elemento = document.createElement('option');
      let pai = document.querySelector('select');
      pai.appendChild(elemento);
      elemento.getAttribute('required');
      elemento.getAttribute('class', 'estadoSelecao');
  }
}
creatEstados()