# burguer-queen-api

<!-- #POSTGRESQL CHEATSHEET
INSTALAÇÃO DBEAVER
- instalar community server edition a partir do site
- usar legacy password
- colocar uma senha no usuário root (NÃO ESQUECER A SENHA)
INSTALAÇÃO DO POSTGRESQL (MAC)
- brew install postgresql
- brew services start postgresql
- initdb /usr/local/var/postgres -E utf8 (TESTAR RODAR ESSA LINHA SEM RODAR A DE CIMA ANTES - NÃO DEIXOU INSTALAR, DISSE QUE JÁ TINHA COISA NO BANCO)
- instalar heroku:
brew tap heroku/brew && brew install heroku
heroku login -i (inserir credenciais)
- criar app no heroku:
https://dashboard.heroku.com/apps (CRIAR COM O NOME QUE QUISER)
$ cd my-project/
$ git init
$ heroku git:remote -a [NOME DO SEU PROJETO SEM COLCHETES]
$ heroku addons:create heroku-postgresql:hobby-dev --app [NOME DO SEU PROJETO SEM COLCHETES]
- criar banco no dbeaver:
criar conexão com os dados da dashboard do heroku (clicar em Postgres > settings > credentials)
- Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.
$ git add .
$ git commit -am "make it better"
$ git push heroku master -->
<!-- ////////////////////////
EXPRESS JS - INSTALAR E INICIAR
https://expressjs.com/en/starter/installing.html
////////////////////////
#COMANDOS DE BANCO POSTGRESQL
CREATE DATABASE
<!-- criar nova database -->
<!-- CREATE TABLE compras (
    id SERIAL PRIMARY KEY,
    valor DECIMAL,
    data DATE,
    observacao VARCHAR(255),
    recebido SMALLINT); -->
<!-- criar tabela com colunas -->
<!-- DROP TABLE nome; -->
<!-- deletar tabela da base -->
<!-- DELETE FROM compras WHERE produto = "bolacha"; -->
<!-- deleta dados de tabelas -->
<!-- INSERT INTO compras (valor, data, observacao, recebido)
VALUES (100.00, '2009-12-14', 'presente', 1); -->
<!-- insere valores na tabela (sempre seguir a ordem dos parâmetros) -->
<!-- SELECT * FROM compras;
SELECT * FROM compras WHERE valor > 1000;
SELECT * FROM compras WHERE valor = 12.34;
SELECT * FROM compras WHERE valor > 1000 AND data != '06-22-2010';
SELECT valor * 0.2 FROM compras;
SELECT valor * 0.2 AS imposto FROM compras;
SELECT valor, data, observacao FROM compras WHERE data >= '01-01-2009' AND data <= '12-31-2009';
SELECT valor, data, observacao FROM compras WHERE data BETWEEN '01-01-2009' AND '12-31-2009' AND NOT observacao = 'PROMOCAO'; -->
<!-- trazer os dados solicitados da tabela -->
<!-- SELECT * FROM compras WHERE nome LIKE 'COMPRAS%'; -->
<!-- o % no final vai pegar tudo que começa com compras -->
<!-- UPDATE compras SET data = '03-09-2011' WHERE id = 46;
UPDATE compras SET observacao = 'PROMOCAO' WHERE valor > 20; -->
<!-- atualizar infos nas tabelas -->
<!-- ALTER TABLE compras ALTER COLUMN valor SET NOT NULL;
alter table compras alter COLUMN valor set default 0;
INSERT INTO compras (data, observacao, recebido) VALUES ('06-19-2019', 'BRINDE', 1); -->
<!-- alterar tabela adicionando condicoes -->
<!-- CREATE TYPE enum_pagamento AS enum('cartao', 'boleto', 'dinheiro');
ALTER TABLE compras ADD COLUMN forma_pagamento enum_pagamento; -->
<!-- adicionar coluna com tipos limitados de info possível -->
<!-- ALTER TABLE compras ALTER COLUMN forma_pagto SET NOT NULL;
ERROR: column "forma_pagto" contains null values
UPDATE compras SET forma_pagto = 'cartao'; -->
<!-- alteracao de colunas com valores null para not null -->
<!-- SELECT sum(valor) FROM compras;
SELECT count(*) FROM compras WHERE data BETWEEN '01-01-2010' AND '12-31-2010';
SELECT avg(valor) FROM compras; -->
<!-- somar, selecionar, calcular médias -->
<!-- CREATE TABLE lojas (id SERIAL, nome VARCHAR(100), endereco VARCHAR(100), telefone VARCHAR(20), PRIMARY KEY(id));
INSERT INTO lojas (nome, endereco, telefone) VALUES ('Pão de Açúcar', 'Consolação', '123123'), ('Carrefour', 'rua 2', '345345');
alter table compras add foreign key(loja_id) references lojas(id);
CREATE TABLE lojas(id SERIAL, nome VARCHAR(100))
INSERT INTO lojas (nome) VALUES ('Pão de Açúcar'), ('Carrefour');
ALTER TABLE compras ADD FOREIGN KEY(loja_id) REFERENCES lojas(id);
criar nova tabela para fazer um relacionamento --> -->
