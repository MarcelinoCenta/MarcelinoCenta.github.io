var quotes = [
    "'Our Greatest Glory is not in never falling, but in rising every time we fall.' -Confucius",
    "'Those who do not remember the past are condemned to repeat it.' -George Santayana",
    "'History is not a burden on the memory but an illumination of the soul.' -John Dalberg Acton",
    "'People are trapped in history and history is trapped in them.' -James Baldwin",
    "'We are not makers of history. We are made by history.' -Martin Luther King, Jr.",
    "'History is a vast early warning system.' -Norman Cousins",
    "'History is a cylic poem written by time upon the memories of man.' -Percy Bysshe",
    "'On the day when man told the story of his life to man, history was born.' -Alfred de Vigny"
]

document.getElementById('quoteDisplay').innerHTML = quotes[Math.floor(Math.random()* (quotes.length))];