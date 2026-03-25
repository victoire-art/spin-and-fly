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

const PLACES_SETS = [
  (c) => [
    { name: `Le marché du dimanche matin de ${c}`, desc: `Arrive avant 9h — les meilleurs snacks et les vendeurs les plus bavards disparaissent vite. 🛒` },
    { name: `Le quartier historique`, desc: `Personne ne sait vraiment prononcer son nom, mais tout le monde y prend 300 photos. Architecture garantie. 📸` },
    { name: `Le spot secret des locaux`, desc: `Plage, montagne ou forêt — les habitants jurent que c'est "pas encore sur les guides". Tu le trouveras sur Instagram en 4 minutes. 🌿` },
  ],
  (c) => [
    { name: `Le musée national de ${c}`, desc: `Idéal pour faire semblant de comprendre l'histoire locale tout en admirant des céramiques de l'âge du bronze. 🏛️` },
    { name: `La rue gastronomique`, desc: `Une ruelle pavée avec 12 restos excellents, 3 trop touristiques et 1 adresse légendaire que tu trouveras au 3ème essai. 🍜` },
    { name: `Le point de vue panoramique`, desc: `Une montée de 20 minutes à pied pour une vue qui justifie entièrement le voyage. Golden hour obligatoire. 🌅` },
  ],
  (c) => [
    { name: `Les thermes / bains traditionnels`, desc: `Se détendre dans de l'eau chaude est universel. En ${c}, ils ont juste trouvé comment le rendre extraordinaire. ♨️` },
    { name: `Le temple / l'église / la mosquée emblématique`, desc: `Peu importe ta religion, le silence et l'architecture de cet endroit te feront réfléchir à des trucs profonds. 🕌` },
    { name: `Le bar à cocktails tenu par un expat français`, desc: `Il y en a un dans chaque pays. Il sert les meilleurs mojitos de la ville et a toujours des plans incroyables. 🍹` },
  ],
  (c) => [
    { name: `La vieille ville fortifiée`, desc: `Ruelles étroites, chats errants, odeurs d'épices et porte-monnaie qui se vident naturellement. Le combo parfait. 🏰` },
    { name: `Le marché artisanal`, desc: `Tout est fait main, tout est unique, tout va peser trop lourd dans ta valise retour. Achète quand même. 🎨` },
    { name: `La plage / le lac hors-saison`, desc: `Vide de touristes, peuplé de locaux, 3x moins cher et 10x plus authentique. Le vrai ${c}. 🏖️` },
  ],
  (c) => [
    { name: `Le parc national`, desc: `Randonnée au lever du soleil, faune sauvage optionnelle, photos de paysages qui vont faire des jaloux sur LinkedIn. 🏔️` },
    { name: `Le quartier créatif / artiste`, desc: `Street art, galeries improbables, cafés où les serveurs sont "entre deux projets". Ambiance garantie. 🎭` },
    { name: `L'adresse gastronomique locale`, desc: `Un resto sans menu en français, sans photo sur les murs, 8 tables. La meilleure expérience culinaire de ta vie. 🍽️` },
  ],
  (c) => [
    { name: `La forêt / la réserve naturelle`, desc: `Air pur, téléphone en mode avion, reconnexion avec la nature. En ${c}, la nature a décidé de ne pas faire semblant. 🌲` },
    { name: `Le marché aux épices`, desc: `Couleurs, odeurs, marchands qui t'appellent "mon ami" avec une sincérité inversement proportionnelle au prix affiché. 🌶️` },
    { name: `Le musée d'art contemporain`, desc: `Certaines œuvres te parleront. D'autres moins. Toutes te donneront l'impression d'être culturellement éveillé(e). 🖼️` },
  ],
  (c) => [
    { name: `Le port historique`, desc: `Bateaux de pêche à l'aube, odeur d'iode, et un vieux monsieur qui peut te raconter l'histoire du pays en 20 minutes. ⛵` },
    { name: `La citadelle / les remparts`, desc: `Monte là-haut, regarde autour de toi, et réalise que les gens vivaient comme ça il y a 800 ans. C'est dingue. 🗺️` },
    { name: `Le café littéraire`, desc: `Existant depuis au moins 1923, fréquenté par des intellectuels locaux, sert le meilleur café de la ville. Trouve-le. ☕` },
  ],
  (c) => [
    { name: `La cascade / source naturelle`, desc: `Un trek de 2h pour arriver devant quelque chose de tellement beau que tu resteras 45 minutes sans rien dire. 💧` },
    { name: `Le village perché`, desc: `Accessible uniquement par une route sinueuse, habité par 300 personnes, produit le meilleur vin/fromage/miel de la région. 🏘️` },
    { name: `Le marché nocturne`, desc: `Tout s'anime après 20h — street food, musique live, et cette ambiance électrique que seules les nuits chaudes peuvent créer. 🌙` },
  ],
];

import countryContent from '../data/countryContent.js';

function pick(arr, seed) {
  return arr[seed % arr.length];
}

export async function generateContent(countryName) {
  const seed = countryName.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const real = countryContent[countryName];
  return {
    fun_fact: real?.fun_fact ?? pick(FUN_FACTS, seed)(countryName),
    slack_message: pick(SLACK_MESSAGES, seed + 3)(countryName),
    places: real?.places ?? pick(PLACES_SETS, seed + 7)(countryName),
  };
}
