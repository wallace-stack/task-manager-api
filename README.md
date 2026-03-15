<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">📋 Task Manager API</h1>

<p align="center">
  API REST completa para gerenciamento de tarefas, construída com NestJS, TypeORM e MySQL.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM" />
</p>

---

## 🚀 Tecnologias

- **NestJS** — Framework Node.js progressivo e escalável
- **TypeScript** — Tipagem estática para maior segurança
- **TypeORM** — ORM para manipulação do banco de dados
- **MySQL** — Banco de dados relacional
- **JWT** — Autenticação segura com JSON Web Token
- **bcrypt** — Criptografia de senhas
- **class-validator** — Validação de dados nas requisições

---

## ⚙️ Como rodar o projeto

### Pré-requisitos
- Node.js 18+
- MySQL rodando localmente

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/wallace-stack/task-manager-api.git
cd task-manager-api
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Preencha o `.env` com suas credenciais:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_DATABASE=task_manager
JWT_SECRET=seu_segredo_jwt
```

4. Rode o projeto:
```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`

---

## 🔐 Autenticação

A API usa JWT. Para acessar rotas protegidas:

1. Crie um usuário em `POST /users`
2. Faça login em `POST /auth/login`
3. Use o `access_token` retornado no header:
```
Authorization: Bearer seu_token_aqui
```

---

## 📌 Endpoints

### Auth
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /auth/login | Login e geração do token JWT |

### Users
| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | /users | Lista todos os usuários | ❌ |
| GET | /users/:id | Busca usuário por ID | ❌ |
| POST | /users | Cria novo usuário | ❌ |
| PATCH | /users/:id | Atualiza usuário | ❌ |
| DELETE | /users/:id | Remove usuário | ❌ |

### Tasks
| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | /tasks | Lista todas as tasks | ✅ |
| GET | /tasks/:id | Busca task por ID | ✅ |
| POST | /tasks | Cria nova task | ✅ |
| PATCH | /tasks/:id | Atualiza task | ✅ |
| DELETE | /tasks/:id | Remove task | ✅ |

---

## 📦 Exemplos de uso

### Criar usuário
```json
POST /users
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

### Login
```json
POST /auth/login
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

### Criar task (com token)
```json
POST /tasks
Authorization: Bearer seu_token

{
  "title": "Estudar NestJS",
  "userId": 1
}
```

---

## 🗄️ Estrutura do projeto
```
src/
├── auth/           # Autenticação JWT
│   ├── dto/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   └── jwt.strategy.ts
├── tasks/          # Módulo de tasks
│   ├── dto/
│   ├── task.entity.ts
│   ├── tasks.controller.ts
│   ├── tasks.module.ts
│   └── tasks.service.ts
├── users/          # Módulo de usuários
│   ├── dto/
│   ├── user.entity.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
└── app.module.ts
```

---

## 👨‍💻 Autor

Feito por **Wallace Araujo** — em desenvolvimento constante 🚀

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wallacearaujo27/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wallace-stack)

---

## 📄 Licença

Este projeto está sob a licença MIT.