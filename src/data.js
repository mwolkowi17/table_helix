

/*export const table = [
    "H", "Hydrogen", "1.00794", 1, 1,
    "He", "Helium", "4.002602", 18, 1,
    "Li", "Lithium", "6.941", 1, 2,
    "Be", "Beryllium", "9.012182", 2, 2,
    "B", "Boron", "10.811", 13, 2,
    "C", "Carbon", "12.0107", 14, 2,
    "N", "Nitrogen", "14.0067", 15, 2,
    "O", "Oxygen", "15.9994", 16, 2,
    "F", "Fluorine", "18.9984032", 17, 2,
    "Ne", "Neon", "20.1797", 18, 2,
    "Na", "Sodium", "22.98976...", 1, 3,
    "Mg", "Magnesium", "24.305", 2, 3,
    "Al", "Aluminium", "26.9815386", 13, 3,
    "Si", "Silicon", "28.0855", 14, 3,
    "P", "Phosphorus", "30.973762", 15, 3,
    "S", "Sulfur", "32.065", 16, 3,
    "Cl", "Chlorine", "35.453", 17, 3,
    "Ar", "Argon", "39.948", 18, 3,
    "K", "Potassium", "39.948", 1, 4,
    "Ca", "Calcium", "40.078", 2, 4,
    "Sc", "Scandium", "44.955912", 3, 4,
    "Ti", "Titanium", "47.867", 4, 4,
    "V", "Vanadium", "50.9415", 5, 4,
    "Cr", "Chromium", "51.9961", 6, 4,
    "Mn", "Manganese", "54.938045", 7, 4,
    "Fe", "Iron", "55.845", 8, 4,
    "Co", "Cobalt", "58.933195", 9, 4,
    "Ni", "Nickel", "58.6934", 10, 4,
    "Cu", "Copper", "63.546", 11, 4,
    "Zn", "Zinc", "65.38", 12, 4,
    "Ga", "Gallium", "69.723", 13, 4,
    "Ge", "Germanium", "72.63", 14, 4,
    "As", "Arsenic", "74.9216", 15, 4,
    "Se", "Selenium", "78.96", 16, 4,
    "Br", "Bromine", "79.904", 17, 4,
    "Kr", "Krypton", "83.798", 18, 4,
    "Rb", "Rubidium", "85.4678", 1, 5,
    "Sr", "Strontium", "87.62", 2, 5,
    "Y", "Yttrium", "88.90585", 3, 5,
    "Zr", "Zirconium", "91.224", 4, 5,
    "Nb", "Niobium", "92.90628", 5, 5,
    "Mo", "Molybdenum", "95.96", 6, 5,
    "Tc", "Technetium", "(98)", 7, 5,
    "Ru", "Ruthenium", "101.07", 8, 5,
    "Rh", "Rhodium", "102.9055", 9, 5,
    "Pd", "Palladium", "106.42", 10, 5,
    "Ag", "Silver", "107.8682", 11, 5,
    "Cd", "Cadmium", "112.411", 12, 5,
    "In", "Indium", "114.818", 13, 5,
    "Sn", "Tin", "118.71", 14, 5,
    "Sb", "Antimony", "121.76", 15, 5,
    "Te", "Tellurium", "127.6", 16, 5,
    "I", "Iodine", "126.90447", 17, 5,
    "Xe", "Xenon", "131.293", 18, 5,
    "Cs", "Caesium", "132.9054", 1, 6,
    "Ba", "Barium", "132.9054", 2, 6,
    "La", "Lanthanum", "138.90547", 4, 9,
    "Ce", "Cerium", "140.116", 5, 9,
    "Pr", "Praseodymium", "140.90765", 6, 9,
    "Nd", "Neodymium", "144.242", 7, 9,
    "Pm", "Promethium", "(145)", 8, 9,
    "Sm", "Samarium", "150.36", 9, 9,
    "Eu", "Europium", "151.964", 10, 9,
    "Gd", "Gadolinium", "157.25", 11, 9,
    "Tb", "Terbium", "158.92535", 12, 9,
    "Dy", "Dysprosium", "162.5", 13, 9,
    "Ho", "Holmium", "164.93032", 14, 9,
    "Er", "Erbium", "167.259", 15, 9,
    "Tm", "Thulium", "168.93421", 16, 9,
    "Yb", "Ytterbium", "173.054", 17, 9,
    "Lu", "Lutetium", "174.9668", 18, 9,
    "Hf", "Hafnium", "178.49", 4, 6,
    "Ta", "Tantalum", "180.94788", 5, 6,
    "W", "Tungsten", "183.84", 6, 6,
    "Re", "Rhenium", "186.207", 7, 6,
    "Os", "Osmium", "190.23", 8, 6,
    "Ir", "Iridium", "192.217", 9, 6,
    "Pt", "Platinum", "195.084", 10, 6,
    "Au", "Gold", "196.966569", 11, 6,
    "Hg", "Mercury", "200.59", 12, 6,
    "Tl", "Thallium", "204.3833", 13, 6,
    "Pb", "Lead", "207.2", 14, 6,
    "Bi", "Bismuth", "208.9804", 15, 6,
    "Po", "Polonium", "(209)", 16, 6,
    "At", "Astatine", "(210)", 17, 6,
    "Rn", "Radon", "(222)", 18, 6,
    "Fr", "Francium", "(223)", 1, 7,
    "Ra", "Radium", "(226)", 2, 7,
    "Ac", "Actinium", "(227)", 4, 10,
    "Th", "Thorium", "232.03806", 5, 10,
    "Pa", "Protactinium", "231.0588", 6, 10,
    "U", "Uranium", "238.02891", 7, 10,
    "Np", "Neptunium", "(237)", 8, 10,
    "Pu", "Plutonium", "(244)", 9, 10,
    "Am", "Americium", "(243)", 10, 10,
    "Cm", "Curium", "(247)", 11, 10,
    "Bk", "Berkelium", "(247)", 12, 10,
    "Cf", "Californium", "(251)", 13, 10,
    "Es", "Einstenium", "(252)", 14, 10,
    "Fm", "Fermium", "(257)", 15, 10,
    "Md", "Mendelevium", "(258)", 16, 10,
    "No", "Nobelium", "(259)", 17, 10,
    "Lr", "Lawrencium", "(262)", 18, 10,
    "Rf", "Rutherfordium", "(267)", 4, 7,
    "Db", "Dubnium", "(268)", 5, 7,
    "Sg", "Seaborgium", "(271)", 6, 7,
    "Bh", "Bohrium", "(272)", 7, 7,
    "Hs", "Hassium", "(270)", 8, 7,
    "Mt", "Meitnerium", "(276)", 9, 7,
    "Ds", "Darmstadium", "(281)", 10, 7,
    "Rg", "Roentgenium", "(280)", 11, 7,
    "Cn", "Copernicium", "(285)", 12, 7,
    "Nh", "Nihonium", "(286)", 13, 7,
    "Fl", "Flerovium", "(289)", 14, 7,
    "Mc", "Moscovium", "(290)", 15, 7,
    "Lv", "Livermorium", "(293)", 16, 7,
    "Ts", "Tennessine", "(294)", 17, 7,
    "Og", "Oganesson", "(294)", 18, 7
  ];
*/
//const wynikToDisplay = require('./ajaxgetter.js'); 
 export const table = [
    "H", "Hydrogen", "1.00794", 1, 1, 'description',
    "He", "Helium", "4.002602", 18, 1, 'description',
    "Li", "Lithium", "6.941", 1, 2, 'description',
    "Be", "Beryllium", "9.012182", 2, 2, 'description',
    "B", "Boron", "10.811", 13, 2, 'description',
    "C", "Carbon", "12.0107", 14, 2, 'description',
    "N", "Nitrogen", "14.0067", 15, 2, 'description',
    "O", "Oxygen", "15.9994", 16, 2, 'description',
    "F", "Fluorine", "18.9984032", 17, 2, 'description',
    "Ne", "Neon", "20.1797", 18, 2, 'description',
    "Na", "Sodium", "22.98976...", 1, 3, 'description',
    "Mg", "Magnesium", "24.305", 2, 3, 'description',
    "Al", "Aluminium", "26.9815386", 13, 3, 'description',
    "Si", "Silicon", "28.0855", 14, 3, 'description',
    "P", "Phosphorus", "30.973762", 15, 3, 'description',
    "S", "Sulfur", "32.065", 16, 3, 'description',
    "Cl", "Chlorine", "35.453", 17, 3, 'description',
    "Ar", "Argon", "39.948", 18, 3, 'description',
    "K", "Potassium", "39.948", 1, 4, 'description',
    "Ca", "Calcium", "40.078", 2, 4, 'description',
    "Sc", "Scandium", "44.955912", 3, 4, 'description',
    "Ti", "Titanium", "47.867", 4, 4, 'description',
    "V", "Vanadium", "50.9415", 5, 4, 'description',
    "Cr", "Chromium", "51.9961", 6, 4, 'description',
    "Mn", "Manganese", "54.938045", 7, 4, 'description',
    "Fe", "Iron", "55.845", 8, 4, 'description',
    "Co", "Cobalt", "58.933195", 9, 4, 'description',
    "Ni", "Nickel", "58.6934", 10, 4, 'description',
    "Cu", "Copper", "63.546", 11, 4, 'description',
    "Zn", "Zinc", "65.38", 12, 4, 'description',
    "Ga", "Gallium", "69.723", 13, 4, 'description',
    "Ge", "Germanium", "72.63", 14, 4, 'description',
    "As", "Arsenic", "74.9216", 15, 4, 'description',
    "Se", "Selenium", "78.96", 16, 4, 'description',
    "Br", "Bromine", "79.904", 17, 4, 'description',
    "Kr", "Krypton", "83.798", 18, 4, 'description',
    "Rb", "Rubidium", "85.4678", 1, 5, 'description',
    "Sr", "Strontium", "87.62", 2, 5, 'description',
    "Y", "Yttrium", "88.90585", 3, 5, 'description',
    "Zr", "Zirconium", "91.224", 4, 5,'description',
    "Nb", "Niobium", "92.90628", 5, 5, 'description',
    "Mo", "Molybdenum", "95.96", 6, 5, 'description',
    "Tc", "Technetium", "(98)", 7, 5, 'description',
    "Ru", "Ruthenium", "101.07", 8, 5, 'description',
    "Rh", "Rhodium", "102.9055", 9, 5, 'description',
    "Pd", "Palladium", "106.42", 10, 5, 'description',
    "Ag", "Silver", "107.8682", 11, 5, 'description',
    "Cd", "Cadmium", "112.411", 12, 5, 'description',
    "In", "Indium", "114.818", 13, 5, 'description',
    "Sn", "Tin", "118.71", 14, 5, 'description',
    "Sb", "Antimony", "121.76", 15, 5, 'description',
    "Te", "Tellurium", "127.6", 16, 5, 'description',
    "I", "Iodine", "126.90447", 17, 5, 'description',
    "Xe", "Xenon", "131.293", 18, 5, 'description',
    "Cs", "Caesium", "132.9054", 1, 6, 'description',
    "Ba", "Barium", "132.9054", 2, 6, 'description',
    "La", "Lanthanum", "138.90547", 4, 9, 'description',
    "Ce", "Cerium", "140.116", 5, 9, 'description',
    "Pr", "Praseodymium", "140.90765", 6, 9, 'description',
    "Nd", "Neodymium", "144.242", 7, 9, 'description',
    "Pm", "Promethium", "(145)", 8, 9, 'description',
    "Sm", "Samarium", "150.36", 9, 9, 'description',
    "Eu", "Europium", "151.964", 10, 9, 'description',
    "Gd", "Gadolinium", "157.25", 11, 9, 'description',
    "Tb", "Terbium", "158.92535", 12, 9, 'description',
    "Dy", "Dysprosium", "162.5", 13, 9, 'description',
    "Ho", "Holmium", "164.93032", 14, 9, 'description',
    "Er", "Erbium", "167.259", 15, 9, 'description',
    "Tm", "Thulium", "168.93421", 16, 9, 'description',
    "Yb", "Ytterbium", "173.054", 17, 9, 'description',
    "Lu", "Lutetium", "174.9668", 18, 9, 'description',
    "Hf", "Hafnium", "178.49", 4, 6, 'description',
    "Ta", "Tantalum", "180.94788", 5, 6, 'description',
    "W", "Tungsten", "183.84", 6, 6, 'description',
    "Re", "Rhenium", "186.207", 7, 6, 'description',
    "Os", "Osmium", "190.23", 8, 6, 'description',
    "Ir", "Iridium", "192.217", 9, 6, 'description',
    "Pt", "Platinum", "195.084", 10, 6, 'description',
    "Au", "Gold", "196.966569", 11, 6, 'description',
    "Hg", "Mercury", "200.59", 12, 6, 'description',
    "Tl", "Thallium", "204.3833", 13, 6, 'description',
    "Pb", "Lead", "207.2", 14, 6, 'description',
    "Bi", "Bismuth", "208.9804", 15, 6, 'description',
    "Po", "Polonium", "(209)", 16, 6, 'description',
    "At", "Astatine", "(210)", 17, 6, 'description',
    "Rn", "Radon", "(222)", 18, 6, 'description',
    "Fr", "Francium", "(223)", 1, 7, 'description',
    "Ra", "Radium", "(226)", 2, 7, 'description',
    "Ac", "Actinium", "(227)", 4, 10, 'description',
    "Th", "Thorium", "232.03806", 5, 10, 'description',
    "Pa", "Protactinium", "231.0588", 6, 10, 'description',
    "U", "Uranium", "238.02891", 7, 10, 'description',
    "Np", "Neptunium", "(237)", 8, 10, 'description',
    "Pu", "Plutonium", "(244)", 9, 10, 'description',
    "Am", "Americium", "(243)", 10, 10, 'description',
    "Cm", "Curium", "(247)", 11, 10, 'description',
    "Bk", "Berkelium", "(247)", 12, 10, 'description',
    "Cf", "Californium", "(251)", 13, 10, 'description',
    "Es", "Einstenium", "(252)", 14, 10, 'description',
    "Fm", "Fermium", "(257)", 15, 10, 'description',
    "Md", "Mendelevium", "(258)", 16, 10, 'description',
    "No", "Nobelium", "(259)", 17, 10, 'description',
    "Lr", "Lawrencium", "(262)", 18, 10, 'description',
    "Rf", "Rutherfordium", "(267)", 4, 7, 'description',
    "Db", "Dubnium", "(268)", 5, 7, 'description',
    "Sg", "Seaborgium", "(271)", 6, 7, 'description',
    "Bh", "Bohrium", "(272)", 7, 7, 'description',
    "Hs", "Hassium", "(270)", 8, 7, 'description',
    "Mt", "Meitnerium", "(276)", 9, 7, 'description',
    "Ds", "Darmstadium", "(281)", 10, 7, 'description',
    "Rg", "Roentgenium", "(280)", 11, 7, 'description',
    "Cn", "Copernicium", "(285)", 12, 7, 'description',
    "Nh", "Nihonium", "(286)", 13, 7, 'description',
    "Fl", "Flerovium", "(289)", 14, 7, 'description',
    "Mc", "Moscovium", "(290)", 15, 7, 'description',
    "Lv", "Livermorium", "(293)", 16, 7, 'description',
    "Ts", "Tennessine", "(294)", 17, 7, 'description',
    "Og", "Oganesson", "(294)", 18, 7, 'description',
  ];

  export const colorComponent=[
    0.5602539025184071,
    0.6384824297074824,
    0.5380701299904569,
    0.3968133997857848,
    0.5557488959436764,
    0.4583555900151176,
    0.25736820462334387,
    0.47428227116802923,
    0.42820633439717104,
    0.2973305699009603,
    0.42509866380784267,
    0.732724709140427,
    0.3472193850391928,
    0.29949425899224225,
    0.5500893409377229,
    0.6890602335904541,
    0.6528568694290664,
    0.30949003644734574,
    0.6887866967872094,
    0.2841070852408355,
    0.6085382267601455,
    0.5675324211987558,
    0.5841020788199434,
    0.6042762838763128,
    0.5627522315606881,
    0.45245495133949876,
    0.5910020119322914,
    0.5195753730898218,
    0.2564123961733118,
    0.6206742051335326,
    0.3360488159957754,
    0.5542421960294621,
    0.39509916247425647,
    0.5763232984140736,
    0.5757838067555774,
    0.5088057232468006,
    0.5654776403183263,
    0.3080469501984482,
    0.37011835019656447,
    0.5467203687474865,
    0.2729767937347142,
    0.27303580005827066,
    0.47267582687557497,
    0.41932339581442835,
    0.5358176061178156,
    0.4900481547236527,
    0.5307187081880919,
    0.2558189015026102,
    0.37855570311025877,
    0.4019185935329542,
    0.2755879762149348,
    0.33367797220710793,
    0.36980301760994305,
    0.5803316083331194,
    0.3689131533224598,
    0.47591262460041517,
    0.7139323136655675,
    0.27299652013256737,
    0.4973366616578704,
    0.3710619380282911,
    0.3894324908566703,
    0.3619215050326732,
    0.586184669764571,
    0.44077473617000007,
    0.2817982415091336,
    0.4805942727315021,
    0.3817261543936442,
    0.5593346159448003,
    0.4119000173999675,
    0.5695795079465098,
    0.35740123864372053,
    0.45384365255891645,
    0.44037486609478993,
    0.7472488264770649,
    0.33739678266351525,
    0.48800836036793793,
    0.5044782662677576,
    0.4344099550474011,
    0.7145624873185685,
    0.7099179236209795,
    0.46186860903568816,
    0.6106624751490326,
    0.4387274208586458,
    0.37237381345725407,
    0.4472756523231064,
    0.6270074608343252,
    0.567454279996367,
    0.27499034611352624,
    0.43284010604812573,
    0.37726682808673795,
    0.3805492144051612,
    0.2774164113141119,
    0.3098985148735537,
    0.532946974152679,
    0.543781941785456,
    0.2967483441713,
    0.40534638195481165,
    0.3620544302338805,
    0.31703110517207933,
    0.7275279721801063,
    0.6234069711064923,
    0.2609901015984024,
    0.6153281334585295,
    0.5662089063064636,
    0.7403367687721194,
    0.635708905655319,
    0.6107718662258356,
    0.5313611584152622,
    0.4194655712905242,
    0.5908520464571811,
    0.7236337686774881,
    0.28111227320353416,
    0.27417003760427816,
    0.5705770048510735,
    0.7446686227411022,
    0.49259270106511766,
    0.25444594100448104,
    0.2955565101298725
]