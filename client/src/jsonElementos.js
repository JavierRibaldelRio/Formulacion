//conener el json


var jsonElementos = `[
    {
        "z": 55,
        "nombre": "Cesio",
        "sq": "Cs",
        "v": "1",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 1,
        "tipo": "Grupo1",
        "Metal": true
    },
    {
        "z": 87,
        "nombre": "Francio",
        "sq": "Fr",
        "v": "1",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 1,
        "tipo": "Grupo1",
        "Metal": true
    },
    {
        "z": 1,
        "nombre": "Hidrógeno",
        "sq": "H",
        "v": "-1,1",1
        "repeticion": 28,
        "puntos": 5,
        "grupo": 1,
        "tipo": "Grupo1",
        "Metal": false
    },
    {
        "z": 3,
        "nombre": "Litio",
        "sq": "Li",
        "v": "1",
        "repeticion": 2,
        "puntos": 20,
        "grupo": 1,
        "tipo": "Grupo1",
        "Metal": true
    },
    {
        "z": 19,
        "nombre": "Potasio",
        "sq": "K",
        "v": "1",
        "repeticion": 2,
        "puntos": 20,
        "grupo": 1,
        "tipo": "Grupo1",
        "Metal": true
    },
    {
        "z": 37,
        "nombre": "Rubidio",
        "sq": "Rb",
        "v": "1",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 1,
        "tipo": "Grupo1",
        "Metal": true
    },
    {
        "z": 11,
        "nombre": "Sodio",
        "sq": "Na",
        "v": "1",
        "repeticion": 3,
        "puntos": 15,
        "grupo": 1,
        "tipo": "Grupo1",
        "Metal": true
    },
    {
        "z": 56,
        "nombre": "Bario",
        "sq": "Ba",
        "v": "2",
        "repeticion": 2,
        "puntos": 20,
        "grupo": 2,
        "tipo": "Grupo2",
        "Metal": true
    },
    {
        "z": 4,
        "nombre": "Berilio",
        "sq": "Be",
        "v": "2",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 2,
        "tipo": "Grupo2",
        "Metal": true
    },
    {
        "z": 20,
        "nombre": "Calcio",
        "sq": "Ca",
        "v": "2",
        "repeticion": 3,
        "puntos": 20,
        "grupo": 2,
        "tipo": "Grupo2",
        "Metal": true
    },
    {
        "z": 38,
        "nombre": "Estroncio",
        "sq": "Sr",
        "v": "2",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 2,
        "tipo": "Grupo2",
        "Metal": true
    },
    {
        "z": 12,
        "nombre": "Magnesio",
        "sq": "Mg",
        "v": "2",
        "repeticion": 2,
        "puntos": 20,
        "grupo": 2,
        "tipo": "Grupo2",
        "Metal": true
    },
    {
        "z": 88,
        "nombre": "Radio",
        "sq": "Ra",
        "v": "2",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 2,
        "tipo": "Grupo2",
        "Metal": true
    },
    {
        "z": 22,
        "nombre": "Titanio",
        "sq": "Ti",
        "v": "2,3,4",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 4,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 24,
        "nombre": "Cromo",
        "sq": "Cr",
        "v": "2,3,6",
        "repeticion": 2,
        "puntos": 15,
        "grupo": 6,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 25,
        "nombre": "Manganeso",
        "sq": "Mn",
        "v": "2,3,4,6,7",
        "repeticion": 2,
        "puntos": 10,
        "grupo": 7,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 26,
        "nombre": "Hierro",
        "sq": "Fe",
        "v": "2,3",
        "repeticion": 2,
        "puntos": 15,
        "grupo": 8,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 27,
        "nombre": "Cobalto",
        "sq": "Co",
        "v": "2,3",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 9,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 28,
        "nombre": "Níquel",
        "sq": "Ni",
        "v": "2,3",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 10,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 46,
        "nombre": "Paladio",
        "sq": "Pd",
        "v": "2,4",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 10,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 78,
        "nombre": "Platino",
        "sq": "Pt",
        "v": "2,4",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 10,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 29,
        "nombre": "Cobre",
        "sq": "Cu",
        "v": "1,2",
        "repeticion": 2,
        "puntos": 15,
        "grupo": 11,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 79,
        "nombre": "Oro",
        "sq": "Au",
        "v": "1,3",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 11,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 47,
        "nombre": "Plata",
        "sq": "Ag",
        "v": "1",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 11,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 48,
        "nombre": "Cadmio",
        "sq": "Cd",
        "v": "2",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 12,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 30,
        "nombre": "Cinc",
        "sq": "Zn",
        "v": "2",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 12,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 80,
        "nombre": "Mercurio",
        "sq": "Hg",
        "v": "1,2",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 12,
        "tipo": "Metal_Trancision",
        "Metal": true
    },
    {
        "z": 13,
        "nombre": "Aluminio",
        "sq": "Al",
        "v": "3",
        "repeticion": 1,
        "puntos": 30,
        "grupo": 13,
        "tipo": "Grupo13",
        "Metal": true
    },
    {
        "z": 5,
        "nombre": "Boro",
        "sq": "B ",
        "v": "-3,3",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 13,
        "tipo": "Grupo13",
        "Metal": false
    },
    {
        "z": 31,
        "nombre": "Galio",
        "sq": "Ga",
        "v": "3",
        "repeticion": 1,
        "puntos": 30,
        "grupo": 13,
        "tipo": "Grupo13",
        "Metal": true
    },
    {
        "z": 6,
        "nombre": "Carbono",
        "sq": "C",
        "v": "-4,2,4",
        "repeticion": 3,
        "puntos": 20,
        "grupo": 14,
        "tipo": "Grupo14",
        "Metal": false
    },
    {
        "z": 50,
        "nombre": "Estaño",
        "sq": "Sn",
        "v": "2,4",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 14,
        "tipo": "Grupo14",
        "Metal": true
    },
    {
        "z": 82,
        "nombre": "Plomo",
        "sq": "Pb",
        "v": "2,4",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 14,
        "tipo": "Grupo14",
        "Metal": true
    },
    {
        "z": 14,
        "nombre": "Silicio",
        "sq": "Si",
        "v": "-4,4",
        "repeticion": 1,
        "puntos": 25,
        "grupo": 14,
        "tipo": "Grupo14",
        "Metal": false
    },
    {
        "z": 33,
        "nombre": "Arsénico",
        "sq": "As",
        "v": "-3,3,5",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 15,
        "tipo": "Grupo15",
        "Metal": false
    },
    {
        "z": 15,
        "nombre": "Fósforo",
        "sq": "P",
        "v": "-3,3,5",
        "repeticion": 3,
        "puntos": 15,
        "grupo": 15,
        "tipo": "Grupo15",
        "Metal": false
    },
    {
        "z": 7,
        "nombre": "Nitrógeno",
        "sq": "N ",
        "v": "-3,3,5",
        "repeticion": 4,
        "puntos": 15,
        "grupo": 15,
        "tipo": "Grupo15",
        "Metal": false
    },
    {
        "z": 16,
        "nombre": "Azufre",
        "sq": "S",
        "v": "-2,2,4,6",
        "repeticion": 5,
        "puntos": 10,
        "grupo": 16,
        "tipo": "Grupo16",
        "Metal": false
    },
    {
        "z": 8,
        "nombre": "Oxígeno",
        "sq": "O",
        "v": "-2",
        "repeticion": 37,
        "puntos": 5,
        "grupo": 16,
        "tipo": "Grupo16",
        "Metal": false
    },
    {
        "z": 34,
        "nombre": "Selenio",
        "sq": "Se",
        "v": "-2,2,4,7",
        "repeticion": 1,
        "puntos": 20,
        "grupo": 16,
        "tipo": "Grupo16",
        "Metal": false
    },
    {
        "z": 35,
        "nombre": "Bromo",
        "sq": "Br",
        "v": "-1,1,3,5",
        "repeticion": 5,
        "puntos": 10,
        "grupo": 17,
        "tipo": "Grupo17",
        "Metal": false
    },
    {
        "z": 17,
        "nombre": "Cloro",
        "sq": "Cl",
        "v": "-1,1,3,5,7",
        "repeticion": 5,
        "puntos": 10,
        "grupo": 17,
        "tipo": "Grupo17",
        "Metal": false
    },
    {
        "z": 9,
        "nombre": "Flúor",
        "sq": "F",
        "v": "-1",
        "repeticion": 2,
        "puntos": 20,
        "grupo": 17,
        "tipo": "Grupo17",
        "Metal": false
    },
    {
        "z": 53,
        "nombre": "Yodo",
        "sq": "I",
        "v": "-1,1,3,5,7",
        "repeticion": 3,
        "puntos": 10,
        "grupo": 17,
        "tipo": "Grupo17",
        "Metal": false
    }
]`

export default jsonElementos;