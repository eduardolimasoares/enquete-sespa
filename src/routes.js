const express = require('express');
const routes = express.Router();
const { setAnswer, questoes } = require('../src/controller/google-sheets');

routes.get('/', (req, res) => {
  res.render('home', {});
});

routes.post('/add', (req, res) => {
  const questaoUm = req.body.questaoUm;
  const questaoDois = req.body.questaoDois;
  const questaoTres = req.body.questaoTres;
  const questaoQuatro = req.body.questaoQuatro;
  const questaoCinco = req.body.questaoCinco;
  const whatsapp = req.body.whatsapp;
  setAnswer(questaoUm, questaoDois, questaoTres, questaoQuatro, questaoCinco, whatsapp);
  res.render('add');
});

routes.post('/charts', async (req, res) => {
  const qQuestoes = await questoes();
  console.log('RoutesJs: ', qQuestoes);

  // console.log(total)
  res.render('charts', {
    totalQuestaoUm: qQuestoes[0],
    totalQuestaoDois: qQuestoes[1],
    totalQuestaoTres: qQuestoes[2],
    totalQuestaoQuatro: qQuestoes[3],
    totalQuestaoCinco: qQuestoes[4],
  });
});

module.exports = routes;
