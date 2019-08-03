GraphQL

Básico

Ir no GITHUB >> Settings >> Developer Settings >> Personal Access Tokens

Gerar um token que vai servir pra autenticar no GraphQL, não esquecer de dar permissão para o que vai ser acessado.

153e5303970901caf2203ff280468caf8f04186e

https://developer.github.com/v4/explorer/

É possivel criar consultas e ver o resultado na mesma tela.

Comandos

Campos com "!" são obrigatórios na pesquisa
Pesquisa é case insensitive

Fragment - Forma de reutilizar os campos a serem consultados

{
  book: organization(login: "the-road-to-learn-react") {
    ...sharedOrganizationFields
  }
  company: organization(login: "facebook") {
    ...sharedOrganizationFields
  }
}

fragment sharedOrganizationFields on Organization {
  name
  url
  description
  location
}


{

  search(query:"REACT" type:REPOSITORY){
    userCount
  }
}

TYPE:
ISSUE
Returns results matching issues in repositories.

REPOSITORY
Returns results matching repositories.

USER
Returns results matching users and organizations on GitHub.
