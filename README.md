# Marvel Search Heroes

O site Marvel Search Heroes é como uma base de dados de heróis Marvel, onde você pode olhar o catálogo, pesquisar por heróis, favoritar aqueles que você mais gosta (mas apenas 5, hein :stuck_out_tongue_winking_eye:) e ver detalhes sobre cada um deles.

## Como posso utilizar no meu computador? :thinking:

Atualmente o Marvel Search Heroes está hospedado no github pages, e você pode acessar no *carolesj.github.io/frontend-test*.

Caso você queira **rodar localmente** a aplicação, vamos passar por alguns passos:

* Clonar este repositório
* Configurar o ngrok
* Adquirir uma chave da API da Marvel
* Instalar as dependências e rodar


### Clonando o repositório

Para clonar este repositório, assumindo que você tenha o git instalado, basta rodar o seguinte comando.

```
  git clone https://github.com/carolesj/frontend-test.git
```


### Configurando o ngrok

Vá até o site do [ngrok](https://ngrok.com/) e crie uma conta, e depois disso faça o [download](https://ngrok.com/download).

Você pode descompactar o arquivo baixado atráves da interface gráfica do seu computador ou rodar o seguinte comando:

```
  unzip /path/to/ngrok.zip
```

Rode o seguinte comando dentro da pasta descompactada, substituindo o trecho indicado pelo seu token de autorização:

```
  ./ngrok authtoken <your_auth_token>
```


### Configurando a chave da API da Marvel

Vá até o site da [Marvel Developer Portal](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount) e crie uma conta. Após isso selecione **Get a Key** na barra de menu e copie sua chave pública.

Crie então um arquivo chamado **.env** no diretório **my-app**. Em seu conteúdo você deve colar o seguinte snippet, trocando o trecho indicado pela sua chave pública.

```
  REACT_APP_MARVEL_API_PUBLIC_KEY = <SUA CHAVE PÚBLICA>
```

Nessa mesma área do site, não se esqueça de adicionar ***.ngrok.io** aos domínios autorizados a utilizarem a chave para fazer chamadas.

:warning: **Atenção**: Caso deseje fazer alterações a este projeto ou sua própria versão dele, lembre-se de **não** adicionar o arquivo **.env** ao github e de **jamais** compartilhar sua chave privada.


### Instalar as dependências e rodar

Dentro do diretório **my-app** do projeto, rode os seguintes comandos:

```
  yarn install
  yarn start
```

Depois, em outra instância do seu terminal, rode:

```
  ./ngrok http 3000
```

Por fim abra o link https que o ngrok retorna e você poderá ver como a aplicação se comporta.



## Decisões de Projeto :heavy_check_mark:

### Organização

A organização dos componentes dentro do projeto segue aquela proposta no **Atomic Design**, sobre a qual você pode saber mais [aqui](https://bradfrost.com/blog/post/atomic-web-design/).

Em resumo, no Atomic Design, nossos componentes são separados por nível de complexidade. Os mais simples ficam disponíveis em **Atoms** e os mais elaborados em **Pages**. Podemos usar os mais simples como blocos para montar os mais complexos e também podemos adicionar mais a eles.

O motivo dessa escolha é o fato de que, dessa forma, é fácil de compreender onde o necessário estará: se você está desenvolvendo um componente em Molecules e precisa de um bloco mais simples, ele com certeza estará em Atoms. Isso torna o processo de desenvolvimento mais eficiente e menos custoso (no sentido cognitivo) e facilita o entendimento do código para quem não participou do processo de desenvolvimento.

### Padronização

Foram utilizadas algumas ferramentas para manter a padronização do código e de commits.

O [Husky](https://github.com/typicode/husky), que é uma ferramenta que possibilita uma forma simples de se utilizar git hooks, foi uma delas, utilizado em conjunto com outras 3: [lint-staged](https://github.com/okonet/lint-staged), que permite rodar um linter (no caso o Eslint) em arquivos staged, melhorando a qualidade do código enviado ao git; [commitlint](https://github.com/conventional-changelog/commitlint), que possibilita definir um padrão a ser seguido nas mensagens de commit e o [commitizen](https://github.com/commitizen/cz-cli) que, configurado com os mesmos padrões do commit lint, orienta a montagem de commits, podendo receber a resposta para perguntas estruturadas e montando a mensagem de commit ao final.

### Organização

De forma geral, foram utilizadas issues e projects do github para fazer a organização do projeto. 

A organização pessoal, com links importantes e anotações foi feita através do Notion.

### Stack

Conforme definido na especificação, o projeto foi desenvolvido em React (com a utilização de hooks para reduzir a replicação de código e pela facilidade para refatorar, já que o projeto deveria ser desenvolvido de forma rápida) e também contou com a utilização de Sass.


## To do :exclamation:

### Stats de heróis

Como não consegui encontrar qual chamada da API retornava alguns dos stats de heróis (como número de filmes), deixei essa funcionalidade para o final, e acabei não conseguindo colocar os stats para os quais as chamadas eu conhecia (como data da última aparição e número total de quadrinhos em que aparece). Isso deverá ser adicionado depois.

### Paginação

### Persistência com Store

### Gerenciamento de estado

Como o projeto não era muito longo, a decisão de deixar o gerenciamento de estados para o final, caso sobrasse tempo, foi tomada.

Quando ele for implementado, será feito utilizando a context API.

### Testes

Devido ao tempo de desenvolvimento, não foi possível cumprir com o requisito extra de testes antes da data de entrega.

Quando eles forem implementados, utilizarei Jest em conjunto com RTL para testes unitários e de integração e Cypress para testes end to end.

### CI/CD

Pode ser facilmente implementada uma rotina, utilizando Actions do GitHub, que rode automaticamente alguns dos testes supracitados antes do merge e, assim que os testes passarem, permita o merge e faça automaticamente o deploy para o github pages.



# Luizalabs Frontend Challenge

### Objetivo
Desenvolver uma aplicação de listagem e detalhe de personagens de quadrinhos.

#### Requisitos
- Deve ser uma SPA “single page application” (dar preferencia ao React);
- Não utilizar bibliotecas de UI como: bootstrap, semantic-ui, antdesign e etc;
- Utilizar API da Marvel (https://developer.marvel.com/docs);
- Disponibilizar em uma URL pública do projeto rodando para avaliação;
- Disponibilizar código em repositório Git de sua preferência, commitando cada fase do seu processo de desenvolvimento;
- Seguir layout da pasta `./assets`, respeitando as páginas, features e componentes (não será avaliado “pixel perfect”).

#### Requisitos funcionais
- Página de listagem de personagens (home):
  - Exibir os 20 primeiros resultados da API;
  - Permitir ordenação por nome do personagem;
  - Permitir filtrar por nome, pelo campo de busca;
  - Permitir mostrar apenas os personagens favoritos;
  - Permitir o usuário favoritar/desfavoritar até 5 personagens;
- Página de detalhe do personagem:
  - Exibir dados do personagem;
  - Exibir últimos 10 quadrinhos lançados deste personagem (onSaleDate);
  - Permitir o usuário favoritar/desfavoritar (dentro do limite de 5).
  
#### `Bônus (não obrigatório)`
- Adicionar paginação a listagem para exibir além dos 20 personagens iniciais;
- Persistir os dados de favoritos (para manter os dados após o reload da página);
- Layout responsivo;
- Utilização de ES6+;
- Utilização de ferramentas para garantir a qualidade do código;
- Teste e2e;
- CI/CD.

### Dicas
- Valorizamos muito testes em nosso processo de desenvolvimento;
- Aqui no LuizaLabs todos os desenvolvedores podem participar do processo de avaliação técnica então oriente os avaliadores a como instalar, testar e executar seu código.

<br/>
<br/>

<p align="center"><img src="luizalabs.jpeg" width="80" height="80"/></p>
<p align="center">
<sub>Gente. Inovação e Código. <a href="https://luizalabs.com">Luizalabs</a></sub>
</p>
