const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./credentials.json');
const { promisify } = require('util');

const docId = '1mcJEECSMzCg8dWrnigjBiIVkm0-HL2E0gLYVtGK64-Q';
const doc = new GoogleSpreadsheet(docId);

const acssesSheet = async () => {
  await promisify(doc.useServiceAccountAuth)(credentials);
  const info = await promisify(doc.getInfo)();
  return info;
};

const setAnswer = async (questaoUm, questaoDois, questaoTres, questaoQuatro, questaoCinco, whatsapp) => {
  const info = await acssesSheet();
  const worksheet = info.worksheets[0];
  // /  \/adiciona uma nova linha
  await promisify(worksheet.addRow)({
    questaoUm: questaoUm,
    questaoDois: questaoDois,
    questaoTres: questaoTres,
    questaoQuatro: questaoQuatro,
    questaoCinco: questaoCinco,
    whatsapp: whatsapp,
  });
  // console.log(info)
};

const questoes = async () => {
  const info = await acssesSheet();
  const worksheet = info.worksheets[0];
  const rows = await promisify(worksheet.getRows)({});
  //   console.log(rows.questaodois);
  let a = [];
  let b = [];
  let c = [];
  let d = [];
  let e = [];
  let f = [];
  let g = [];
  let h = [];
  let i = [];
  let j = [];
  let k = [];
  let l = [];
  let m = [];
  let n = [];
  let o = [];
  let p = [];
  let qUm = [];
  let qDois = [];
  let qTres = [];
  let qQuatro = [];
  let qCinco = [];

  rows.forEach((row) => {
    // console.log(row.questaodois);
    if (row.questaoum === 'a') {
      a.push(row.questaoum);
      return;
    }
    if (row.questaoum === 'b') {
      b.push(row.questaoum);
      return;
    }
    if (row.questaoum === 'c') {
      c.push(row.questaoum);
      return;
    }
  });

  rows.forEach((row) => {
    if (row.questaodois === 'd') {
      d.push(row.questaodois);
      return;
    }
    if (row.questaodois === 'e') {
      e.push(row.questaodois);
      return;
    }
    if (row.questaodois === 'f') {
      f.push(row.questaodois);
      return;
    }
  });

  rows.forEach((row) => {
    if (row.questaotres === 'g') {
      g.push(row.questaotres);
      return;
    }
    if (row.questaotres === 'h') {
      h.push(row.questaotres);
      return;
    }
    if (row.questaotres === 'i') {
      i.push(row.questaotres);
      return;
    }
  });

  rows.forEach((row) => {
    if (row.questaoquatro === 'j') {
      j.push(row.questaoquatro);
      return;
    }
    if (row.questaoquatro === 'k') {
      k.push(row.questaoquatro);
      return;
    }
    if (row.questaoquatro === 'l') {
      l.push(row.questaoquatro);
      return;
    }
  });
  rows.forEach((row) => {
    if (row.questaocinco === 'm') {
      m.push(row.questaocinco);
      return;
    }
    if (row.questaocinco === 'n') {
      n.push(row.questaocinco);
      return;
    }
    if (row.questaocinco === 'o') {
      o.push(row.questaocinco);
      return;
    }
    if (row.questaocinco === 'p') {
      p.push(row.questaocinco);
      return;
    }
  });

  qUm.push(a.length);
  qUm.push(b.length);
  qUm.push(c.length);

  qDois.push(d.length);
  qDois.push(e.length);
  qDois.push(f.length);

  qTres.push(g.length);
  qTres.push(h.length);
  qTres.push(i.length);

  qQuatro.push(j.length);
  qQuatro.push(k.length);
  qQuatro.push(l.length);

  qCinco.push(m.length);
  qCinco.push(n.length);
  qCinco.push(o.length);
  qCinco.push(p.length);

  let total = [];
  total.push(qUm);
  total.push(qDois);
  total.push(qTres);
  total.push(qQuatro);
  total.push(qCinco);
  //   console.log(total);

  return total;
};

// setAnswer('c')
module.exports = { setAnswer, questoes };
