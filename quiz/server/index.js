const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080

app.use(cors());

app.use(express.static("build"));

const questions = [
  {
    question: 'Hva står forkortelsen "IT" for?',
    options: ['Internet Informasjon', 'Internett teknologi', 'Informasjons tekknologi', 'Informasjons teknologi'],
    correctAnswer: 'Informasjons teknologi'
  },
  {
    question: 'Hva er en vanlig oppgave for IT-Brukerstøtte?',
    options: ['Hjelpe Ahmad med å komme seg på lol', 'Serveradministrasjon', 'Hjelpe med tekniske problemer', 'Regnskapsføring database'],
    correctAnswer: 'Hjelpe med tekniske problemer'
  },
  {
    question: 'Hva står API for?',
    options: ['Application Programming Interface', 'Advanced Protocol Integration', 'Application Protocol Internet', 'Automatic Program Instruction'],
    correctAnswer: 'Application Programming Interface'
  },
  {
    question: 'Hva står "LAN" for?',
    options: ['Large Area Network', 'Linked Area Network', 'Local Access Network', 'Local Area Network'],
    correctAnswer: 'Local Area Network'
  }
];

app.get('/questions', (req, res) => {
  res.json(questions);
});  

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Noe gikk galt!');
});
  
app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
