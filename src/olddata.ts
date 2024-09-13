export const cityCards = {  
    // Citizens
    athensCitizen : {img : "AthenianCitizen", name : "Athenian Citizen", atk : 0, hp : 1, type :  "athens", text : "Citizen", food : 1, money : 0, desc : "A worker for your city mine and farm", id: "Citizen",},
    thebesCitizen : {img : "ThebanCitizen", name : "Theban Citizen", atk : 0, hp : 1, type :  "thebes", text : "Citizen", food : 1, money : 0, desc : "A worker for your city mine and farm", id: "Citizen",},
    spartaCitizen : {img : "SpartanCitizen", name : "Spartan Citizen", atk : 1, hp : 1, baseAtk : 1, baseHp : 1, type :  "sparta", text : "Citizen", food : 1, money : 0, desc : "A worker for your city mine and farm, can join the battle and fight (can't deal damage to cities)", id: "Citizen",},
    troyCitizen : {img : "TrojanCitizen", name : "Trojan Citizen", atk : 0, hp : 1, type :  "troy", text : "Citizen", food : 1, money : 0, desc : "A worker for your city mine and farm", id: "Citizen",},
    // City
    athensCity : {img : "Athens", name : "Athens", atk : "", hp : 10, type : "athens", text : "City", desc: "Athens starts at city level 2 and walls are 5 money cheaper"},
    thebesCity : {img : "Thebes", name : "Thebes", atk : "", hp : 10, type : "thebes", text : "City", desc: "Thebes can hire heroes for 3 money less"},
    spartaCity : {img : "Sparta", name : "Sparta", atk : "", hp : 10, type : "sparta", text : "City", desc: "Sparta starts with a barracks and their citizens can fight in battle"},
    troyCity : {img : "Troy", name : "Troy", atk : "", hp : 10, type : "troy", text : "City", desc: "Troy starts with 10 money"},
    // Equipment
    swordEquip :{img : "Sword", name : "Sword", atk : "+1", hp :"0", type : "equipment", text : "Equipment", food : 0, money : 3, desc : "A sharp sword to strenghthen your units", id: "Equip", canTarget : "sword",},
    helmetEquip :{img : "Helmet", name : "Helmet", atk : "+1", hp :"+1", type : "equipment", text : "Equipment", food : 0, money : 5, desc : "A tough helmet to strenghthen your units", id: "Equip", canTarget : "helmet",},
    shieldEquip :{img : "Shield", name : "Shield", atk : "0", hp :"+1",  type : "equipment", text : "Equipment", food : 0, money : 3, desc : "A large shield to protect your units", id: "Equip", canTarget : "shield",},
    cuirassEquip :{img : "Cuirass", name : "Cuirass", atk : "", hp : "", type : "equipment", text : "+1 Plating", food : 0, money : 5, desc : "A resiliant cuirass to protect your units, blocks all damage from the next attack against a unit", id: "Equip", canTarget : "cuirass",},
    // Extra
    wallsBuilding : {img : "Walls", name : "Walls", atk : 0, hp : 20, type : "building", text : "Structure", food : 0, money : 15, desc : "Sturdy walls that protect your city from invaders", id: "Building",},
    wildBoarBeast : {img : "WildBoar", name : "Wild Boar", atk : 1, hp : 1, baseAtk : 1, baseHp : 1, type : "beast", text : "Beast", desc : "Scary beast roarrr",},
    // Soldiers
    athensSoldier : {img : "AthenianHoplite", name : "Athenian Hoplite", atk : 1, hp : 2, baseAtk : 1, baseHp : 2, modAtk : 1, modHp : 2, type : "athens", text : "Soldier", food : 2, money : 1, desc : "A brave soldier for your army", id: "Soldier",},
    thebesSoldier : {img : "ThebanHoplite", name : "Theban Hoplite", atk : 1, hp : 2, baseAtk : 1, baseHp : 2, modAtk : 1, modHp : 2, type : "thebes", text : "Soldier", food : 2, money : 1, desc : "A brave soldier for your army", id: "Soldier",},
    spartaSoldier : {img : "SpartanHoplite", name : "Spartan Hoplite", atk : 1, hp : 2, baseAtk : 1, baseHp : 2, modAtk : 1, modHp : 2, type : "sparta", text : "Soldier", food : 2, money : 1, desc : "A brave soldier for your army", id: "Soldier",},
    troySoldier : {img : "TrojanWarrior", name : "Trojan Warrior", atk : 1, hp : 2, baseAtk : 1, baseHp : 2, modAtk : 1, modHp : 2, type : "troy", text : "Soldier", food : 2, money : 1, desc : "A brave soldier for your army", id: "Soldier",},
    // Archers
    athensArcher : {img : "AthenianArcher", name : "Athenian Archer", atk : 1, hp : 1, baseAtk : 1, baseHp : 1, modAtk : 1, modHp : 1, type : "athens", text : "Archer", food : 2, money : 2, desc : "A nimble archer for your army", id: "Archer", archer: true,},
    thebesArcher : {img : "ThebanArcher", name : "Theban Archer", atk : 1, hp : 1, baseAtk : 1, baseHp : 1, modAtk : 1, modHp : 1, type : "thebes", text : "Archer", food : 2, money : 2, desc : "A nimble archer for your army", id: "Archer", archer: true,},
    spartaArcher : {img : "SpartanArcher", name : "Spartan Archer", atk : 1, hp : 1, baseAtk : 1, baseHp : 1, modAtk : 1, modHp : 1, type : "sparta", text : "Archer", food : 2, money : 2, desc : "A nimble archer for your army", id: "Archer", archer: true,},
    troyArcher : {img : "TrojanArcher", name : "Trojan Archer", atk : 1, hp : 1, baseAtk : 1, baseHp : 1, modAtk : 1, modHp : 1, type : "troy", text : "Archer", food : 2, money : 2, desc : "A nimble archer for your army", id: "Archer", archer: true,},
    // Horsemen
    athensHorseman : {img : "AthenianHorseman", name : "Athenian Horseman", atk : 2, hp : 3, baseAtk : 2, baseHp : 3, modAtk : 2, modHp : 3, type : "athens", text : "Charge", fontsize : "15px", food : 3, money : 2, desc : "Can move freely across the board and can attack straight away when entering a battlefield", id: "Horseman", charge: true,},
    thebesHorseman : {img : "ThebanHorseman", name : "Theban Horseman", atk : 2, hp : 3, baseAtk : 2, baseHp : 3, modAtk : 2, modHp : 3, type : "thebes", text : "Charge", food : 3, money : 2, desc : "Can move freely across the board and can attack straight away when entering a battlefield", id: "Horseman", charge: true,},
    spartaHorseman : {img : "SpartanHorseman", name : "Spartan Horseman", atk : 2, hp : 3, baseAtk : 2, baseHp : 3, modAtk : 2, modHp : 3, type : "sparta", text : "Charge", food : 3, money : 2, desc : "Can move freely across the board and can attack straight away when entering a battlefield", id: "Horseman", charge: true,},
    troyHorseman : {img : "TrojanHorseman", name : "Trojan Horseman", atk : 2, hp : 3, baseAtk : 2, baseHp : 3, modAtk : 2, modHp : 3, type : "troy", text : "Charge", food : 3, money : 2, desc : "Can move freely across the board and can attack straight away when entering a battlefield", id: "Horseman", charge: true,},
    // Siege Engines
    ramSiege : {img : "Ram", name : "Battering Ram", atk : 1, hp : 10, baseAtk : 1, baseHp : 10, modAtk : 1, modHp : 10, type : "universal", text : "Siege Engine", food : 1, money : 5, desc : "Deals 3 damage to city walls, a valuable asset for city raids", id: "Siege",},       
    trojanHorseSiege : {img : "TrojanHorse", name : "Trojan Horse", atk : 0, hp : 10, baseAtk : 0, baseHp : 10, modAtk : 0, modHp : 10, type : "universal", text : "Siege Engine", desc : "A unique seige engine that allows your units to deal full damage to walls", id: "HorseSiege",},
    // Heroes
    athensHero1 : {img : "Theseus", name : "Theseus", atk : 5, hp : 7, baseAtk : 5, baseHp : 7, modAtk : 5, modHp : 7, type : "athens", text : "Liberator of Athens", food : 15, money : 5, desc : "Reduces damage from incoming attacks by 1", id: "Hero", dmgRed: 1},
    athensHero2 : {img : "Pericles", name : "Pericles", atk : 1, hp : 4, baseAtk : 1, baseHp : 4, modAtk : 1, modHp : 4, type : "athens", text : "Voice of Democracy", food : 10, money : 5, desc : "Increases your city level by 1 (whilst he lives), reduces cost of city buildings by 2$", id: "Hero", onPlace: "pericles",},
    athensHero3 : {img : "Alcibiades", name : "Alcibiades", atk : 3, hp : 2, baseAtk : 3, baseHp : 2, modAtk : 3, modHp : 2, type : "athens", text : "Disloyal", food : 3, money : 1, desc : "Every time Alcibiades dies, he is transferred to the team who killed him (10 turn cooldown)", id: "Hero",},
    athensHero4 : {img : "Hippolytus", name : "Hippolytus", atk : 2, hp : 3, baseAtk : 2, baseHp : 3, modAtk : 2, modHp : 3, type : "athens", text : "Call of the Wild", food : 6, money : 2, desc : "Each turn Hippolytus can spawn a 1/1 wild boar (2 turn cooldown)", id: "Hero", ability: "hippolytus",},
    athensHero5 : {img : "Cecrops", name : "Cecrops", atk : 2, hp : 4, baseAtk : 2, baseHp : 4, modAtk : 2, modHp : 4, type : "athens", text : "Experienced Ruler", food : 7, money : 3, desc : "Increases gold Production and food Production by 1", id: "Hero", onPlace: "cecrops",},
    spartaHero1 : {img : "Leonidas", name : "Leonidas", atk : 4, hp : 7, baseAtk : 4, baseHp : 7, modAtk : 4, modHp : 7, type : "sparta", text : "Spartan Rally", food : 12, money : 3, desc : "All units in the army have +1+1", id: "Hero", slotModifier: "leonidas",},
    spartaHero2 : {img : "Menelaus", name : "Menelaus", atk : 4, hp : 6, baseAtk : 4, baseHp : 6, modAtk : 4, modHp : 6, type : "sparta", text : "Duelist", food : 10, money : 2, desc : "Prevents his opposite from leaving the battlefield, his opposite has two less attack (doesn't apply in cities or delphi)", id: "Hero", slotModifier: "menelaus",},
    spartaHero3 : {img : "Helen", name : "Helen", atk : 1, hp : 5, baseAtk : 1, baseHp : 5, modAtk : 1, modHp : 5, type : "sparta", text : "Casus Belli", food : 5, money : 1, desc : "You can give Helen to any civilisation; whilst she lives, that civilisation has to fight a civilisation of your choice", id: "Hero", canTarget: "helen", },
    spartaHero4 : {img : "Brasidas", name : "Brasidas", atk : 3, hp : 4, baseAtk : 3, baseHp : 4, modAtk : 3, modHp : 4, type : "sparta", text : "Product of the Agoge", food : 8, money : 2, desc : "Producing Soldiers costs 1 less food", id: "Hero", onPlace: "brasidas",},
    spartaHero5 : {img : "Orestes", name : "Orestes", atk : 2, hp : 5, baseAtk : 2, baseHp : 5, modAtk : 2, modHp : 5, type : "sparta", text : "Vengeful", food : 5, money : 3, desc : "Everytime Orestes is attacked, he deals double his attack back", id: "Hero", returnDmgMp: 2},
    thebesHero1 : {img : "Cadmus", name : "Cadmus", atk : 4, hp : 7, baseAtk : 4, baseHp : 7, modAtk : 4, modHp : 7, type : "thebes", text : "Founder's Spirit", food : 25, money : 8, desc : "When you buy Cadmus, choose a building of your choice and add it to your city", id: "Hero", onPlace: "cadmus",},
    thebesHero2 : {img : "Oedipus", name : "Oedipus", atk : 3, hp : 5, baseAtk : 3, baseHp : 5, modAtk : 3, modHp : 5, type : "thebes", text : "Ill-Fated", food : 7, money : 6, desc : "Can exchange 2 health to block an event", id: "Hero", canTarget: "oedipus",},
    thebesHero3 : {img : "Dionysus", name : "Dionysus", atk : 1, hp : 6, baseAtk : 1, baseHp : 6, modAtk : 1, modHp : 6, type : "thebes", text : "Festival Rites", food : 17, money : 6, desc : "All citizens work twice as hard (double yields)", id: "Hero", onPlace: "dionysus",},
    thebesHero4 : {img : "Tiresias", name : "Tiresias", atk : 0, hp : 3, baseAtk : 0, baseHp : 3, modAtk : 0, modHp : 3, type : "thebes", text : "Foresight", food : 3, money : 5, desc : "Tiresias can block an event of your choice (he goes to the Underworld)", id: "Hero", canTarget: "tiresias",},
    thebesHero5 : {img : "Semele", name : "Semele", atk : 1, hp : 3, baseAtk : 1, baseHp : 3, modAtk : 1, modHp : 3, type : "thebes", text : "Divine Favour", food : 5, money : 5, desc : "Can use 1 food to heal a target in your city by 1 (once a turn)", id: "Hero", canTarget: "semele",},
    troyHero1 : {img : "Hector", name : "Hector", atk : 4, hp : 7, baseAtk : 4, baseHp : 7, modAtk : 4, modHp : 7, type : "troy", text : "Sweeping Attack", food : 5, money : 15, desc : "Hector deals half damage to the two neighbouring cards to the target", id: "Hero",},
    troyHero2 : {img : "Priam", name : "Priam", atk : 2, hp : 5, baseAtk : 2, baseHp : 5, modAtk : 2, modHp : 5, type : "troy", text : "Royal Wealth", food : 3, money : 5, desc : "All money Yields +1", id: "Hero", onPlace: "priam",},
    troyHero3 : {img : "Aeneas", name : "Aeneas", atk : 3, hp : 6, baseAtk : 3, baseHp : 6, modAtk : 3, modHp : 6, type : "troy", text : "Divine Protection", food : 2, money : 10, desc : "When Aeneas is about to die, he is removed from the battle and returned to his city (1 use)", id: "Hero", divineFavour: true,},
    troyHero4 : {img : "Paris", name : "Paris", atk : 3, hp : 4, baseAtk : 3, baseHp : 4, modAtk : 3, modHp : 4, type : "troy", text : "Master Archer", food : 2, money : 7, desc : "Attacks as an archer", id: "Hero", archer: true,},
    troyHero5 : {img : "Hecuba", name : "Hecuba", atk : 1, hp : 3, baseAtk : 1, baseHp : 3, modAtk : 1, modHp : 3, type : "troy", text : "Royal Influence", food : 1, money : 5, desc : "Can spend 1$ to heal a unit by 1 (once per turn)", id: "Hero", canTarget: "hecuba",},
};

export const delphiCards = {
    // Disasters
    droughtEvent : {img : "Drought", name : "Drought", atk : "", hp : "", type : "event", text : "Disaster"},
    earthquakeEvent : {img : "Earthquake", name : "Earthquake", atk : "", hp : "", type : "event", text : "Disaster"},
    volcanoEvent : {img : "Volcano", name : "Volcano", atk : "", hp : "", type : "event", text : "Disaster"},
    stormEvent : {img : "Storm", name : "Storm", atk : "", hp : "", type : "event", text : "Disaster"},
    plagueEvent : {img : "Plague", name : "Plague", atk : "", hp : "", type : "event", text : "Disaster"},
    raidersEvent : {img : "Raiders", name : "Raiders", atk : "", hp : "", type : "event", text : "Disaster"},
    raidersSoldier : {img : "Raiders", name : "Raider", atk : 2, hp : 2, type : "event", text : "Warrior"},
    // Events
    bountifulHarvestEvent : {img : "BountifulHarvest", name : "Bountiful Harvest", atk : "", hp : "", type : "event", text : "Event"},
    festivalEvent : {img : "Festival", name : "Festival", atk : "", hp : "", type : "event", text : "Event"},
    goldenAgeEvent : {img : "GoldenAge", name : "Golden Age", atk : "", hp : "", type : "event", text : "Event"},
    goldrushEvent : {img : "GoldRush", name : "Gold Rush", atk : "", hp : "", type : "event", text : "Event"},
    underworldEvent : {img : "Underworld", name : "Open the Underworld", atk : "", hp : "", type : "event", text : "Event", fontsize : "14px"},
    // Wars
    peloponnesianWar : {img : "PeloponnesianWar", name : "Peloponnesian War", atk : "", hp : "", type : "war", text : "War", desc: "A war between Athens and Sparta has broken out",},
    sicilWar : {img : "SicilianExpedition", name : "Sicilian Expedition", atk : "", hp : "", type : "war", text : "War"},
    trojanWar : {img : "TrojanWar", name : "Trojan War", atk : "", hp : "", type : "war", text : "War", desc: "A war between Troy and another player has broken out",},
    leuctraWar : {img : "Leuctra", name : "Battle of Leuctra", atk : "", hp : "", type : "war", text : "War", desc: "A war between Thebes and Sparta has broken out",},
    // Monsters
    cyclopsMonster : {img : "Cyclops", name : "Cyclops", atk : 4, hp : 8, type : "monster", text : "Monster"},
    minotaurMonster : {img : "Minotaur", name : "Minotaur", atk : 5, hp : 5, type : "monster", text : "Monster"},
    hydraMonster : {img : "Hydra", name : "Hydra", atk : 3, hp : 7, type : "monster", text : "Monster"},
    medusaMonster : {img : "Medusa", name : "Medusa", atk : 3, hp : 6, type : "monster", text : "Monster"},
    cretanBullMonster : {img : "CretanBull", name : "Cretan Bull", atk : 2, hp : 6, type : "monster", text : "Monster"},
    cerberusMonster : {img : "Cerberus", name : "Cerberus", atk : 4, hp : 7, type : "monster", text : "Monster"},
    chimeraMonster : {img : "Chimera", name : "Chimera", atk : 4, hp : 5, type : "monster", text : "Monster"},
    nemeanLionMonster : {img : "NemeanLion", name : "Nemean Lion", atk : 4, hp : 3, type : "monster", text : "Thick-Skinned"},
    fleeceGuardianMonster : {img : "GoldenFleece", name : "Guardian of the Fleece", atk : 3, hp : 7, type : "monster", text : "A Fleecy Prize", fontsize : "14px"},
};

export const delphiEvents = {
    // Positive //
    bharvest : {img : "BountifulHarvest", name : "Bountiful Harvest", atk : "", hp : "", type : "event", text : "Event", modifier: "bountifulHarvest", desc: "a good harvest doubles your food production for 3 turns"},
    festival : {img : "Festival", name : "Festival", atk : "", hp : "", type : "event", text : "Event", modifier: "festival", desc: "a festival raises morale and your resource yields are doubled for 3 turns"},
    grush : {img : "GoldRush", name : "Gold Rush", atk : "", hp : "", type : "event", text : "Event", modifier: "goldRush", desc: "a fresh gold vein doubles your money production for 3 turns"},
    gtrades : {img : "GoodTrades", name : "Good Trades", atk : "", hp : "", type : "event", text : "Event", modifier: "goodTrades", desc: "a sudden flurry of successful trade deals yields 3 money"},
    fforaging : {img : "FruitfulForaging", name : "Fruitful Foraging", atk : "", hp : "", type : "event", text : "Event", modifier: "fruitfulForaging", desc: "a successful foraging trip yields 3 food"},
    // Negative //
    drought : {img : "Drought", name : "Drought", atk : "", hp : "", type : "event", text : "Disaster", modifier: "drought", desc: "a drought halves your money production for 3 turns"},
    volcano : {img : "Volcano", name : "Volcano", atk : "", hp : "", type : "event", text : "Disaster", modifier: "volcano", desc: "a volcanic eruption nearby halves your resource yields for 3 turns"},
    storm : {img : "Storm", name : "Storm", atk : "", hp : "", type : "event", text : "Disaster", modifier: "storm", desc: "a storm damages your city, costing 3 money in repairs"},
    famine : {img : "Famine", name : "Famine", atk : "", hp : "", type : "event", text : "Disaster", modifier: "famine", desc: "a famine causes a shortage of food in your city, halving food production for 3 turns"},
    fire : {img : "Fire", name : "Fire", atk : "", hp : "", type : "event", text : "Disaster", modifier: "fire", desc: "a fire ravages your grain supply and costs 3 food to replenish"},
};

export const delphiHeroes = {
    // Heroes
    delphiHero1 : {img : "Heracles", name : "Heracles", atk : 6, hp : 9, baseAtk : 6, baseHp : 9, modAtk : 6, modHp : 9, type : "universal", text : "Destroyer of Cities", money : 20, food : 0, desc : "Deals full damage to walls", id: "Hero",},
    delphiHero2 : {img : "Perseus", name : "Perseus", atk : 4, hp : 8, baseAtk : 4, baseHp : 8, modAtk : 4, modHp : 8, type : "universal", text : "Medusa's Gaze", money : 18, food : 0, desc : "Perseus reveals Medusa's head, reducing all enemies' health by 1 (5 turn cooldown)", id: "Hero", ability: "perseus",},
    delphiHero3 : {img : "Achilles", name : "Achilles", atk : 3, hp : 9, baseAtk : 3, baseHp : 9, modAtk : 3, modHp : 9, type : "universal", text : "Unrelenting Rage", money : 20, food : 0, desc : "Every time Achilles loses HP, his attack increases by that much, healing reverses this", id: "Hero",},
    delphiHero4 : {img : "Jason", name : "Jason", atk : 3, hp : 5, baseAtk : 3, baseHp : 5, modAtk : 3, modHp : 5, type : "universal", text : "Heroic Connections", money : 12, food : 0, desc : "Recruiting heroes is 2$ cheaper", onPlace: "jason", id: "Hero",},
    delphiHero5 : {img : "Odysseus", name : "Odysseus", atk : 3, hp : 6, baseAtk : 3, baseHp : 6, modAtk : 3, modHp : 6, type : "universal", text : "Quick Witted", money : 12, food : 0, desc : "Can create a Trojan Horse Seige Engine for 2$ that allows units to bypass walls and attack the city itself", id: "Hero", ability: "odysseus"},
    delphiHero6 : {img : "Diomedes", name : "Diomedes", atk : 4, hp : 6, baseAtk : 4, baseHp : 6, modAtk : 4, modHp : 6, type : "universal", text : "Battle Hunger", money : 15, food : 0, desc : "Diomedes takes 1 less damage from non heroes", id: "Hero",},
    delphiHero7 : {img : "Ajax", name : "Ajax", atk : 5, hp : 8, baseAtk : 5, baseHp : 8, modAtk : 5, modHp : 8, type : "universal", text : "Bulwark", money : 18, food : 0, desc : "Ajax's neighboring cards have +0+3", id: "Hero", slotModifier: "ajax",},
    delphiHero8 : {img : "Minos", name : "Minos", atk : 3, hp : 5, baseAtk : 3, baseHp : 5, modAtk : 3, modHp : 5, type : "universal", text : "Royal Guard", money : 14, food : 0, desc : "Minos brings his guard with him, activate his ability to spawn them in your city", id: "Hero", ability: "minos", guards: {soldier: 2, archer: 2, horseman: 1},},
    delphiHero9 : {img : "Nestor", name : "Nestor", atk : 2, hp : 5, baseAtk : 2, baseHp : 5, modAtk : 2, modHp : 5, type : "universal", text : "Age-old Wisdom", money : 10, food : 0, desc : "Can block an event (5 turn cooldown) and gives a 2 money discount for city buildings", id: "Hero", onPlace: "nestor", canTarget: "nestor",},
    delphiHero10 : {img : "Atalanta", name : "Atalanta", atk : 3, hp : 3, baseAtk : 3, baseHp : 3, modAtk : 3, modHp : 3, type : "universal", text : "Swift-footed", money : 8, food : 0, desc : "Atalanta attacks like an archer and has Charge (see horseman)", id: "Hero", archer: true, charge: true,},
    delphiHero11 : {img : "Medea", name : "Medea", atk : 1, hp : 5, baseAtk : 1, baseHp : 5, modAtk : 1, modHp : 5, type : "universal", text : "Nullify", money : 12, food : 0, desc : "Causes a target to lose 2-2 (can be used once a battle)", id: "Hero",  canTarget: "medea",},
    delphiHero12 : {img : "Ariadne", name : "Ariadne", atk : 1, hp : 3, baseAtk : 1, baseHp : 3, modAtk : 1, modHp : 3, type : "universal", text : "Loyal Companion", money : 8, food : 0, desc : "Can use one food to heal a unit by one (once a turn)", id: "Hero", canTarget: "ariadne",},
    delphiHero13 : {img : "Hippolyta", name : "Hippolyta", atk : 4, hp : 3, baseAtk : 4, baseHp : 3, modAtk : 4, modHp : 3, type : "universal", text : "Master Huntress", money : 12, food : 0, desc : "Attacks as an archer, can spawn a wild boar companion every battle", id: "Hero", archer: true, ability: "hippolyta",},
    delphiHero14 : {img : "Penelope", name : "Penelope", atk : 1, hp : 3, baseAtk : 1, baseHp : 3, modAtk : 1, modHp : 3, type : "universal", text : "Faithful", money : 8, food : 0, desc : "Can use one food to heal a unit by one (once a turn)", id: "Hero", canTarget: "penelope",},
    delphiHero15 : {img : "Meleager", name : "Meleager", atk : 4, hp : 4, baseAtk : 4, baseHp : 4, modAtk : 4, modHp : 4, type : "universal", text : "Hunter's Instinct", money : 12, food : 0, desc : "Takes one less damage from units with less attack than him", id: "Hero",},
    delphiHero16 : {img : "Bellerophon", name : "Bellerophon", atk : 4, hp : 2, baseAtk : 4, baseHp : 2, modAtk : 4, modHp : 2, type : "universal", text : "Monster Hunter", money : 8, food : 0, desc : "Bellerophon cannot be damaged by monsters", id: "Hero",},
    delphiHero17 : {img : "Daedalus", name : "Daedalus", atk : 1, hp : 4, baseAtk : 1, baseHp : 4, modAtk : 1, modHp : 4, type : "universal", text : "Master Craftsman", money : 12, food : 0, desc : "Can give a target unit a random piece of equipment for 2$ (once a turn)", id: "Hero", canTarget: "daedalus",},    
    delphiHero18 : {img : "Pandora", name : "Pandora", atk : 1, hp : 3, baseAtk : 1, baseHp : 3, modAtk : 1, modHp : 3, type : "universal", text : "Chaotic Curiosity", money : 6, food : 0, desc : "Pandora can activate a random disaster for a random player (5 turn cooldown)", id: "Hero", ability: "pandora",}, 
    delphiHero19 : {img : "Cassandra", name : "Cassandra", atk : 1, hp : 3, baseAtk : 1, baseHp : 3, modAtk : 1, modHp : 3, type : "universal", text : "Cursed Prophecy", money : 6, food : 0, desc : "You can block an event from happening to you, but the last two events are pushed to the top of the event pile (3 turn cooldown)", id: "Hero", canTarget: "cassandra",}, 
    delphiHero20 : {img : "Neoptolemus", name : "Neoptolemus", atk : 1, hp : 5, baseAtk : 1, baseHp : 5, modAtk : 1, modHp : 5, type : "universal", text : "His Father's Rage", money :10, food : 0, desc : "His attack doubles everytime he attacks", id: "Hero", attacked: 0,}, 
    delphiHero21 : {img : "Clytemnestra", name : "Clytemnestra", atk : 2, hp : 3, baseAtk : 2, baseHp : 2, modAtk : 2, modHp : 2, type : "universal", text : "Hero Slayer", money : 10, food : 0, desc : "You can use 1 money to add 1 to Clytemnestra's attack for a single hit against a hero (no cooldown)", id: "Hero", ability: "clytemnestra",}, 
    delphiHero22 : {img : "Orpheus", name : "Orpheus", atk : 1, hp : 3, baseAtk : 1, baseHp : 3, modAtk : 1, modHp : 3, type : "universal", text : "Master of Music", money : 10, food : 0, desc : "Orpheus boosts morale, healing all units in his army by 1 (2 turn cooldown)", id: "Hero", ability: "orpheus",}, 
    delphiHero23 : {img : "Patroclus", name : "Patroclus", atk : 2, hp : 5, baseAtk : 2, baseHp : 5, modAtk : 2, modHp : 5, type : "universal", text : "Brotherly Love", money : 14, food : 0, desc : "Choose a companion for Patroclus: his attack becomes equal to his companion's until they die. If Patroclus dies first, deal two damage to his companion", id: "Hero", canTarget: "patroclus",},
    delphiHero24 : {img : "Agamemnon", name : "Agamemnon", atk : 3, hp : 6, baseAtk : 3, baseHp : 6, modAtk : 3, modHp : 6, type : "universal", text : "Leader of the Greeks", money : 14, food : 0, desc : "Gives all soldiers +1+1", id: "Hero", slotModifier: "agamemnon",},
};

export const board = {
    athensCity : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t3: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
    spartaCity : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t3: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
    troyCity : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t3: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
    thebesCity : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t3: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
    delphi : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t3: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t4: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
    left : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
    top : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
    right : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
    bottom : {
        t1: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
        t2: {s1: "noCard",s2: "noCard",s3: "noCard",s4: "noCard",s5: "noCard",s6: "noCard"},
    },
};

export const nav = {
        "athensCity-t1": ["top-t2", "left-t1"],
        "athensCity-t2": ["left-t2"],
        "athensCity-t3": ["top-t1"],
        "spartaCity-t1": ["top-t1", "right-t1"],
        "spartaCity-t2": ["right-t2"],
        "spartaCity-t3": ["top-t2"],
        "thebesCity-t1": ["bottom-t1", "right-t2"],
        "thebesCity-t2": ["right-t1"],
        "thebesCity-t3": ["bottom-t2"],
        "troyCity-t1": ["bottom-t2", "left-t2"],
        "troyCity-t2": ["left-t1"],
        "troyCity-t3": ["bottom-t1"],
        "left-t1": ["athensCity-t1", "troyCity-t2", "delphi-t1"],
        "left-t2": ["troyCity-t1", "athensCity-t2", "delphi-t4"],
        "top-t1": ["athensCity-t3", "spartaCity-t1", "delphi-t2"],
        "top-t2": ["spartaCity-t3", "athensCity-t1", "delphi-t1"],
        "right-t1": ["thebesCity-t2", "spartaCity-t1", "delphi-t2"],
        "right-t2": ["spartaCity-t2", "thebesCity-t1", "delphi-t3"],
        "bottom-t1": ["thebesCity-t1", "troyCity-t3", "delphi-t3"],
        "bottom-t2": ["troyCity-t1", "thebesCity-t3", "delphi-t4"],
        "delphi-t1": ["top-t2", "left-t1"],
        "delphi-t2": ["top-t1", "right-t1"],
        "delphi-t3": ["bottom-t1", "right-t2"],
        "delphi-t4": ["bottom-t2", "left-t2"],
};

export const atkNav = {
    "athensCity-t1": ["athensCity-t2", "athensCity-t3"],
    "athensCity-t2": ["athensCity-t1", "athensCity-t3", "athensCity"],
    "athensCity-t3": ["athensCity-t1", "athensCity-t2", "athensCity"],
    "spartaCity-t1": ["spartaCity-t2", "spartaCity-t3"],
    "spartaCity-t2": ["spartaCity-t1", "spartaCity-t3", "spartaCity"],
    "spartaCity-t3": ["spartaCity-t1", "spartaCity-t2", "spartaCity"],
    "thebesCity-t1": ["thebesCity-t2", "thebesCity-t3"],
    "thebesCity-t2": ["thebesCity-t1", "thebesCity-t3", "thebesCity"],
    "thebesCity-t3": ["thebesCity-t1", "thebesCity-t2", "thebesCity"],
    "troyCity-t1": ["troyCity-t2", "troyCity-t3"],
    "troyCity-t2": ["troyCity-t1", "troyCity-t3", "troyCity"],
    "troyCity-t3": ["troyCity-t1", "troyCity-t2", "troyCity"],
    "delphi-t1": ["delphi-t2", "delphi-t3", "delphi-t4"],
    "delphi-t2": ["delphi-t1", "delphi-t3", "delphi-t4"],
    "delphi-t3": ["delphi-t1", "delphi-t2", "delphi-t4"],
    "delphi-t4": ["delphi-t1", "delphi-t2", "delphi-t3"],
    "top-t1":["top-t2"],
    "top-t2":["top-t1"],
    "left-t1":["left-t2"],
    "left-t2":["left-t1"],
    "right-t1":["right-t2"],
    "right-t2":["right-t1"],
    "bottom-t1":["bottom-t2"],
    "bottom-t2":["bottom-t1"],
};

export const oppositeNav = {
    "top-t1-s1": "top-t2-s4",
    "top-t1-s2": "top-t2-s3",
    "top-t1-s3": "top-t2-s2",
    "top-t1-s4": "top-t2-s1",
    "top-t1-s5": "top-t2-s6",
    "top-t1-s6": "top-t2-s5",
    "top-t2-s4": "top-t1-s1",
    "top-t2-s3": "top-t1-s2",
    "top-t2-s2": "top-t1-s3",
    "top-t2-s1": "top-t1-s4",
    "top-t2-s6": "top-t1-s5",
    "top-t2-s5": "top-t1-s6",

    "bottom-t1-s1": "bottom-t2-s4",
    "bottom-t1-s2": "bottom-t2-s3",
    "bottom-t1-s3": "bottom-t2-s2",
    "bottom-t1-s4": "bottom-t2-s1",
    "bottom-t1-s5": "bottom-t2-s6",
    "bottom-t1-s6": "bottom-t2-s5",
    "bottom-t2-s4": "bottom-t1-s1",
    "bottom-t2-s3": "bottom-t1-s2",
    "bottom-t2-s2": "bottom-t1-s3",
    "bottom-t2-s1": "bottom-t1-s4",
    "bottom-t2-s6": "bottom-t1-s5",
    "bottom-t2-s5": "bottom-t1-s6",

    "left-t1-s1": "left-t2-s1",
    "left-t1-s2": "left-t2-s2",
    "left-t1-s3": "left-t2-s3",
    "left-t1-s4": "left-t2-s4",
    "left-t1-s5": "left-t2-s5",
    "left-t1-s6": "left-t2-s6",
    "left-t2-s1": "left-t1-s1",
    "left-t2-s2": "left-t1-s2",
    "left-t2-s3": "left-t1-s3",
    "left-t2-s4": "left-t1-s4",
    "left-t2-s5": "left-t1-s5",
    "left-t2-s6": "left-t1-s6",

    "right-t1-s1": "right-t2-s1",
    "right-t1-s2": "right-t2-s2",
    "right-t1-s3": "right-t2-s3",
    "right-t1-s4": "right-t2-s4",
    "right-t1-s5": "right-t2-s5",
    "right-t1-s6": "right-t2-s6",
    "right-t2-s1": "right-t1-s1",
    "right-t2-s2": "right-t1-s2",
    "right-t2-s3": "right-t1-s3",
    "right-t2-s4": "right-t1-s4",
    "right-t2-s5": "right-t1-s5",
    "right-t2-s6": "right-t1-s6",
};

export const warNav = {
    athens: {
        sparta: ["top-t2", "top-t1"],
        troy: ["left-t1", "left-t2"],
        thebes: "none",
    },
    sparta: {
        athens: ["top-t1", "top-t2"],
        troy: "none",
        thebes: ["right-t1", "right-t2"],
    },
    thebes: {
        athens: "none",
        troy: ["bottom-t1", "bottom-t2"],
        sparta: ["right-t2", "right-t1"],
    },
    troy: {
        athens: ["left-t2", "left-t1"],
        thebes: ["bottom-t2", "bottom-t1"],
        sparta: "none",
    },
};

export const wars = {
    "peloponnesianWar": ["athens", "sparta"],
    "leuctraWar": ["thebes", "sparta"],
    "trojanWar": ["troy", "random"],
};

export const modifiers = {
    // Positive //
    bountifulHarvest: {
        type: "income",
        extent: "multipliers",
        resource: "food",
        effect: {
            name: "bharvest",
            mod: {
                duration: 3,
                value: 2,
            }
        }
    },
    goldRush: {
        type: "income",
        extent: "multipliers",
        resource: "money",
        effect: {
            name: "grush",
            mod: {
                duration: 3,
                value: 2,
            }
        }
    },
    festival: {
        type: "income",
        extent: "multipliers",
        resource: "both",
        effect: {
            name: "festival",
            mod: {
                duration: 3,
                value: 2,
            }
        }
    },
    goodTrades: {
        type: "income",
        extent: "bonuses",
        resource: "money",
        effect: {
            name: "gtrades",
            mod: {
                duration: 1,
                value: 3,
            }
        }
    },
    fruitfulForaging: {
        type: "income",
        extent: "bonuses",
        resource: "food",
        effect: {
            name: "fforaging",
            mod: {
                duration: 1,
                value: 3,
            }
        }
    },
    // Negative //
    famine : {
        type: "income",
        extent: "multipliers",
        resource: "food",
        effect: {
            name: "famine",
            mod: {
                duration: 3,
                value: 0.5,
            }
        }
    },
    drought : {
        type: "income",
        extent: "multipliers",
        resource: "money",
        effect: {
            name: "drought",
            mod: {
                duration: 3,
                value: 0.5,
            }
        }
    },
    volcano : {
        type: "income",
        extent: "multipliers",
        resource: "both",
        effect: {
            name: "volcano",
            mod: {
                duration: 3,
                value: 0.5,
            }
        }
    },
    storm : {
        type: "income",
        extent: "bonuses",
        resource: "money",
        effect: {
            name: "storm",
            mod: {
                duration: 1,
                value: -3,
            }
        }
    },
    fire : {
        type: "income",
        extent: "bonuses",
        resource: "food",
        effect: {
            name: "fire",
            mod: {
                duration: 1,
                value: -3,
            }
        }
    },
// Hero Modifiers //
    cecrops : {
        type: "income",
        extent: "bonuses",
        resource: "both",
        effect: {
            name: "cecrops",
            mod: {
                duration: 1000,
                value: 1,
                card: "Cecrops",
            }
        }
    },
    dionysus : {
        type: "income",
        extent: "multipliers",
        resource: "both",
        effect: {
            name: "dionysus",
            mod: {
                duration: 1000,
                value: 2,
                card: "Dionysus",
            }
        }
    },
    priam : {
        type: "income",
        extent: "bonuses",
        resource: "money",
        effect: {
            name: "priam",
            mod: {
                duration: 1000,
                value: 1,
                card: "Priam",
            }
        }
    },
    pericles : {
        type: "discount",
        extent: "int",
        discounts: "buildings",
        effect: {
            name: "pericles",
            mod: {
                duration: 1000,
                value: 2,
                card: "Pericles",
            }
        }
    },
    brasidas : {
        type: "discount",
        extent: "int",
        discounts: "soldiers",
        effect: {
            name: "brasidas",
            mod: {
                duration: 1000,
                value: 1,
                card: "Brasidas",
            }
        }
    },
    cadmus : {
        type: "discount",
        extent: "multiplier",
        discounts: "buildings",
        effect: {
            name: "cadmus",
            mod: {
                duration: 1000,
                value: 1,
                card: "Cadmus",
                once: true,
            }
        }
    },
    nestor : {
        type: "discount",
        extent: "int",
        discounts: "buildings",
        effect: {
            name: "nestor",
            mod: {
                duration: 1000,
                value: 2,
                card: "Nestor",
            }
        }
    },
    jason : {
        type: "discount",
        extent: "int",
        discounts: "heroes",
        effect: {
            name: "jason",
            mod: {
                duration: 1000,
                value: 2,
                card: "Jason",
            }
        }
    },
    leonidas : {
        type: "position",
        extent: "battlefield",
        effects: "allies",
        effect: {
            name: "leonidas",
            mod: {
                battlefield: "none",
                atk: 1,
                hp: 1,
            }
        }
    },
    agamemnon : {
        type: "position",
        extent: "battlefield",
        effects: "allies",
        effect: {
            name: "agamemnon",
            mod: {
                battlefield: "none",
                atk: 1,
                hp: 1,
                effects: "Soldier",
            }
        }
    },
    ajax : {
        type: "position",
        extent: "slot",
        effects: "neighbours",
        effect: {
            name: "ajax",
            mod: {
                slot: "none",
                atk: 0,
                hp: 3,
            }
        }
    },
    menelaus : {
        type: "position",
        extent: "slot",
        effects: "opposite",
        effect: {
            name: "menelaus",
            mod: {
                slot: "none",
                atk: -2,
                hp: 0,
                taunt: true,
            },
        },
    },
    // Other //
    thebes : {
        type: "discount",
        extent: "int",
        discounts: "heroes",
        effect: {
            name: "thebes",
            mod: {
                duration: 1000,
                value: 3,
                card: "thebesCity",
            }
        }
    },
    athens : {
        type: "discount",
        extent: "int",
        discounts: "walls",
        effect: {
            name: "athens",
            mod: {
                duration: 1000,
                value: 3,
                card: "athensCity",
            }
        }
    },
    war : {
        type: "position",
        extent: "battlefield",
        effects: "allies",
        effect: {
            name: "war",
            mod: {
                battlefield: "none",
                atk: 0,
                hp: 0,
                taunt: true,
                duration: 5,
            },
        },
    },
};