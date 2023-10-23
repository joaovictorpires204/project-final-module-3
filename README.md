# **PROJETO FINAL MÓDULO 3**

**Sistema de MetaVagas**

Esse sistema foi desenvolvido para ajudar os profissionais da área da tecnologia a encontrarem vagas que deem match com seu perfil e desejo. Iremos facilitar o encontro entre os dois mundos. Espero que assim você encontre seu emprego dos sonhos!!

<hr>

**Descrição do Projeto**

-> Cadastro dos Usuários

-> Login e autenticação dos usuários criados

-> Cadastro de Vagas

-> Busca personalizada pelo cargo, tecnologia, cidade, tipo da vaga, regime de trabalho, tamanho da empresa, faixa salarial e nível de experiência

<hr>

**Tecnologias Utilizadas**

-> Linguagem principal: TypeScript

-> Sistema desenvolvido em Node.js

-> Banco de Dados utilizado: MongoDb

-> Iteração com o Banco de Dados: Mongoose

-> Testes realizados com o Vitest/Jest

-> Segurança e autentiação dos usários: JWT(jsonwebtoken)

<hr>

**Inicialização**

Para inicializar o projeto, no terminal, digite: 

1. git clone git@github.com:joaovictorpires204/project-final-module-3.git

2. npm init -y

<hr>

**Utilização**

Após finalizar a inicialização , para utilizar o sistema: 
1. No Insomnia terá a pasta de users, nela você terá a opção para criar um usuário com os seguintes campos: name, email e password;
2. Depois do usuário criado na pasta User Auth, você terá a opção de realizar o login. Informe apenas seu email e password. Caso esteja correto, será gerado um token validando o seu acesso;
3. Já na pasta de Jobs.Acesse a requisão de Create a Job para cadastrar uma vaga de emprego;
4. Preencha com os seguintes campos: position, salary, city, technologies, company, jobType, jobRegime, companySizeEmployees, levelExperience, jobDescription, jobWebsite, url;
5. Após ser finalizado o cadastro na requisição Find All será possível buscar por todas as vagas;
6. E na requisição Find By Query será possível realizar o filtro das vagas utilizando todos os valores e datas preenchindo ao cadastrar uma vaga.

## **OBIGADO!**
