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
  },
  {
    question: 'Hva er formålet med en VPN?',
    options: ['Å øke Internett-hastigheten', 'Å sikre en privat og sikker tilkobling over et offentlig nettverk', 'Å begrense tilgangen til bestemte nettsider', 'Å kontrollere datatrafikken til serveren'],
    correctAnswer: 'Å sikre en privat og sikker tilkobling over et offentlig nettverk'
  },
  {
    question: 'Hva er en vanlig oppgave for en nettverksadministrator?',
    options: ['Designe nettsider', 'Feilsøking av nettverksproblemer', 'Utvikling av mobilapper', 'Administrering av sosiale medier-kontoer'],
    correctAnswer: 'Feilsøking av nettverksproblemer'
  },
  {
    question: 'Hva er formålet med DNS?',
    options: ['Å kryptere Internett-trafikk', 'Å spore Internett-aktivitet', 'Å omgå brannmurer', 'Å oversette domenenavn til IP-adresser'],
    correctAnswer: 'Å oversette domenenavn til IP-adresser'
  },
  {
    question: 'Hva er et vanlig sikkerhetstiltak for å beskytte mot skadelig programvare?',
    options: ['Oppdatering av antivirusprogramvare', 'Sletting av alle e-poster', 'Åpning av alle vedlegg', 'Deaktivering av brannmur'],
    correctAnswer: 'Oppdatering av antivirusprogramvare'
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
