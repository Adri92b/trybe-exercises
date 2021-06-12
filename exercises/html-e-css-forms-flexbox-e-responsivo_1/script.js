function createEstados() {
  let estadosSelect = document.getElementById('estado');
  let optionsEstado = ['AC- Acre', 'AL- Alagoas', 'AP- Amapá',
  'AM- Amazonas', 'BA- Bahia', 'CE- Ceará', 'DF- Distrito Federal',
  'ES- Espírito Santo', 'GO- Goiás', 'MA- Maranhão', 'MT- Mato Grosso',
  'MS- Mato Grosso do Sul', 'MG- Minas Gerais', 'PA- Pará', 'PB- Paraíba',
  'PR- Paraná', 'PE- Pernambuco', 'PI- Piauí', 'RJ- Rio de Janeiro',
  'RN- Rio Grande do Norte', 'RS- Rio Grande do Sul', 'RO- Rondônia',
  'RR- Roraima', 'SC- Santa Catarina', 'SP- São Paulo', 'SE- Sergipe',
  'TO- Tocantins']
  for (let index = 0; index < optionsEstado.length; index += 1) {
      let criarOptions = document.createElement('option');
      estadosSelect.appendChild(criarOptions).innerText = optionsEstado[index];
      estadosSelect.appendChild(criarOptions).value = optionsEstado[index];
  }
}
createEstados()