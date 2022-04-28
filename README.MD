<h1>Turma de Estágio 2022 Desafio técnico - Engenharia</h1>

<strong>Nome: </strong> Luciana de Moraes Teixeira<br>
<strong>Universidade: </strong> Universidade Estácio de Sá<br>
<strong>Curso: </strong>Análise e Desenvolvimento de Sistemas<br>
<strong>Semestre atual: </strong> 3/5<br>

<section class='content'>
  <h2>Instruções</h2>
  - Para executar será necessário ter uma versão atual do NodeJS instalado na máquina
  - Executar o comando ´node index.js´ na raíz do projeto
  - O relatório irá aparecer no terminal utilizado

  <h2>Desafio técnico:</h2>
  <span>
    O leitor de código de barras da Loggi
A Loggi está em constante expansão e precisa da sua ajuda para conectar o Brasil.
O processo de separação de pacotes acontece de modo automático, uma esteira
inteligente lê o código de barras dos pacotes e os agrupa pelas regiões de destino.
O código de barras do pacote é composto por 15 dígitos, onde cada trinca
numérica representa uma informação do pacote.

<h3>Ordem das Trincas</h3><br>
1 Região de Origem<br>
2 Região de Destino<br>
3 Código da Loggi<br>
4 Código do Vendedor do produto<br>
5 Tipo do produto<br>
    
<h3>Código de referência: Cidade/Região</h3><br>
Centro-oeste 201 até 299<br>
Nordeste 300 até 399<br>
Norte 400 até 499<br>
Sudeste 001 até 099<br>
Sul 100 até 199<br>
Os códigos das cidades estão ordenados por ordem de entrega na rota.<br>
<h3>Tipo do Produto Código</h3><br>
Jóias 001<br>
Livros 111<br>
Eletrônicos 333<br>
Bebidas 555<br>
Brinquedos 888<br>

Exemplo:<br>
Código: 033 334 555 999 000 </br>
Região de origem: Cidade 33, região Sudeste</br>
Região de destino: Cidade 334, região Nordeste</br>
Código Loggi: 555</br>
Código do vendedor do produto: 999</br>

Tipo do produto: Jóias</br>

Considere as seguintes restrições:</br>
1) A Loggi não envia produtos que não sejam dos tipos acima informados.</br>
2) Não é possível despachar pacotes contendo jóias tendo como região de
origem o Centro-oeste;
3) O vendedor 367 está com seu CNPJ inativo e, portanto, não pode mais
enviar pacotes pela Loggi, os códigos de barra que estiverem relacionados
a este vendedor devem ser considerados inválidos.

<h3>Considere a lista de pacotes abaixo:</h3></br>
Pacote 1: 288355555123888</br>
Pacote 2: 335333555584333</br>
Pacote 3: 223343555124001</br>
Pacote 4: 002111555874555</br>
Pacote 5: 111188555654777</br>
Pacote 6: 111333555123333</br>
Pacote 7: 432055555123888</br>
Pacote 8: 079333555584333</br>
Pacote 9: 155333555124001</br>
Pacote 10: 333188555584333</br>
Pacote 11: 555288555123001</br>
Pacote 12: 111388555123555</br>
Pacote 13: 288000555367333</br>
Pacote 14: 066311555874001</br>
Pacote 15: 110333555123555</br>
Pacote 16: 333488555584333</br>
Pacote 17: 455448555123001</br>
Pacote 18: 022388555123555</br>
Pacote 19: 432044555845333</br>
Pacote 20: 034311555874001</br>
<br>

Com os dados (lista de pacotes) e detalhamento acima (estrutura), desenvolva em
qualquer linguagem, ou mesmo em um pseudo-linguagem - descrevendo o
processo que deve ser seguido para chegar na solução.
Vamos avaliar a lógica na solução do relatório, e não conhecimento específico
da linguagem.

Obs: Por favor, indicar num arquivo README.TXT, a linguagem, versão e algum
dado relevante.

A Loggi precisa:

1. Identificar a região de destino de cada pacote, com totalização de
pacotes (soma região);
2. Saber quais pacotes possuem códigos de barras válidos e/ou
inválidos;
3. Identificar os pacotes que têm como origem a região Sul e
Brinquedos em seu conteúdo;
4. Listar os pacotes agrupados por região de destino (Considere apenas
pacotes válidos);
5. Listar o número de pacotes enviados por cada vendedor (Considere
apenas pacotes válidos);
6. Gerar o relatório/lista de pacotes por destino e por tipo (Considere
apenas pacotes válidos);
7. Se o transporte dos pacotes para o Norte passa pela Região
Centro-Oeste, quais são os pacotes que devem ser despachados no
mesmo caminhão?
8. Se todos os pacotes fossem uma fila qual seria a ordem de carga
para o Norte no caminhão para descarregar os pacotes da Região
Centro Oeste primeiro;
9. No item acima considerar que as jóias fossem sempre as primeiras a
serem descarregadas;
10. Listar os pacotes inválidos.
Caso tenha dificuldade em algum item, pode ser pulado, mas deixe a saída como:
“Não processado”.
  </span>
</section>