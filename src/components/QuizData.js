const QuizData = [
    {
      id: 0,
      question: `Cairo is the capital of which country?`,
      options: [`Georgia`, `Haiti`, `Egypt`],
      answer: `Egypt`
    },
    {
      id: 1,
      question: `Which of the following is capital of Georgia?`,
      options: [`Tbilisi`, `Riga`, `Tehran`],
      answer: `Tbilisi`
    },
    {
      id: 3,
      question: `Tehran is the capital of which country?`,
      options: [`Iraq`, `Iran`, `Kenya`],
      answer: `Iran`
    },
    {
      id: 4,
      question: `Which is the capital of Tajikistan?`,
      options: [`Damascus`, `Moscow`, `Dushanbe`],
      answer: `Dushanbe`
    },
    {
      id: 5,
      question: `The capital of New Zealand is`,
      options: [`Auckland`, `Wellington`, `Christchurch`],
      answer: `Wellington`
    },
    {
      id: 6,
      question: `Dinar is the currency of which of the following countries?`,
      options: [`Bahrain`, `Georgia`, `Brazil`],
      answer: `Bahrain`
    },
    {
      id: 7,
      question: `Kabul is the capital of which country?`,
      options: [`Azerbaijan`, `Ukraine`, `Afganistan`],
      answer: `Afganistan`
    },
    {
      id: 8,
      question: `Kampala the capital of?`,
      options: [`Egypt`, `Uganda`, `Libya`],
      answer: `Uganda`
    },
    {
      id: 9,
      question: `What is the national currency of Israel?`,
      options: [`Israeli new shekel`, `Israeli new guilder`, `Israeli new dinar`],
      answer: `Israeli new shekel`
    },
    {
      id: 10,
      question: `In the memory of which personality, Prime Minister Narendra Modi on 4th Sep’15 released two commemorative coins of Rs 125 and Rs 10?
      `,
      options: [`Pt. Jawahar Lal Nehru`, `Dr. APJ Abdul Kalam`, `Dr. Sarvepalli Radhakrishnan`],
      answer: `Dr. Sarvepalli Radhakrishnan`
    },
    {
      id: 11,
      question: `Maputo the capital of?`,
      options: [`Guinea Bissau`, `Mozambique`, `Portugal`],
      answer: `Mozambique`
    },
    {
      id: 12,
      question: `Canberra is the capital of which country?`,
      options: [`Australia`, `Angola`, `Austria`],
      answer: `Australia`
    },
    {
      id: 13,
      question: `Port-au-Prince is the capital of which country?`,
      options: [`Hungary`, `Haiti`, `Eritrea`],
      answer: `Haiti`
    },
    {
      id: 14,
      question: `Helsinki is the capital of which country?`,
      options: [`France`, `Georgia`, `Finland`],
      answer: `Finland`
    },
    {
      id: 15,
      question: `Tallinn is the capital of which country?`,
      options: [`Lithuania`, `Estonia`, `Chech Republic`],
      answer: `Estonia`
    },
    {
      id: 16,
      question: `Ulaanbaatar is the capital of which country?`,
      options: [`Russia`, `Mongolia`, `China`],
      answer: `Mongolia`
    },
    {
      id: 17,
      question: `Male is the capital of which country?`,
      options: [`Maldives`, `Moldova`, `Mauritius`],
      answer: `Maldives`
    },
    {
      id: 18,
      question: `Which is the capital of Thailand?`,
      options: [`Bangkok`, `Berne`, `Jakarta`],
      answer: `Bangkok`
    },
    {
      id: 19,
      question: `The currency of Japan is`,
      options: [`Yuan`, `Yen`, `Ringgit`],
      answer: `Yen`
    },
    {
      id: 20,
      question: `Hanoi is the capital city of which of the following country ?`,
      options: [`Vietnam`, `Yemen`, `Zimbabwe`],
      answer: `Vietnam`
    },
    {
      id: 21,
      question: `Which of the following is currency of UAE(United Kingdom of Emirates) ?`,
      options: [`Dollar`, `Dinar`, `Dirham`],
      answer: `Dirham`
    },
    {
      id: 22,
      question: `Which of the following is  capital city of Uzbekistan ?`,
      options: [`Tashkent`, `Dushanbe`, `Sana`],
      answer: `Tashkent`
    },
    {
      id: 23,
      question: `Thailand currency is ………………………`,
      options: [`Peso`, `Baht`, `Rupee`],
      answer: `Baht`
    },
    {
      id: 24,
      question: `……………….. is the currency of Syria`,
      options: [`Pound`, `Lira`, `Peso`],
      answer: `Pound`
    },
    {
      id: 25,
      question: ` Astana is the capital city of`,
      options: [`Kyrgyzstan`, `Korea`, `Kazakhstan`],
      answer: `Kazakhstan`
    },
    {
      id: 26,
      question: `Which country has more than one official capital?`,
      options: [`Switzerland`, `South Africa`, `Egypt`],
      answer: `South Africa`
    },
    {
      id: 27,
      question: `Currency of Ireland?`,
      options: [`Euro`, `Kiev`, `Dublin`],
      answer: `Euro`
    },
    {
      id: 28,
      question: `What is the Capital of Argentina?`,
      options: [`Manama`, `Buenos Aires`, `Washington D.C`],
      answer: `Buenos Aires`
    },
    {
      id: 29,
      question: `The capital of Malaysia is?`,
      options: [`Port Louis`, `Jakarta`, `Kuala Lumpur`],
      answer: `Kuala Lumpur`
    },
    {
      id: 30,
      question: `Which of the following countries have their capitals with the same name?`,
      options: [`Mexico`, `Singapore`, `All of the Above`],
      answer: `All of the Above`
    },
    {
      id: 31,
      question: `The capital of Peru?`,
      options: [`Leema`, `Bruno Aires`, `Albania`],
      answer: `Leema`
    },
    {
      id: 32,
      question: `The national currency of India is ______.`,
      options: [`Rupee`, `Yuan`, `Rupiah`],
      answer: `Rupee`
    },
    {
      id: 33,
      question: `Dhaka is capital of which of the following country ?`,
      options: [`Nepal`, `Bhutan`, `Bangladesh`],
      answer: `Bangladesh`
    },
    {
      id: 34,
      question: `Which of the following is currency of Bhutan ?`,
      options: [`Pula`, `Ngultrum`, `Rupee`],
      answer: `Ngultrum`
    },
    {
      id: 35,
      question: `Phnom Penh is the capital of which of the following country ?`,
      options: [`Cambodia`, `Denmark`, `Canada`],
      answer: `Cambodia`
    },
    {
      id: 36,
      question: `Indonesia’s currency is ………………`,
      options: [`Rial`, `Rupee`, `Dollar`],
      answer: `Rupee`
    },
    {
      id: 37,
      question: `Capital city of Israel is ………………`,
      options: [`Jerusalem`, `Baghdad`, `Tehran`],
      answer: `Jerusalem`
    },
    {
      id: 38,
      question: ` Where is the official home of Santa Claus?`,
      options: [`Canada`, `Finland`, `USA`],
      answer: `Finland`
    },
    {
      id: 39,
      question: `Which is the smallest country in the world?`,
      options: [`Vatican City`, `Vanuatu`, `Luxembourg`],
      answer: `Vatican City`
    },
    {
      id: 40,
      question: `Which of the following country has given first time voting rights to women?`,
      options: [`France`, `India`, `New Zealand`],
      answer: `New Zealand`
    },
    {
      id: 41,
      question: `Which of the following country is the most populous country?`,
      options: [`China`, `United States of America`, `India`],
      answer: `China`
    },
    {
      id: 42,
      question: `Which country has highest sex ratio in world?`,
      options: [`Estonia`, `North Mariana Islands`, `Ukraine`],
      answer: `Estonia`
    },
    {
      id: 43,
      question: `What is the Capital of Albania ?`,
      options: [`Abuja`, `Tirane`, `Melekeok`],
      answer: `Tirane`
    },
    {
      id: 44,
      question: `	Southern coasts of the continents Asia are banded by:`,
      options: [`Bay of Bangal`, `Arabian Sea`, `All of them`],
      answer: `All of them`
    },
    {
      id: 45,
      question: `Which one is called 'Cap of Good Hope'?`,
      options: [`India's tip`, `Africa's tip`, `Australia`],
      answer: `Africa's tip`
    },
    {
      id: 46,
      question: `Which continent has no desert?`,
      options: [`North America`, `South America`, `Europe`],
      answer: `Europe`
    },
    {
      id: 47,
      question: `Largest river of the world is:`,
      options: [`Nile`, `	Mississippi`, `Brahmaputra`],
      answer: `Nile`
    },
    {
      id: 48,
      question: `Which continent has no desert?`,
      options: [`North America`, `South America`, `Europe`],
      answer: `Europe`
    },
    {
      id: 49,
      question: `What is the capital of Serbia?`,
      options: [`Belgrade`, `Serbia`, `Serbistan`],
      answer: `Belgrade`
    },
    {
      id: 50,
      question: `What is the capital of Zimbabwe?`,
      options: [`Mugabe`, `Harare`, `Zimba`],
      answer: `Harare`
    },
    {
      id: 51,
      question: `What is the capital of Uruguay?`,
      options: [`St. Uruguay`, `Monteprince`, `Montevideo`],
      answer: `Montevideo`
    },
    {
      id: 52,
      question: `What is the capital of Mauritius?`,
      options: [`Port Louis`, `Port Elisabeth`, `Port Mary`],
      answer: `Port Louis`
    },
    {
      id: 53,
      question: `What is the capital of Philippines?`,
      options: [`Phong`, `Taipei`, `Manila`],
      answer: `Manila`
    },
    {
      id: 54,
      question: `What is the capital of Qatar?`,
      options: [`Riyadh`, `Doha`, `Qatar City`],
      answer: `Doha`
    },
    {
      id: 55,
      question: `What is the capital city of Bahamas?`,
      options: [`Nassau`, `Gao`, `Belmopan`],
      answer: `Nassau`
    },
    {
      id: 56,
      question: `The great Victoria Desert is located in`,
      options: [`North America`, `Australia`, `Europe`],
      answer: `	Australia`
    },
    {
      id: 57,
      question: `Bushmen are the native people from which of the following continents?`,
      options: [`North America`, `Australia`, `Africa`],
      answer: `Africa`
    },
    {
      id: 58,
      question: `What does the developer call Mansayy?`,
      options: [`Bae`, `Meri Jaan`, `Babu`],
      answer: `Meri Jaan`
    },
    {
      id: 59,
      question: `Developer's favourite person?`,
      options: [`Mansi`, `Mansayy`, `Obv Both BC`],
      answer: `Obv Both BC`
    }
  ];

  function shuffle(arra1) {
    let ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
let newArray = shuffle(QuizData);
let usefulArray = newArray.slice(0,6);
export default usefulArray;