# Single Request

## Introdução

Nesse projeto utilizo uma estrutura otimizada para transporte de dados entre components isolados.
Por exemplo, ao invés de realizar uma requisição para obter uma lista de clientes para listar e outra requisição no cadastro para verificar se já existe um cliente com aquele nome, faça apenas uma requisição em um component pai que compartilha a lista para os outros components filhos.

## Json Server

Para testar a aplicação, execute `json-server --watch db.json` na raiz do projeto e irá ser iniciado um servidor json com funcionalidades de uma API.


