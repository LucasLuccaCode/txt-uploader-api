# TXT UPLOADER API

Api para upload de arquivos, o arquivo é recebido no formato `.txt`, tem seu conteúdo criptografado, e em seguida é armazenado em um banco de dados Mongodb(Padrão). Utiliza uma estrutura desacoplada, onde é facilmente possível implementar outros bancos de dados como alternativa ao Mongodb.

## Endpoints

### Upload de Arquivo

Realiza o upload de um arquivo para a API.

- **URL:** `/upload`
- **Método:** POST
- **Parâmetros do corpo da requisição:**
  - `file`: Arquivo a ser enviado (multipart/form-data)
- **Respostas:**
  - `200 OK`: Arquivo salvo com sucesso.
  - `500 Internal Server Error`: Erro ao salvar o arquivo.

### Buscar Arquivo por Nome

Busca o conteúdo do arquivo pelo nome.

- **URL:** `/files/:filename`
- **Método:** GET
- **Parâmetros da URL:**
  - `filename`: Nome do arquivo a ser buscado
- **Respostas:**
  - `200 OK`: Retorna o conteúdo do arquivo.
  - `404 Not Found`: Arquivo não encontrado.
  - `500 Internal Server Error`: Erro ao buscar o arquivo.

### Excluir Arquivo por Nome

Exclui o arquivo pelo nome.

- **URL:** `/files/:filename`
- **Método:** DELETE
- **Parâmetros da URL:**
  - `filename`: Nome do arquivo a ser excluído
- **Respostas:**
  - `200 OK`: Arquivo excluído com sucesso.
  - `404 Not Found`: Arquivo não encontrado.
  - `500 Internal Server Error`: Erro ao excluir o arquivo.

## Executando a API

Siga as instruções abaixo para executar a sua API:

### Pré-requisitos

- Certifique-se de ter o Node.js instalado na sua máquina.

#### 1 - Instalação

- Faça o clone do repositório ou faça o download dos arquivos da API.

- Abra o terminal ou prompt de comando e navegue até o diretório raiz da API.

- Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

### 2 - Configuração

- Renomeie o arquivo .env.example para .env.

- Abra o arquivo .env e configure as variáveis de ambiente necessárias, como a URL do banco de dados, chaves de API ou outras configurações específicas.

### 3 - Executando o servidor

- Após a conclusão da instalação e configuração, você pode iniciar o servidor da API localmente executando o seguinte comando:

```bash
npm start
```

- O servidor será iniciado e estará ouvindo em http://localhost:3000. Certifique-se de que a porta 3000 esteja disponível e não esteja sendo usada por outro serviço.

### 4 - Pré-requisitos

- Certifique-se de ter o Node.js instalado na sua máquina.
  Instalação

- Faça o clone do repositório ou faça o download dos arquivos da API.

- Abra o terminal ou prompt de comando e navegue até o diretório raiz da API.

- Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

### 5 - Executando o servidor

- Após a conclusão da instalação e configuração, você pode iniciar o servidor da API executando o seguinte comando:

```bash
npm start
```

- O servidor será iniciado e estará ouvindo em http://localhost:3000. Certifique-se de que a porta 3000 esteja disponível e não esteja sendo usada por outro serviço.

### 6 - Testando a API

- Você pode testar a API usando ferramentas como o cURL, Postman, Insomnia ou qualquer outra ferramenta de sua preferência.

- Certifique-se de enviar as solicitações para as rotas corretas, seguindo os métodos e parâmetros especificados na documentação.

### Deploy / Hospedar

Você pode fazer fazer deploy desta api em alguns serviços grátis como a [Vercel](https://vercel.com)

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
