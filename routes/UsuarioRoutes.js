const express = require ("express");

const router = express.Router();

const usuarioController = 
  require("../controllers/UsuarioController");

router.post(
  "/usuarios",
  usuarioController.criarUsuario
);

router.get(
  "/usuarios",
  usuarioController.consultarUsusarios
);

router.post(
  "/login",
  usuarioController.loginUsuarios
);
