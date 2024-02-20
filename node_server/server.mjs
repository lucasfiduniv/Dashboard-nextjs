import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

// Cria uma instância do PrismaClient
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rota para registrar um novo usuário
app.post("/users", async (req, res) => {
  try {
    const newUser = req.body; // Não é necessário type assertion aqui
    await registerUser(newUser);
    res.status(201).send("Usuário registrado com sucesso");
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    res.status(500).send("Erro ao registrar usuário");
  }
});

// Função para registrar um novo usuário
async function registerUser() {
  try {
    const createdUser = await prisma.user.create({
      data: newUser,
    });
    console.log("Novo usuário registrado:", createdUser);
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
}

// Rota para obter todos os usuários
app.get("/users", async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
