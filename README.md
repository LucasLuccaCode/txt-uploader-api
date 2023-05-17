# TXT UPLOADER API

Api para upload de arquivos, o arquivo é recebido no formato `.txt`, tem seu conteúdo criptografado, e em seguida é armazenado em um banco de dados Mongodb(Padrão). Utiliza uma estrutura desacoplada, onde é facilmente possível implementar outros bancos de dados como alternativa ao Mongodb.

## Endpoints

### Realizar upload de um arquivo para a API.

- **URL:** `/upload`
- **Método:** POST
- **Parâmetros do corpo da requisição:**
  - `file`: Arquivo a ser enviado (multipart/form-data)
- **Respostas:**

  - `201 OK`: Arquivo salvo com sucesso.
  - `400 Bad Request`: Nenhum arquivo foi enviado.
  - `500 Internal Server Error`: Erro ao salvar o arquivo.

### Buscar todos os Arquivos salvos.

- **URL:** `/files`
- **Método:** GET
- **Respostas:**
  - `200 OK`: Retorna uma lista com os dados dos arquivos.
  - `500 Internal Server Error`: Erro ao buscar arquivos.

### Buscar conteúdo do arquivo pelo nome.

- **URL:** `/files/:filename`
- **Método:** GET
- **Parâmetros da URL:**
  - `filename`: Nome do arquivo a ser buscado
- **Respostas:**
  - `200 OK`: Retorna o conteúdo do arquivo.
  - `400 Bad Request`: Nome do arquivo para consultar ausente.
  - `404 Not Found`: Arquivo não encontrado.
  - `500 Internal Server Error`: Erro ao buscar o arquivo.

### Excluir um arquivo pelo nome.

- **URL:** `/files/:filename`
- **Método:** DELETE
- **Parâmetros da URL:**
  - `filename`: Nome do arquivo a ser excluído
- **Respostas:**
  - `200 OK`: Arquivo excluído com sucesso.
  - `400 Bad Request`: Nome do arquivo para deletar ausente.
  - `404 Not Found`: Arquivo não encontrado.
  - `500 Internal Server Error`: Erro ao excluir o arquivo.

### Entidades

```ts
File {
  id: string;
  filename: string;
  content: string;
  createdAt: Date;
}
```

## Executando a API

Siga as instruções abaixo para executar a sua API localmente(Localhost):

### 1 - Instalação

No terminal faça o clone do repositório da api:

```bash
git clone git@github.com:Tasker-Super/txt-uploader-api.git
```

Navegue para o diretório:

```bash
cd txt-uploader-api
```

Execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install
```

### 2 - Configuração

Renomeie o arquivo `.env.example` para `.env`

Abra o arquivo `.env` e configure as variáveis de ambiente necessárias, como a URL de conexão com o banco de dados mongodb e a chave para criptografia do conteúdo do arquivo.

```js
PORT = 3000;
SECRET_KEY = xxxx - xx - xxxx;
MONGODB_URI = xxx - xxxx - xxxxx;
```

### 3 - Executando o servidor

Após a conclusão da instalação e configuração, você pode iniciar o servidor da API localmente executando o seguinte comando:

```bash
npm run dev
```

O servidor será iniciado e estará ouvindo em http://localhost:3000.

Certifique-se de que a porta 3000 esteja disponível e não esteja sendo usada por outro serviço.

### 4 - Testando a API

Você pode testar a API usando ferramentas como o Postman, Insomnia ou qualquer outra ferramenta de sua preferência.

Certifique-se de enviar as solicitações para as rotas corretas, seguindo os métodos e parâmetros especificados na documentação.

### 5 - Deploy / Hospedar

- Esta API está totalmente pronta / configurada para ser hospedada online na `vercel`, sendo preciso apenas configurar as variáveis de ambiente no serviço contendo a url de conexão para o seu banco de dados mongodb(`MONGODB_URI`) e a chave secreta(`SECRET_KEY`) no momento em que for executar o deploy.

  - Clique aqui em [Vercel](https://vercel.com) para ir para o serviço.

- Para adicionar seu banco de dados mongodb, você também precisará se cadastrar no serviço, e gerar a url para conexão.

  - Clique aqui em [Mongodb Atlas](https://account.mongodb.com/account/login) para ir para o serviço.

## Extras

- Proteção contra requisições abusivas e ataque de força bruta
- Criptografia dos conteúdos salvos

## Tecnologias usadas

- Express
- Typescript
- Mongodb
- Mongoose
- Multer
- RateLimit
- CryptoJS
- MVC Architecture
- Repository Pattern
