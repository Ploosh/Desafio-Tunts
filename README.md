# Desafio-Tunts

[Repositório GitHub](https://github.com/Ploosh/Desafio-Tunts) | [Planilha](https://docs.google.com/spreadsheets/d/1BCMGbmE_qGpHVhZYIfjb3L7MSERGYZkbkL0VMqDRu8k/edit?usp=sharing)

Criar uma aplicação em NodeJs. A aplicação deve ser capaz de ler uma planilha do google sheets, buscar as informações necessárias, calcular e escrever o resultado na planilha.

## Sumário

- [Regras](#regras)
- [Especificações técnicas](#especificações-técnicas)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Instruções de instalação](#instruções-de-instalação)
  - [Executando o projeto localmente](#executando-o-projeto-localmente)

## Regras

Calcular a situação de cada aluno baseado na média das 3 provas (P1, P2 e P3), conforme a tabela:

| Média (m)  | Situação |
| ------------- | ------------- |
| m < 50  | Reprovado por Nota  |
| 5 <= m < 7  | Exame Final  |
| m >= 7  | Aprovado  |

Caso o número de faltas ultrapasse 25% do número total de aulas o aluno terá a situação "Reprovado por Falta", independente da média.

Caso a situação seja "Exame Final" é necessário calcular a "Nota para Aprovação Final"(naf) de cada aluno de acordo com seguinte fórmula:

5 <= (m + naf)/2

Caso a situação do aluno seja diferente de "Exame Final", preencha o campo "Nota para Aprovação Final" com 0.

Arredondar o resultado para o próximo número inteiro (aumentar) caso necessário.

Utilizar linhas de logs para acompanhamento das atividades da aplicação.

Os textos do código fonte (atributos, classes, funções, comentários e afins) devem ser escritos em inglês, salvo os identificadores e textos pré-definidos nesse desafio.

O candidato deve especificar os comandos que devem ser utilizados para execução da aplicação. Exemplo de uma aplicação node.js:

```bash
    1.npm install
    2.npm start
```

O candidato deve publicar o código fonte em um repositório git de sua preferência (exemplo: github, gitlab, bitbucket e etc).

## Especificações técnicas

### Tecnologias utilizadas

- **Back-end:** NodeJs
- **Infra:** Git

### Instruções de instalação

Antes de tudo, você precisará instalar o [NodeJS](https://nodejs.org/en/download/).
Após, clone este repositório na sua máquina:

```bash
git clone "https://github.com/Ploosh/Desafio-Tunts.git"
```

Instale as dependências do projeto:

```bash
cd "Desafio-Tunts"
npm install
```

Para utilizar a API é necessário criar uma chave de autenticação. [Clique aqui](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=service-account) para ver como cria-la.

Mova a chave para a pasta ```Desafio-Tunts/src``` e a renomeie para **key.json**

Na página da [planilha](https://docs.google.com/spreadsheets/d/1BCMGbmE_qGpHVhZYIfjb3L7MSERGYZkbkL0VMqDRu8k/edit?usp=sharing) clique em "Compartilhar" e adicione o e-mail disponível no seu arquivo key.json para que seja possível escrever na planilha.

### Executando o projeto localmente

Abra uma janela do terminal na pasta raiz do projeto e execute o back-end:

```bash
npm run start
```

Acompanhe o processo na página da tabela (:
