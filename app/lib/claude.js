const FUN_FACTS = [
  (c) => `${c} détient un record mondial assez inattendu : ses habitants consomment une quantité astronomique de café par habitant. Les réunions d'équipe y durent donc deux fois plus longtemps, mais tout le monde est beaucoup plus enthousiaste. ☕`,
  (c) => `Saviez-vous qu'en ${c}, il existe une loi locale qui interdit formellement de promener son chat en laisse un mardi ? Personne ne sait vraiment pourquoi, mais les chats semblent apprécier cette protection juridique. 🐱`,
  (c) => `${c} possède plus de festivals par habitant que n'importe quel autre pays de sa région. En moyenne, un habitant participe à 14 fêtes locales par an — ce qui explique beaucoup de choses sur leur productivité et leur joie de vivre. 🎉`,
  (c) => `Le sol de ${c} contient des minéraux si rares que les géologues du monde entier s'y rendent chaque année comme en pèlerinage. Certains d'entre eux finissent par ne jamais repartir, attirés par le charme inexplicable de l'endroit. 🪨`,
  (c) => `${c} a la particularité d'être le seul pays au monde où la sieste est officiellement inscrite dans la constitution. Les travailleurs bénéficient d'une pause réglementaire de 23 minutes, ni plus ni moins — la précision est remarquable. 😴`,
  (c) => `Les habitants de ${c} parlent en moyenne 2,7 langues. Ce chiffre monte à 4,1 si l'on compte "parler fort et lentement à un étranger" comme une langue à part entière. 🗣️`,
  (c) => `${c} est le berceau d'une danse traditionnelle qui ressemble étrangement à quelqu'un qui cherche ses clés sous la pluie. Elle est pourtant classée au patrimoine immatériel de l'UNESCO depuis 2003. 💃`,
  (c) => `En ${c}, les transports en commun sont tellement ponctuels que les habitants règlent leur montre dessus. Un retard de 30 secondes déclenche une cellule de crise nationale et fait la une des journaux. 🚆`,
  (c) => `${c} abrite la plus grande collection de parapluies vintage au monde — 47 000 unités exposées dans un musée entièrement consacré à la pluie. L'ironie ? Il n'y pleut presque jamais. ☂️`,
  (c) => `La gastronomie de ${c} est si élaborée que le simple fait de commander un repas prend en moyenne 45 minutes. Les habitants considèrent cela comme du "slow food" et en sont extrêmement fiers. 🍽️`,
];

const SLACK_MESSAGES = [
  (c) => `Salut Clara la boss, je t'écris depuis mon bureau mais mon âme est déjà en ${c} 🌍✈️ Mon médecin m'a diagnostiqué une grave carence en dépaysement et a prescrit 10 jours minimum sur place. C'est remboursé par la sécu si tu signes le bon. Je reviendrai avec des idées révolutionnaires et au moins trois anecdotes de dîner. Bisous managériaux 💼`,
  (c) => `Salut Clara la boss, il faut qu'on parle 🚨 J'ai découvert hier que je suis peut-être l'héritier(e) légitime d'un fromage artisanal protégé en ${c}. Pour des raisons juridiques complexes, je dois me rendre sur place pour revendiquer mon héritage. Je serai absent(e) 2 semaines. Mon avocat (mon cousin qui a regardé Suits) confirme que c'est obligatoire. Merci pour ta compréhension 🧀`,
  (c) => `Salut Clara la boss, je te demande officiellement 10 jours de congés pour ${c} 🙏 La raison est simple : j'ai promis à l'univers que j'irais si notre dernier sprint se passait bien. Le sprint s'est bien passé. Je ne peux pas trahir l'univers — tu comprends les implications cosmiques. Je travaillerai d'autant plus fort à mon retour, mu(e) par la gratitude universelle ✨`,
  (c) => `Salut Clara la boss, situation d'urgence modérée 🆘 Mon application de méditation m'a dit ce matin que mon "niveau de sérendipité" était critique et que seul un voyage en ${c} pouvait le rétablir. Je joins le screenshot en pièce jointe. Les RH ont confirmé que "équilibre vie pro/perso" couvre ce cas de figure. Je pars la semaine prochaine, je prévois un retour transformé et potentiellement bilingue 🧘`,
  (c) => `Salut Clara la boss, je vais être honnête avec toi 💬 Un pigeon a lâché quelque chose sur mon épaule ce matin en regardant vers le sud-est — direction exacte de ${c}. C'est un signe que je ne peux pas ignorer sans mettre en péril l'équilibre fragile de notre équipe. Je prendrai mes congés la semaine prochaine. À mon retour, je t'apporte un souvenir et une énergie renouvelée. C'est donnant-donnant 🕊️`,
  (c) => `Salut Clara la boss, j'ai besoin de congés pour ${c} 🌴 Mon horoscope dit "départ imminent vers l'inconnu" et mon instinct dit "${c}". J'ai croisé le même bus numéro 42 trois fois aujourd'hui — c'est clairement un signe du destin. Je ne pars que 8 jours, mais je reviendrai avec la clarté mentale d'un moine tibétain ayant accès à Jira. Tu y gagnes au change 🔮`,
  (c) => `Salut Clara la boss, requête de congés formelle, objet : mission spirituelle en ${c} 📋 J'ai regardé trop de documentaires sur ce pays et je pense sincèrement que ma présence là-bas est nécessaire à l'équilibre géopolitique local. Je ne suis pas qualifié(e) pour l'expliquer davantage. 7 jours ouvrés, départ lundi. Je serai joignable par email sauf quand je ne le serai pas. Bises diplomatiques 🌐`,
  (c) => `Salut Clara la boss, j'ai une grande nouvelle et une demande 🎊 La grande nouvelle : j'ai été sélectionné(e) par tirage au sort mystérieux pour représenter notre open-space lors d'un sommet informel en ${c}. La demande : j'aurais besoin de 9 jours. Je sais que ça paraît inventé mais je t'assure que c'est à peine romancé. Le compte-rendu de mission sera magnifique 📝`,
];

function pick(arr, seed) {
  return arr[seed % arr.length];
}

export async function generateContent(countryName) {
  // Deterministic-ish but varied based on country name
  const seed = countryName.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return {
    fun_fact: pick(FUN_FACTS, seed)(countryName),
    slack_message: pick(SLACK_MESSAGES, seed + 3)(countryName),
  };
}
