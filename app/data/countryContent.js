const countryContent = {
  "France": {
    fun_fact: "La France est le pays le plus visité au monde avec près de 90 millions de touristes par an — soit plus que sa propre population. Le Louvre est également le musée le plus fréquenté du monde avec plus de 9 millions de visiteurs chaque année.",
    places: [
      { name: "Le Mont-Saint-Michel", desc: "L'abbaye médiévale perchée sur son îlot rocheux, entourée par la mer lors des grandes marées. Un des sites les plus photographiés de France. 🏰" },
      { name: "Les Gorges du Verdon", desc: "Le « Grand Canyon européen » avec ses eaux turquoise et ses falaises vertigineuses de 700m. Paradis du kayak et de la randonnée. 🏞️" },
      { name: "Le quartier du Marais (Paris)", desc: "Ruelles pavées du XVIIe siècle, galeries d'art contemporain, le Centre Pompidou et les meilleurs falafels de Paris à deux pas de la place des Vosges. 🎨" },
    ],
  },

  "Italie": {
    fun_fact: "L'Italie détient le record mondial du nombre de sites classés au patrimoine mondial de l'UNESCO avec 58 sites reconnus. Elle possède également 3 volcans actifs sur son territoire : l'Etna, le Stromboli et le Vésuve.",
    places: [
      { name: "Le Colisée (Rome)", desc: "L'amphithéâtre romain du Ier siècle capable d'accueillir 80 000 spectateurs — le monument antique le mieux conservé au monde. 🏛️" },
      { name: "Le Canal Grande (Venise)", desc: "La grande artère de Venise bordée de palais gothiques et baroques, à parcourir en vaporetto au coucher du soleil. ⛵" },
      { name: "La Côte amalfitaine", desc: "Villages colorés accrochés aux falaises au-dessus de la Méditerranée, avec Positano et Ravello comme joyaux absolus. 🍋" },
    ],
  },

  "Espagne": {
    fun_fact: "La Sagrada Família de Barcelone est en construction depuis 1882 et devrait être achevée vers 2026, soit plus de 140 ans de chantier — ce qui en fait le plus long projet architectural de l'histoire moderne.",
    places: [
      { name: "L'Alhambra (Grenade)", desc: "Le complexe palatial nasride du XIVe siècle, avec ses jardins de l'Generalife et ses arabesques en stuc — le monument le plus visité d'Espagne. 🕌" },
      { name: "La Sagrada Família (Barcelone)", desc: "La basilique d'Antoni Gaudí, en construction depuis 1882 : une explosion de pierre organique, de vitraux colorés et de symbolisme chrétien. ⛪" },
      { name: "Le Parc national de Doñana", desc: "Le plus grand espace naturel d'Europe occidentale en Andalousie, refuge du lynx ibérique et de centaines de milliers d'oiseaux migrateurs. 🦅" },
    ],
  },

  "Japon": {
    fun_fact: "Le Japon compte 6 852 îles et enregistre plus de 1 500 tremblements de terre par an. L'aire métropolitaine de Tokyo, avec ses 37 millions d'habitants, est l'agglomération urbaine la plus peuplée du monde.",
    places: [
      { name: "Kyoto (Gion et Fushimi Inari)", desc: "L'ancienne capitale impériale avec ses 1 600 temples bouddhistes, ses geishas et les milliers de torii vermillon du sanctuaire Fushimi Inari. ⛩️" },
      { name: "Hakone et le Mont Fuji", desc: "Le volcan sacré japonais (3 776m), visible depuis Hakone avec ses sources thermales, ses ryokans traditionnels et ses bains onsen face au cratère. 🗻" },
      { name: "Hiroshima et l'île de Miyajima", desc: "Le Dôme de la Bombe atomique et le torii flottant du sanctuaire d'Itsukushima — deux des images les plus fortes et les plus contemplatives du Japon. 🕊️" },
    ],
  },

  "Thaïlande": {
    fun_fact: "La Thaïlande est le seul pays d'Asie du Sud-Est à n'avoir jamais été colonisé par une puissance européenne. Son nom signifie « Pays des hommes libres ». Bangkok possède également le nom officiel le plus long d'une capitale au monde : 169 caractères en thaï.",
    places: [
      { name: "Chiang Mai (nord)", desc: "La « Rose du Nord » avec ses 300 temples, ses marchés nocturnes, sa cuisine du nord et des sanctuaires éthiques pour observer les éléphants. 🐘" },
      { name: "Les îles Phi Phi", desc: "Les falaises calcaires vertigineuses plongeant dans une mer émeraude, rendues célèbres par le film « La Plage » avec Leonardo DiCaprio. 🏝️" },
      { name: "Le Parc historique d'Ayutthaya", desc: "L'ancienne capitale du royaume siamois : ses bouddhas décapités enveloppés par les racines d'arbres et ses temples en ruines classés à l'UNESCO. 🏯" },
    ],
  },

  "Grèce": {
    fun_fact: "La Grèce possède le plus long littoral d'Europe avec 16 000 km de côtes. Elle compte plus de 6 000 îles, dont seulement 227 sont habitées. Le mot « philosophie » vient du grec et signifie littéralement « amour de la sagesse ».",
    places: [
      { name: "L'Acropole (Athènes)", desc: "Le Parthénon et ses temples du Ve siècle av. J.-C. dominant la capitale depuis leur rocher sacré — le symbole absolu de la civilisation occidentale. 🏛️" },
      { name: "Santorin (Cyclades)", desc: "Les maisons blanches aux dômes bleus de la ville d'Oia face au coucher de soleil sur la caldeira volcanique — l'image emblématique de la Méditerranée. 🌅" },
      { name: "Le site archéologique de Delphes", desc: "L'ancien « nombril du monde » selon les Grecs, avec l'oracle d'Apollon et son théâtre dominant les gorges du Parnasse dans une lumière dorée. ⛰️" },
    ],
  },

  "Maroc": {
    fun_fact: "Fès abrite la plus vieille université du monde encore en activité : l'Université al-Qarawiyyin, fondée en 859 après J.-C. par Fatima al-Fihri. Le Maroc est aussi le seul pays d'Afrique à avoir des côtes sur deux mers : l'Atlantique et la Méditerranée.",
    places: [
      { name: "La médina de Fès (Fès el-Bali)", desc: "9 000 ruelles piétonnes, les tanneries de cuir colorées Chouara et la plus grande médina médiévale au monde, classée patrimoine mondial de l'UNESCO. 🧶" },
      { name: "Le désert du Sahara (Merzouga)", desc: "Les dunes orangées de l'Erg Chebbi pouvant atteindre 150m, à vivre en bivouac sous un ciel étoilé exceptionnel avec les Berbères. 🌙" },
      { name: "La place Jemaa el-Fna (Marrakech)", desc: "Le carrefour des conteurs, acrobates, charmeurs de serpents et vendeurs d'épices, classé au patrimoine immatériel de l'UNESCO. 🎭" },
    ],
  },

  "Portugal": {
    fun_fact: "Le Portugal est la plus vieille nation d'Europe avec des frontières quasi identiques depuis 1139 — soit plus de 880 ans sans modification majeure. Lisbonne est aussi la capitale la plus à l'ouest de l'Europe continentale.",
    places: [
      { name: "L'Alfama (Lisbonne)", desc: "Le plus vieux quartier de Lisbonne, ses ruelles tortueuses, ses azulejos bleus et les meilleures maisons de fado du monde. 🎵" },
      { name: "La Vallée du Douro", desc: "Les vignobles en terrasses classés à l'UNESCO le long du fleuve, avec les quintas viticoles productrices du célèbre porto. 🍷" },
      { name: "Sintra et ses palais", desc: "La Serra de Sintra avec le Palácio da Pena rose et jaune, les jardins de la Quinta da Regaleira et ses puits initiatiques façon conte de fées. 🏰" },
    ],
  },

  "Mexique": {
    fun_fact: "Le Mexique est le pays avec le plus grand nombre de pyramides au monde — plus de 1 400 structures pyramidales recensées. Teotihuacán, à 50km de Mexico, fut l'une des plus grandes villes du monde au IVe siècle avec 200 000 habitants.",
    places: [
      { name: "Teotihuacán", desc: "La « Cité des dieux » pré-aztèque avec la Pyramide du Soleil (65m), la Pyramide de la Lune et l'Avenue des Morts — à une heure de Mexico. 🌞" },
      { name: "Les cenotes du Yucatán", desc: "Les puits naturels d'eau douce sacrés des Mayas, comme le Gran Cenote de Tulum, paradis de la plongée et de la baignade dans une eau cristalline. 💧" },
      { name: "Oaxaca et Monte Albán", desc: "La capitale culinaire du Mexique, ses marchés de mole et de chapulines, et les ruines zapotèques de Monte Albán dominant la vallée depuis 2 000 ans. 🌶️" },
    ],
  },

  "Brésil": {
    fun_fact: "L'Amazonie brésilienne représente environ 60% de la forêt amazonienne totale et abrite 10% de toutes les espèces connues sur Terre. Le Brésil est le seul pays d'Amérique du Sud à parler portugais, héritage du Traité de Tordesillas de 1494.",
    places: [
      { name: "Rio de Janeiro", desc: "Le Christ Rédempteur sur le Corcovado, la plage de Copacabana et la vue vertigineuse depuis le Pain de Sucre au coucher du soleil. 🌊" },
      { name: "Les chutes d'Iguaçu", desc: "Le plus grand système de cascades du monde : 275 chutes sur 2,7 km à la frontière argentine — trois fois plus large que les chutes du Niagara. 💦" },
      { name: "Lençóis Maranhenses", desc: "Un désert de dunes blanches rempli de lagunes d'eau douce turquoise accessibles uniquement entre janvier et juin — un paysage de science-fiction. 🏜️" },
    ],
  },

  "Australie": {
    fun_fact: "L'Australie est le seul pays au monde qui occupe un continent entier. Le Grand Récif de Corail, au large du Queensland, est la plus grande structure vivante du monde — et elle est visible depuis l'espace.",
    places: [
      { name: "Uluru (Territoire du Nord)", desc: "Le monolithe sacré des Anangu culminant à 348m au cœur du désert rouge, qui passe du pourpre à l'or au coucher du soleil. 🔴" },
      { name: "Le Grand Récif de Corail", desc: "2 300 km de récifs coralliens abritant 1 500 espèces de poissons et 4 000 espèces de mollusques — le plus grand écosystème marin du monde. 🐠" },
      { name: "La forêt de Daintree (Queensland)", desc: "La plus ancienne forêt tropicale du monde (180 millions d'années), avec des espèces endémiques que l'on ne trouve nulle part ailleurs sur Terre. 🌿" },
    ],
  },

  "Nouvelle-Zélande": {
    fun_fact: "La Nouvelle-Zélande est le premier pays au monde à avoir accordé le droit de vote aux femmes, en 1893. Avec 5 millions d'habitants pour 6 millions de brebis, les moutons y ont longtemps été plus nombreux que les humains.",
    places: [
      { name: "Milford Sound (Fiordland)", desc: "Le fjord aux falaises de 1 200m entourées de cascades, souvent noyé dans la brume — souvent cité comme « huitième merveille du monde ». 🌊" },
      { name: "Rotorua (Île du Nord)", desc: "Le cœur de la culture maorie avec ses geysers, ses sources de boue bouillonnante et ses cérémonies du haka dans les villages ancestraux. ♨️" },
      { name: "Le Parc national d'Abel Tasman", desc: "Des plages de sable doré, des eaux translucides et des forêts de fougères géantes — le paradis du kayak de mer et de la randonnée côtière. 🌿" },
    ],
  },

  "Inde": {
    fun_fact: "L'Inde produit environ 2 000 films par an, soit plus que n'importe quel autre pays au monde. Elle possède le plus grand réseau ferroviaire d'Asie, employant plus d'un million de personnes — l'une des plus grandes entreprises du monde par ses effectifs.",
    places: [
      { name: "Le Taj Mahal (Agra)", desc: "Le mausolée de marbre blanc érigé en 1653 par l'empereur Shah Jahan pour son épouse — chef-d'œuvre absolu de l'architecture moghole classé à l'UNESCO. 🕌" },
      { name: "Varanasi (Uttar Pradesh)", desc: "La ville sainte hindoue sur les rives du Gange, ses ghats où se déroulent les cérémonies d'Arati au crépuscule — l'une des plus vieilles cités habitées du monde. 🪔" },
      { name: "Les temples de Hampi (Karnataka)", desc: "Les ruines de l'empire Vijayanagara avec des rochers granitiques monumentaux et des temples du XIVe siècle dans un paysage lunaire époustouflant. 🗿" },
    ],
  },

  "Pérou": {
    fun_fact: "La pomme de terre est cultivée dans les Andes péruviennes depuis 8 000 ans. C'est le quatrième aliment le plus consommé dans le monde aujourd'hui. Le Pérou abrite également plus de 3 000 variétés de pommes de terre différentes.",
    places: [
      { name: "Machu Picchu (Cusco)", desc: "La citadelle inca perchée à 2 430m dans les Andes — redécouverte en 1911 par Hiram Bingham, c'est le site archéologique le plus visité d'Amérique du Sud. 🏔️" },
      { name: "Le Lac Titicaca (Puno)", desc: "À 3 812m d'altitude, le plus haut lac navigable du monde, avec les îles flottantes des Uros entièrement construites en roseaux totora. 🚣" },
      { name: "La Vallée Sacrée des Incas", desc: "Entre Cusco et Machu Picchu : les salines de Maras, les terrasses circulaires de Moray et les marchés traditionnels de Pisac aux couleurs chatoyantes. 🌽" },
    ],
  },

  "Argentine": {
    fun_fact: "Buenos Aires possède le plus grand nombre de psychanalystes par habitant au monde — environ un pour 70 habitants. La ville abrite également El Ateneo Grand Splendid, librairie installée dans un ancien théâtre, souvent citée comme la plus belle librairie du monde.",
    places: [
      { name: "Buenos Aires (San Telmo & La Boca)", desc: "Les milongas de tango du quartier San Telmo, la librairie El Ateneo Grand Splendid et les maisons colorées du quartier La Boca. 🎵" },
      { name: "Les chutes d'Iguazú (côté argentin)", desc: "La passerelle de la Garganta del Diablo, où 14 chutes fusionnent en un tonnerre de 80m de haut — à couper le souffle. 💦" },
      { name: "Le glacier Perito Moreno (Patagonie)", desc: "L'un des rares glaciers au monde en expansion, dont les blocs de glace bleu électrique s'effondrent dans le lac avec un fracas spectaculaire. 🧊" },
    ],
  },

  "Turquie": {
    fun_fact: "Istanbul est la seule ville au monde à cheval sur deux continents — l'Europe et l'Asie — séparés par le détroit du Bosphore. La Turquie est aussi le berceau de la première pièce de monnaie frappée au monde (en Lydie, VIIe siècle av. J.-C.).",
    places: [
      { name: "Istanbul", desc: "Sainte-Sophie, le Grand Bazar (4 000 boutiques), la Mosquée Bleue et le coucher de soleil sur le Bosphore depuis Üsküdar : l'Orient et l'Occident en une seule ville. 🕌" },
      { name: "La Cappadoce", desc: "Les cheminées de fées de Göreme, les villes souterraines de Derinkuyu et les vols en montgolfière au lever du soleil sur les roches volcaniques. 🎈" },
      { name: "Éphèse (Selçuk)", desc: "L'ancienne cité gréco-romaine avec la Bibliothèque de Celsus, vestige du temple d'Artémis (7e merveille du monde antique) et un théâtre de 25 000 places. 🏛️" },
    ],
  },

  "Égypte": {
    fun_fact: "La Grande Pyramide de Khéops, érigée vers 2560 av. J.-C., a été la plus haute structure jamais construite par l'homme pendant 3 800 ans — jusqu'à la cathédrale de Lincoln en Angleterre en 1311. Les pyramides de Gizeh sont les seules des 7 merveilles du monde antique encore debout.",
    places: [
      { name: "Les pyramides de Gizeh et le Sphinx", desc: "Les seules des sept merveilles du monde antique encore debout, à 15km du Caire — aussi mystérieuses après 4 500 ans qu'au premier regard. 🔺" },
      { name: "Louxor et la Vallée des Rois", desc: "La plus grande concentration de monuments pharaoniques au monde : les temples de Karnak, les colosses de Memnon et les tombeaux des pharaons dont Toutânkhamon. ⚱️" },
      { name: "Abu Simbel (Nubie)", desc: "Les deux temples taillés dans la roche par Ramsès II, déplacés de 200m dans les années 1960 pour les sauver des eaux du barrage d'Assouan — un exploit mondial. 🗿" },
    ],
  },

  "Islande": {
    fun_fact: "L'Islande est le pays le plus paisible du monde selon l'Indice mondial de la paix depuis de nombreuses années — elle n'a pas d'armée et ses policiers ne portent pas d'armes. La langue islandaise a si peu changé depuis le Moyen Âge que les Islandais peuvent encore lire les sagas vikings du XIIe siècle en version originale.",
    places: [
      { name: "Le Cercle d'Or (Golden Circle)", desc: "Le geyser Strokkur qui jaillit toutes les 5 minutes, le parc national de Þingvellir (faille entre deux plaques tectoniques) et les chutes de Gullfoss. 💦" },
      { name: "Les aurores boréales", desc: "Entre septembre et mars, le ciel islandais s'embrase de vert et de rose — la région de Snæfellsnes et les Westfjords sont parmi les meilleurs spots. 🌌" },
      { name: "Les Westfjords", desc: "La région la plus sauvage et isolée d'Islande, avec ses falaises habitées par des millions de macareux et ses fjords accessibles sur des pistes de gravier. 🐦" },
    ],
  },

  "Norvège": {
    fun_fact: "La Norvège possède le plus long tunnel routier du monde : le tunnel de Lærdal, long de 24,5 km. C'est aussi le pays avec le plus grand taux d'adoption de voitures électriques au monde — plus de 80% des nouvelles voitures vendues sont électriques.",
    places: [
      { name: "Geirangerfjord et Nærøyfjord", desc: "Classés à l'UNESCO, ces fjords encaissés entre des montagnes de 1 400m avec les cascades des « Seven Sisters » comptent parmi les plus beaux paysages d'Europe. 🏔️" },
      { name: "Les îles Lofoten", desc: "L'archipel arctique avec ses villages de pêcheurs aux maisons rouges, ses plages de sable blanc, ses pics déchiquetés et ses aurores boréales en hiver. 🎣" },
      { name: "Bergen et le chemin de fer de Flåm", desc: "La ville hanséatique colorée du Bryggen (classé à l'UNESCO) et la descente ferroviaire de Flåm, parmi les plus spectaculaires du monde. 🚂" },
    ],
  },

  "Viêt Nam": {
    fun_fact: "Le Viêt Nam est l'un des rares pays à avoir résisté militairement à trois superpuissances : la France (1954), les États-Unis (1975) et la Chine (1979). C'est aussi le deuxième plus grand producteur de café robusta au monde, juste derrière le Brésil.",
    places: [
      { name: "La Baie d'Ha Long (Quảng Ninh)", desc: "1 969 îles et îlots calcaires émergeant d'une mer émeraude, à explorer en jonque traditionnelle — classée deux fois au patrimoine mondial de l'UNESCO. 🚢" },
      { name: "Hội An (Quảng Nam)", desc: "La vieille ville marchande du XVe siècle avec ses maisons-temples, ses lanternes multicolores et ses tailleurs qui confectionnent un costume sur mesure en 24h. 🏮" },
      { name: "Sapa et ses rizières en terrasses", desc: "Les spectaculaires terrasses de riz sculptées dans les flancs du mont Fansipan (3 143m, le toit de l'Indochine) par les minorités Hmong et Dao. 🌾" },
    ],
  },

  "Indonésie": {
    fun_fact: "L'Indonésie est l'archipel le plus grand du monde avec 17 508 îles, dont environ 6 000 sont habitées. C'est aussi le pays avec le plus de volcans actifs au monde — 127 volcans actifs, soit environ 13% du total mondial.",
    places: [
      { name: "Ubud (Bali)", desc: "Le centre culturel et spirituel de Bali : rizières en terrasses, danses kecak au coucher du soleil, ateliers d'artisans et cuisine balinaise aux épices subtiles. 🌺" },
      { name: "Borobudur (Java)", desc: "Le plus grand temple bouddhiste du monde (IXe siècle), avec 504 statues de Bouddha et une vue imprenable sur les volcans environnants au lever du soleil. 🛕" },
      { name: "L'île de Komodo", desc: "Les dragons de Komodo (le plus grand lézard au monde, jusqu'à 3m de long) et les plages roses uniques dues au corail rouge pilé mélangé au sable blanc. 🦎" },
    ],
  },

  "Singapour": {
    fun_fact: "Singapour est l'un des seuls pays au monde sans ressources naturelles et presque sans agriculture, et pourtant son PIB par habitant est l'un des 5 premiers au monde. Elle recycle ses eaux usées en eau potable — officiellement appelée « NEWater ».",
    places: [
      { name: "Gardens by the Bay", desc: "Les Supertrees de 50m couverts de fougères et d'orchidées, les serres géantes Cloud Forest et Flower Dome au cœur de la marina — une autre planète. 🌿" },
      { name: "Les hawker centres (Newton, Lau Pa Sat)", desc: "Les marchés couverts aux centaines de cantines où se mangent les meilleurs plats de rue d'Asie : laksa, char kway teow, chili crab. 🦀" },
      { name: "Chinatown et Little India", desc: "Deux quartiers aux antipodes à 10 minutes à pied l'un de l'autre, chacun avec ses temples, ses saveurs et ses bazars dans une ambiance de bout du monde. 🏮" },
    ],
  },

  "Émirats arabes unis": {
    fun_fact: "Le Burj Khalifa de Dubaï (828m), la plus haute structure jamais construite, a été érigée en moins de 6 ans (2004-2010). Dans les étages supérieurs, le soleil se couche 2 minutes plus tard qu'au sol, ce qui crée un lever de soleil bis pour les résidents.",
    places: [
      { name: "Le Burj Khalifa et Downtown Dubai", desc: "La tour la plus haute du monde (828m), les fontaines dansantes du Dubai Fountain et le Dubai Mall (le plus grand centre commercial du monde). 🏙️" },
      { name: "Le Vieux Dubaï (Deira et Al Fahidi)", desc: "Le souk de l'or avec ses 300 bijouteries, le souk des épices et le quartier historique d'Al Fahidi avec ses tours à vent en corail du XVIIIe siècle. 🥇" },
      { name: "Le désert de Liwa (Abu Dhabi)", desc: "Les plus grandes dunes des Émirats pouvant atteindre 300m, au cœur du Rub al-Khali (le Quart Vide) — pour un safari en 4x4 sous un ciel étoilé absolu. 🌅" },
    ],
  },

  "Jordanie": {
    fun_fact: "La Mer Morte, à la frontière jordano-israélienne, est l'endroit le plus bas de la surface terrestre à 430m sous le niveau de la mer. Elle rétrécit d'environ 1m par an en raison du détournement des eaux du Jourdain pour l'irrigation.",
    places: [
      { name: "Pétra (Ma'an)", desc: "La « Cité Rose » des Nabatéens, taillée dans le grès rose il y a 2 000 ans, avec le Trésor (Al-Khazneh) révélé au bout du Siq — parmi les 7 nouvelles merveilles du monde. 🌹" },
      { name: "Wadi Rum", desc: "Le « Désert de Mars » avec ses formations rocheuses de grès rouge de 600m, décor des films « Lawrence d'Arabie » et « The Martian ». 🔴" },
      { name: "La Mer Morte (côté jordanien)", desc: "Flotter sans effort dans l'eau la plus salée du monde (34% de sel) et s'enduire de la boue noire minérale réputée pour ses propriétés thérapeutiques. 🧴" },
    ],
  },

  "Cambodge": {
    fun_fact: "Angkor Wat est le plus grand monument religieux du monde, couvrant 162 hectares — soit bien plus que le Vatican. Construit au XIIe siècle par le roi Suryavarman II, ses bas-reliefs forment la plus longue galerie sculptée continue du monde avec 800m de longueur.",
    places: [
      { name: "Angkor Wat (Siem Reap)", desc: "Le plus grand temple du monde, chef-d'œuvre de l'architecture khmère avec ses cinq tours en lotus et ses kilomètres de bas-reliefs sculptés. 🛕" },
      { name: "Angkor Thom et le Bayon", desc: "La citadelle royale avec les 216 visages de pierre souriant du temple Bayon — une des images les plus mystérieuses et contemplatives de l'humanité. 😌" },
      { name: "Le lac Tonlé Sap", desc: "Le plus grand lac d'Asie du Sud-Est (varie de 2 500 à 16 000 km² selon la saison) et ses villages flottants où toute la vie se déroule sur l'eau. 🚣" },
    ],
  },

  "Colombie": {
    fun_fact: "La Colombie est le pays le plus riche au monde en espèces d'oiseaux avec plus de 1 900 espèces recensées — soit 20% de toutes les espèces d'oiseaux du globe. C'est aussi le seul pays d'Amérique du Sud à avoir deux façades maritimes : Caraïbes et Pacifique.",
    places: [
      { name: "Carthagène des Indes", desc: "La vieille ville coloniale entourée de remparts, ses maisons colorées couvertes de bougainvillées et ses soirées de cumbia dans le quartier animé de Getsemaní. 🌺" },
      { name: "La Cocora Valley (Salento)", desc: "Les palmiers de cire (jusqu'à 60m, les plus grands palmiers du monde) dans les nuages de la cordillère des Andes, cœur de la région caféière. ☁️" },
      { name: "Medellin et Guatapé", desc: "La ville de l'éternel printemps transformée en modèle urbain mondial, avec la spectaculaire Piedra del Peñol, un monolithe de 200m à escalader à pied. 🧗" },
    ],
  },

  "Cuba": {
    fun_fact: "Cuba possède le ratio médecins/habitants le plus élevé au monde avec un médecin pour 150 habitants. C'est aussi le seul pays où des voitures américaines des années 1950 — les « Yank Tanks » — servent encore quotidiennement de taxis faute d'importations autorisées pendant 60 ans.",
    places: [
      { name: "La Havane (Habana Vieja)", desc: "La vieille ville classée à l'UNESCO : le Capitolio, les palais coloniaux et les ruelles où résonnent la salsa et le son cubain depuis les bars. 💃" },
      { name: "Trinidad", desc: "Le village colonial espagnol le mieux préservé des Caraïbes, avec ses maisons pastels, ses pavés et ses soirées de son dans la Casa de la Música. 🎶" },
      { name: "La Valle de Viñales (Pinar del Río)", desc: "Les mogotes (collines calcaires) verdoyantes, les plantations de tabac des meilleurs cigares du monde et les peintures rupestres dans les grottes. 🌿" },
    ],
  },

  "Chili": {
    fun_fact: "Le Chili est le pays le plus long du monde : 4 300 km du nord au sud, mais seulement 177 km en moyenne d'est en ouest. Le désert d'Atacama est le plus aride du monde — certaines zones n'ont pas reçu de pluie significative depuis des siècles.",
    places: [
      { name: "Le désert d'Atacama (San Pedro)", desc: "Les geysers del Tatio, la Vallée de la Lune, le salar d'Atacama rose et les flamants roses : le plus beau désert du monde sous un ciel d'astronomie parfait. 🌋" },
      { name: "Torres del Paine (Patagonie)", desc: "Les trois tours de granit rose, les glaciers bleus et les pumas de Patagonie — la randonnée du « W » est parmi les plus spectaculaires au monde. 🏔️" },
      { name: "L'île de Pâques (Rapa Nui)", desc: "Les 900 statues moaï mystérieuses au milieu du Pacifique, à 3 700km du continent — le bout du monde habité le plus isolé de la planète. 🗿" },
    ],
  },

  "Malaisie": {
    fun_fact: "La Malaisie est l'un des 17 pays « mégadivers » du monde, abritant 10% des espèces végétales et 20% des espèces animales de la planète. Les Tours Petronas de Kuala Lumpur ont été les plus hauts bâtiments du monde de 1998 à 2004.",
    places: [
      { name: "Les grottes de Batu (Selangor)", desc: "Un temple hindou taillé dans un massif calcaire de 400 millions d'années, accessible par 272 marches colorées et habité par des centaines de macaques. 🐒" },
      { name: "George Town (Penang)", desc: "La ville coloniale avec son street art mural célèbre, ses coffee shops centenaires et la gastronomie street food la plus diverse et savoureuse d'Asie. 🎨" },
      { name: "Les îles Perhentian (Terengganu)", desc: "Deux îles sauvages avec des plages de sable blanc et une eau cristalline peuplée de tortues marines et de requins léopards, loin du tourisme de masse. 🐢" },
    ],
  },

  "Kenya": {
    fun_fact: "Le mot « safari » vient du swahili et signifie simplement « voyage ». Le Kenya abrite également certains des plus anciens fossiles d'Homo sapiens au monde — des crânes vieux de 300 000 ans découverts dans la vallée du Rift, au cœur du berceau de l'humanité.",
    places: [
      { name: "Le Masai Mara (Rift Valley)", desc: "La Grande Migration : de juillet à octobre, 1,5 million de gnous et 250 000 zèbres traversent la rivière Mara sous les yeux des crocodiles et des lions. 🦁" },
      { name: "Amboseli (au pied du Kilimandjaro)", desc: "Les grands troupeaux d'éléphants d'Amboseli avec le Kilimandjaro enneigé (5 895m) en toile de fond — la photographie africaine par excellence. 🐘" },
      { name: "Lamu (archipel côtier)", desc: "La vieille ville swahilie la mieux préservée d'Afrique de l'Est, où les voitures sont interdites et les ânes restent le seul moyen de transport depuis des siècles. 🏘️" },
    ],
  },
};

export default countryContent;
