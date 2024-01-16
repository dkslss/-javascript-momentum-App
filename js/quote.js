const quotes = [
    { quote: "겨울이 오면 봄이 멀지 않으리.", author: "퍼시 쉘리" },
    { quote: "우리는 우리가 반복적으로 하는 행위에 따라 판명되는 존재다. 그러므로 탁월함 이란 단 하나의 행동이 아니라 바로 습관이다.", author: "프리드리히 니체" },
    { quote: "실패는 중요하지 않다. 다시 시작하는 용기만 있다면.", author: "멀린 오슨 스위트" },
    { quote: "포기하는 것이 실패보다 더 나쁘다.", author: "윈스턴 처칠" },
    { quote: "목표는 도달할 수 없는 곳에 있어서가 아니라, 그것을 향해 보는 방향에 있다.", author: "오손 웰스" },
    { quote: "한 번의 실패와 영원한 실패를 혼동하지 마라.", author: "F. 스콧 핏제랄드" },
    { quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 둘 중 어느 것이든 당신이 옳다.", author: "헨리 포드" },
    { quote: "벌거벗은 사람에게 옷을 입히는 것만큼, 마음에 희망을 심어주는 것 이상의 선행은 없다.", author: "벤자민 프랭클린" },
    { quote: "우리는 두려움 때문에 많은 것을 잃지만, 희망 때문에 아무것도 잃지 않는다.", author: "다리우스 포시즈" },
    { quote: "모든 성공의 비밀은 목표에 대한 끈질긴 집중력에 있다.", author: "앤드류 카네기" }
  ];

  const quotesENG = [
    { quote: "Winter's arrival suggests spring is not far behind.", author: "Percy Shelley" },
    { quote: "We are what we rpeatedly do. Excellence, then, is not an act but a habit.", author: "Aristoteles" },
    { quote: "Failure is not important. Having the courage to start again does.", author: "Merlyn Osborn Sweet" },
    { quote: "Giving up is worse than failing.", author: "Winston Churchill" },
    { quote: "The aim is not to reach a goal, but to have a direction.", author: "Orson Welles" },
    { quote: "Never confuse a single failure with a final one.", author: "F. Scott Fitzgerald" },
    { quote: "Whether you believe you can or can't, you're right.", author: "Henry Ford" },
    { quote: "There is no greater act of kindness than giving hope to the hopeless.", author: "Benjamin Franklin" },
    { quote: "We lose much because of fear, but nothing because of hope.", author: "Darius Foris" },
    { quote: "The secret of all success is the concentration of a goal.", author: "Andrew Carnegie" }
  ];

  const transitQuote = quotes;
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = transitQuote[Math.floor(Math.random() * transitQuote.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
  