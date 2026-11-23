/* Speisekarten-Has – Datenbestand
   Quellen: speisekartenhas.jimdofree.com (Start + Second) und speisekartenhas.weebly.com (Home + Second, ab 01.2026).
   Telefonnummern/Orte von der Weebly-Sammlung, Öffnungszeiten nur wo offiziell/verlässlich, sonst Google-Maps-Link. */
"use strict";

const BASE = "https://speisekartenhas.111mb.de/";

const RESTAURANTS = [
  {
    id: "asia-kim",
    name: "Asia Kim (ANH)",
    place: "Haßfurt",
    cat: "asiatisch",
    phone: "+4995217648",
    pages: [
      { label: "Seite 1", url: BASE + "AsiaKimHassfurt.jpg" },
      { label: "Seite 2", url: BASE + "AsiaKimHassfurt2.jpg" }
    ]
  },
  {
    id: "avanti",
    name: "Avanti",
    place: "Haßfurt",
    cat: "pizza",
    phone: "+4995216229026",
    pages: [
      { label: "Seite 1", url: BASE + "avanti1.png" },
      { label: "Seite 2", url: BASE + "avanti2.png" }
    ]
  },
  {
    id: "basanese",
    name: "Basanese",
    place: "Haßfurt",
    cat: "pizza",
    phone: "+4995219587500",
    pages: [
      { label: "Seite 1", url: BASE + "Basanese1.jpg" },
      { label: "Seite 2", url: BASE + "Basanese2.jpg" }
    ]
  },
  {
    id: "efes-doener",
    name: "EFES Döner",
    place: "Knetzgau",
    cat: "doener",
    phone: "+4995273569757",
    pages: [
      { label: "Seite 1", url: BASE + "DoenerKnetzgau1.jpg" },
      { label: "Seite 2", url: BASE + "DoenerKnetzgau2.jpeg" }
    ]
  },
  {
    id: "drei-linden",
    name: "Gasthof Drei Linden",
    place: "Knetzgau",
    cat: "deutsch",
    phone: "+499527251",
    pages: [
      { label: "Karte", url: "https://www.gasthofdreilindenknetzgau.de/app/download/16229539/SpeisekarteDreiLindenKnetzgau.pdf", type: "pdf" }
    ]
  },
  {
    id: "edi-pizza",
    name: "Edi's Pizza",
    place: "Sand am Main",
    cat: "pizza",
    phone: "+499524300766",
    pages: [
      { label: "Seite 1", url: BASE + "EdiPizza1.jpg" },
      { label: "Seite 2", url: BASE + "EdiPizza2.jpg" }
    ]
  },
  {
    id: "pizza-cesare",
    name: "Pizza bei Cesare",
    place: "Zeil am Main",
    cat: "pizza",
    phone: "+499524302662",
    pages: [
      { label: "Seite 1", url: BASE + "cesare1.jpg" },
      { label: "Seite 2", url: BASE + "cesare2.jpg" }
    ]
  },
  {
    id: "mai-lan",
    name: "Mai Lan (Mr. Wok) / Xin Chào",
    place: "Haßfurt",
    cat: "asiatisch",
    phone: "+499521954127",
    pages: [
      { label: "Seite 1", url: BASE + "mailan1.jpeg" },
      { label: "Seite 2", url: BASE + "mailan2.jpeg" }
    ]
  },
  {
    id: "pizzarella",
    name: "Pizzarella",
    place: "Knetzgau",
    cat: "pizza",
    phone: "+4995271504",
    pages: [
      { label: "Karte", url: "http://www.pizzarella.de/assets/pizzarella_speisenkarte_web_stand_12_2018.pdf", type: "pdf" },
      { label: "Seite 2", url: BASE + "Pizzarella2.jpg" }
    ]
  },
  {
    id: "pizza-theres",
    name: "Pizza Theres",
    place: "Theres",
    cat: "pizza",
    phone: "+4995219599234",
    pages: [
      { label: "Seite 1", url: BASE + "PizzaTheres1.jpg" },
      { label: "Seite 2", url: BASE + "PizzaTheres2.jpg" }
    ]
  },
  {
    id: "thai-food-knetzgau",
    name: "Thai-Food Knetzgau (Busaya)",
    place: "Knetzgau",
    cat: "asiatisch",
    phone: "+4995279526509",
    pages: [
      { label: "Seite 1", url: BASE + "ThaiFoodBusayaKnetzgau1.jpg" },
      { label: "Seite 2", url: BASE + "ThaiFoodBusayaKnetzgau2.jpg" }
    ]
  },
  {
    id: "westheim-pizza",
    name: "Westheim Pizza (Da Noi)",
    place: "Westheim",
    cat: "pizza",
    phone: "+4995279528966",
    pages: [
      { label: "Seite 1", url: BASE + "WestheimPizza1.jpg" },
      { label: "Seite 2", url: BASE + "WestheimPizza2.jpg" }
    ]
  },
  {
    id: "asia-imbiss-zeil",
    name: "Asia Imbiss Zeil",
    place: "Zeil am Main",
    cat: "asiatisch",
    phone: "+499524300396",
    pages: [
      { label: "Seite 1", url: BASE + "ZeilerChinese1.jpeg" },
      { label: "Seite 2", url: BASE + "ZeilerChinese2.jpeg.jpeg" }
    ]
  },
  {
    id: "sylbacher-grieche",
    name: "Sylbacher Grieche (Korfu)",
    place: "Sylbach",
    cat: "griechisch",
    phone: "+4995218516",
    pages: [
      { label: "Karte", url: "http://korfu-sylbach.com/speisekarte.pdf", type: "pdf" }
    ]
  },
  {
    id: "sennhuette-zeil",
    name: "Sennhütte Zeil",
    place: "Zeil am Main",
    cat: "griechisch",
    phone: "+4995245469",
    hours: ["Di–So geöffnet (Mo Ruhetag)", "Griechische & fränkische Küche, Biergarten"],
    pages: [
      { label: "Karte", url: "https://www.gasthaus-sennhuette.de/wp-content/uploads/2024/05/Speisekarte_Sennhuette_Zeil_Mai_2024.pdf", type: "pdf" },
      { label: "Foto", url: BASE + "SennhuetteZeil1.jpg" }
    ]
  },
  {
    id: "tandoori",
    name: "Tandoori",
    place: "Wonfurt",
    cat: "asiatisch",
    phone: "+4995212569",
    pages: [
      { label: "Karte", url: BASE + "tandoori_wonfurt.jpg" }
    ]
  },
  {
    id: "don-camillo",
    name: "Don Camillo",
    place: "Haßfurt",
    cat: "pizza",
    phone: "+4995218778",
    pages: [
      { label: "Seite 1", url: BASE + "Don%20Camillo1.jpg" },
      { label: "Seite 2", url: BASE + "Don%20Camillo2.jpg" }
    ]
  },
  {
    id: "la-fontana",
    name: "La Fontana",
    place: "Sand am Main",
    cat: "pizza",
    phone: "+4995243046115",
    pages: [
      { label: "Seite 1", url: BASE + "LaFontana1.png" },
      { label: "Seite 2", url: BASE + "LaFontana2.png" }
    ]
  },
  {
    id: "kurdi",
    name: "Kürdi Grillhaus",
    place: "Haßfurt",
    cat: "doener",
    pages: [
      { label: "Seite 1", url: BASE + "kurdi1.jpeg" },
      { label: "Seite 2", url: BASE + "kurdi2.jpeg" }
    ]
  },
  {
    id: "kokono",
    name: "Kokono (Pan Asia & Sushi)",
    place: "Haßfurt",
    cat: "asiatisch",
    phone: "+4995219542432",
    addr: "Zeiler Str. 6, 97437 Haßfurt",
    hours: ["Mo–So: 11:00–15:00 & 17:00–22:30", "ohne Gewähr – Stand November 2026"],
    pages: [
      { label: "Mittagskarte", url: BASE + "Kokono-Mittag.pdf", type: "pdf" },
      { label: "Abendkarte", url: BASE + "Kokono-Abendmenu.pdf", type: "pdf" }
    ]
  },
  {
    id: "rain",
    name: "Rain",
    place: "",
    cat: "sonstiges",
    pages: [
      { label: "Seite 1", url: BASE + "rain1.jpeg" },
      { label: "Seite 2", url: BASE + "rain2.jpeg" }
    ]
  },
  {
    id: "black-dschinni",
    name: "Black Dschinni Shisha",
    place: "Haßfurt",
    cat: "sonstiges",
    phone: "+4917657878618",
    pages: [
      { label: "Karte", url: BASE + "Shishabar_Has.pdf", type: "pdf" }
    ]
  },
  {
    id: "lokwerk",
    name: "Lokwerk",
    place: "",
    cat: "sonstiges",
    pages: [
      { label: "Karte", url: BASE + "Lok.jpeg" }
    ]
  },
  {
    id: "substop",
    name: "Substop",
    place: "Haßfurt",
    cat: "burger",
    phone: "+4995218588",
    pages: [
      { label: "Karte", url: BASE + "Substop.jpg" }
    ]
  },
  {
    id: "zum-alten-bach",
    name: "Zum alten Bach (Grieche)",
    place: "Zell",
    cat: "griechisch",
    phone: "+499529284",
    pages: [
      { label: "Seite 1", url: BASE + "Grieche%20Zell1.jpg" },
      { label: "Seite 2", url: BASE + "Grieche%20Zell2.jpg" }
    ]
  },
  {
    id: "stuermer",
    name: "Stürmer",
    place: "Haßfurt",
    cat: "sonstiges",
    phone: "+4995211320",
    pages: [
      { label: "Seite 1", url: BASE + "stuermer1.jpeg" },
      { label: "Seite 2", url: BASE + "stuermer2.jpeg" }
    ]
  },
  {
    id: "devran-kitchen",
    name: "Devran Kitchen",
    place: "Haßfurt",
    cat: "doener",
    phone: "+4995216229049",
    pages: [
      { label: "Seite 1", url: BASE + "devran1.jpg" },
      { label: "Seite 2", url: BASE + "devran2.jpg" }
    ]
  },
  {
    id: "vip-chicken",
    name: "VIP Chicken",
    place: "Knetzgau",
    cat: "burger",
    pages: [
      { label: "Karte", url: BASE + "VIP%20Chicken.jpeg" }
    ]
  },
  {
    id: "pizza-begu",
    name: "Pizza Begu",
    place: "Haßfurt",
    cat: "pizza",
    phone: "+4995219577664",
    pages: [
      { label: "Seite 1", url: BASE + "PizzaBegu1.jpg" },
      { label: "Seite 2", url: BASE + "PizzaBegu2.jpg" }
    ]
  },
  {
    id: "pizzissima",
    name: "Pizzissima (Rewe)",
    place: "Haßfurt",
    cat: "pizza",
    pages: [
      { label: "Seite 1", url: BASE + "rewe%20pizza.jpg" },
      { label: "Seite 2", url: BASE + "rewe%20pizza2.jpg" }
    ]
  },
  {
    id: "marmaris-sand",
    name: "Marmaris Döner & Pizza",
    place: "Sand am Main",
    cat: "doener",
    phone: "+4995243134",
    pages: [
      { label: "Karte", url: BASE + "d%C3%B6ner%20sand.png" }
    ]
  },
  {
    id: "pizza-majk",
    name: "Pizza Majk",
    place: "Knetzgau",
    cat: "pizza",
    phone: "+4995279527336",
    pages: [
      { label: "Seite 1", url: BASE + "PizzaMajk1.jpg" },
      { label: "Seite 2", url: BASE + "PizzaMajk2.jpg" }
    ]
  },
  {
    id: "doener-donnersdorf",
    name: "Döner Donnersdorf (Dilan)",
    place: "Donnersdorf",
    cat: "doener",
    pages: [
      { label: "Karte", url: BASE + "DonnersdorfDoener1.jpg" }
    ]
  },
  {
    id: "poseidon",
    name: "Poseidon Grieche",
    place: "Haßfurt",
    cat: "griechisch",
    pages: [
      { label: "Karte", url: BASE + "Speisekarte-Poseidon-2020.pdf", type: "pdf" }
    ]
  },
  {
    id: "big-booty",
    name: "Big Booty",
    place: "Sand am Main",
    cat: "burger",
    pages: [
      { label: "Karte", url: BASE + "bigbooty1.jfif" }
    ]
  },
  {
    id: "on-fire-burger",
    name: "On Fire Burger",
    place: "Haßfurt",
    cat: "burger",
    phone: "+4995284259975",
    addr: "Brüder-Becker-Str. 1a, 97437 Haßfurt",
    pages: [
      { label: "Seite 1", url: BASE + "onfireburger1.jpg" },
      { label: "Seite 2", url: BASE + "onfireburger2.jpg" }
    ]
  },
  {
    id: "pizza-luna",
    name: "Pizza Luna",
    place: "",
    cat: "pizza",
    pages: [
      { label: "Seite 1", url: BASE + "pizzaluna1.jpg" },
      { label: "Seite 2", url: BASE + "pizzaluna2.jpg" }
    ]
  },
  {
    id: "alaa-aldin",
    name: "Alaa Aldin",
    place: "",
    cat: "doener",
    pages: [
      { label: "Seite 1", url: BASE + "Alaa%20Aldin1.jpg" },
      { label: "Seite 2", url: BASE + "Alaa%20Aldin2.jpg" }
    ]
  },
  {
    id: "aras-doener",
    name: "Aras Döner",
    place: "Haßfurt",
    cat: "doener",
    phone: "+491747087257",
    pages: [
      { label: "Seite 1", url: BASE + "Aras1.jpg" },
      { label: "Seite 2", url: BASE + "Aras2.jpg" }
    ]
  },
  {
    id: "roza-imbiss",
    isNew: true,
    name: "Roza Imbiss",
    place: "Haßfurt",
    cat: "doener",
    phone: "+491735278655",
    pages: [
      { label: "Seite 1", url: BASE + "Roza1.jpg" },
      { label: "Seite 2", url: BASE + "Roza2.jpg" }
    ]
  },
  {
    id: "diafa",
    isNew: true,
    name: "Diafa (Genuss-Café & Catering)",
    place: "Haßfurt",
    cat: "sonstiges",
    phone: "+4995218588",
    pages: [
      { label: "Karte", url: "https://www.yumpu.com/de/document/read/63696811/diafa-genuss-cafe-food-catering", type: "web" }
    ]
  },
  {
    id: "pizza-sali",
    isNew: true,
    name: "Pizza Sali",
    place: "Eltmann",
    cat: "pizza",
    phone: "+4995227087333",
    pages: [
      { label: "Seite 1", url: BASE + "sali1.jpg" },
      { label: "Seite 2", url: BASE + "sali2.jpg" }
    ]
  },
  {
    id: "stadt-doener-zeil",
    isNew: true,
    name: "Stadt Döner + Pizza",
    place: "Zeil am Main",
    cat: "doener",
    phone: "+4995243008684",
    pages: [
      { label: "Seite 1", url: BASE + "stadtdonerpizzazeil1.jpg" },
      { label: "Seite 2", url: BASE + "stadtdonerpizzazeil2.jpg" }
    ]
  },
  {
    id: "pizza-adriano",
    isNew: true,
    name: "Pizza Adriano",
    place: "Zeil am Main",
    cat: "pizza",
    phone: "+4995243039505",
    pages: [
      { label: "Seite 1", url: BASE + "Adriano1.jpg" },
      { label: "Seite 2", url: BASE + "Adriano2.jpg" }
    ]
  },
  {
    id: "bella-pizza",
    isNew: true,
    name: "Bella Pizza",
    place: "Ebelsbach",
    cat: "pizza",
    phone: "+491749197048",
    pages: [
      { label: "Seite 1", url: BASE + "Bella1.jpg" },
      { label: "Seite 2", url: BASE + "Bella2.jpg" }
    ]
  },
  {
    id: "zam-zam",
    isNew: true,
    name: "Zam Zam Grill House",
    place: "Ebelsbach",
    cat: "doener",
    pages: []
  }
];

const CATEGORIES = [
  { id: "alle",     label: "Alle" },
  { id: "pizza",    label: "🍕 Pizza" },
  { id: "doener",   label: "🥙 Döner & Grill" },
  { id: "asiatisch",label: "🍜 Asiatisch" },
  { id: "griechisch", label: "🥗 Griechisch" },
  { id: "burger",   label: "🍔 Burger & Fast Food" },
  { id: "deutsch",  label: "🍖 Gutbürgerlich" },
  { id: "sonstiges",label: "🍽️ Sonstiges" }
];
