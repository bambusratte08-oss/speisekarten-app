/* Speisekarten-Has – Datenbestand aus speisekartenhas.jimdofree.com
   Quellen: Start-Seite + Second-Seite. Direktlinks wie auf der Original-Website. */
"use strict";

const BASE = "https://speisekartenhas.111mb.de/";

const RESTAURANTS = [
  {
    id: "asia-kim",
    name: "Asia Kim",
    place: "Haßfurt",
    cat: "asiatisch",
    pages: [
      { label: "Seite 1", url: BASE + "AsiaKimHassfurt.jpg" },
      { label: "Seite 2", url: BASE + "AsiaKimHassfurt2.jpg" }
    ]
  },
  {
    id: "avanti",
    name: "Avanti",
    place: "",
    cat: "pizza",
    pages: [
      { label: "Seite 1", url: BASE + "avanti1.png" },
      { label: "Seite 2", url: BASE + "avanti2.png" }
    ]
  },
  {
    id: "basanese",
    name: "Basanese",
    place: "",
    cat: "pizza",
    pages: [
      { label: "Seite 1", url: BASE + "Basanese1.jpg" },
      { label: "Seite 2", url: BASE + "Basanese2.jpg" }
    ]
  },
  {
    id: "doener-knetzgau",
    name: "Döner Knetzgau",
    place: "Knetzgau",
    cat: "doener",
    pages: [
      { label: "Seite 1", url: BASE + "DoenerKnetzgau1.jpg" },
      { label: "Seite 2", url: BASE + "DoenerKnetzgau2.jpeg" }
    ]
  },
  {
    id: "drei-linden",
    name: "Drei Linden",
    place: "",
    cat: "sonstiges",
    pages: [
      { label: "Seite 1", url: BASE + "DreiLinden1.jpg" },
      { label: "Seite 2", url: BASE + "DreiLinden2.jpg" }
    ]
  },
  {
    id: "edi-pizza",
    name: "Edi Pizza",
    place: "",
    cat: "pizza",
    pages: [
      { label: "Seite 1", url: BASE + "EdiPizza1.jpg" },
      { label: "Seite 2", url: BASE + "EdiPizza2.jpg" }
    ]
  },
  {
    id: "pizza-cesare",
    name: "Pizza Cesare",
    place: "",
    cat: "pizza",
    pages: [
      { label: "Seite 1", url: BASE + "cesare1.jpg" },
      { label: "Seite 2", url: BASE + "cesare2.jpg" }
    ]
  },
  {
    id: "mai-lan",
    name: "Mai Lan / Xin Chào",
    place: "",
    cat: "asiatisch",
    pages: [
      { label: "Seite 1", url: BASE + "mailan1.jpeg" },
      { label: "Seite 2", url: BASE + "mailan2.jpeg" }
    ]
  },
  {
    id: "pizzarella",
    name: "Pizzarella",
    place: "",
    cat: "pizza",
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
    pages: [
      { label: "Seite 1", url: BASE + "WestheimPizza1.jpg" },
      { label: "Seite 2", url: BASE + "WestheimPizza2.jpg" }
    ]
  },
  {
    id: "zeiler-chinese",
    name: "Zeiler Chinese",
    place: "Zeil am Main",
    cat: "asiatisch",
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
    pages: [
      { label: "Karte", url: "http://korfu-sylbach.com/speisekarte.pdf", type: "pdf" }
    ]
  },
  {
    id: "sennhuette-zeil",
    name: "Sennhütte Zeil",
    place: "Zeil am Main",
    cat: "griechisch",
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
    pages: [
      { label: "Karte", url: BASE + "tandoori_wonfurt.jpg" }
    ]
  },
  {
    id: "don-camillo",
    name: "Don Camillo",
    place: "",
    cat: "pizza",
    pages: [
      { label: "Seite 2", url: BASE + "Don%20Camillo2.jpg" }
    ]
  },
  {
    id: "la-fontana",
    name: "La Fontana",
    place: "",
    cat: "pizza",
    pages: [
      { label: "Seite 1", url: BASE + "LaFontana1.png" },
      { label: "Seite 2", url: BASE + "LaFontana2.png" }
    ]
  },
  {
    id: "kurdi",
    name: "Kürdi Grillhaus",
    place: "",
    cat: "doener",
    pages: [
      { label: "Seite 1", url: BASE + "kurdi1.jpeg" },
      { label: "Seite 2", url: BASE + "kurdi2.jpeg" }
    ]
  },
  {
    id: "kokono",
    name: "Kokono",
    place: "",
    cat: "asiatisch",
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
    id: "shishabar",
    name: "Shishabar Haßfurt",
    place: "Haßfurt",
    cat: "sonstiges",
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
    place: "",
    cat: "burger",
    pages: [
      { label: "Karte", url: BASE + "Substop.jpg" }
    ]
  },
  {
    id: "zeller-grieche",
    name: "Zeller Grieche",
    place: "Zell",
    cat: "griechisch",
    pages: [
      { label: "Seite 1", url: BASE + "Grieche%20Zell1.jpg" },
      { label: "Seite 2", url: BASE + "Grieche%20Zell2.jpg" }
    ]
  },
  {
    id: "stuermer",
    name: "Stürmer",
    place: "",
    cat: "sonstiges",
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
    pages: [
      { label: "Karte", url: BASE + "d%C3%B6ner%20sand.png" }
    ]
  },
  {
    id: "pizza-majk",
    name: "Pizza Majk",
    place: "",
    cat: "pizza",
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
    place: "",
    cat: "doener",
    pages: [
      { label: "Seite 1", url: BASE + "Aras1.jpg" },
      { label: "Seite 2", url: BASE + "Aras2.jpg" }
    ]
  }
];

const CATEGORIES = [
  { id: "alle",     label: "Alle" },
  { id: "pizza",    label: "🍕 Pizza" },
  { id: "doener",   label: "🥙 Döner & Grill" },
  { id: "asiatisch",label: "🍜 Asiatisch" },
  { id: "griechisch", label: "🥗 Griechisch" },
  { id: "burger",   label: "🍔 Burger & Fast Food" },
  { id: "sonstiges",label: "🍽️ Sonstiges" }
];
