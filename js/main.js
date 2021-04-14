const hamburgerButtonElement = document.querySelector("#hamburgerButton")
const menuElement = document.querySelector(".menu")
const rightAppMain = document.querySelector(".right_app")
const shadowELement = document.querySelector(".shadow")

const settingsElement = document.querySelector("#settings")
const settingsModalElement = document.querySelector(".settings__modal")
const closeSettings = document.querySelector("#closeSettings")
const threedotList = document.querySelector(".threedot__list")
const threeDot = document.querySelector("#threedot")

const searchFormElement = document.querySelector(".search__form")
const searchInputElement = document.querySelector(".search__input")
const searchListElement = document.querySelector(".account__list")
const searchNameElement = searchListElement.querySelectorAll(".account__name")

const profileName = document.querySelector(".profile__name")
const profileTime = document.querySelector(".profile__slog")
const rightAppHeader = document.querySelector(".right_app__header")
const profileModal = document.querySelector(".profile__modal")
const chatModal = document.querySelector(".chat__modal")
const userBtn = document.querySelector(".user__btn")
const leftArrowButton = document.querySelector(".left-arrow_button")

let infoNameImg = document.querySelector(".info__name__img")
let infoNameText = document.querySelector(".info__name__text")
let infoNameTime = document.querySelector(".info__name__time")
let mobileNum = document.querySelector(".mobile__num")
let infoName = document.querySelector(".info__name")
let accountSlog = document.querySelector(".account__slog")

let emojiList = document.querySelector(".emoji-list")
let emojiButton = document.querySelector(".emoji__button")
let usersListElement = document.querySelector(".account__list")
let messagesListElement = document.querySelector(".message__list")
let messageTextForm = document.querySelector(".message__form")
let messagesTextInput = document.querySelector(".message__textarea")

let emojies = ["😀", "😃", "😋", "😅", "😏", "😀", "😃", "😄", "😁", "😆", "😄", "😅", "😂", "😏", "😞", "😅", "😚", "🙊", "😌", "😀", "😋", "😆", "😐", "😕", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤚", "🖐", "✋"]

let inputValue = ""
let currentChat = 1

leftArrowButton.addEventListener("click", () => {
   rightAppMain.classList.add("chat-hidden")
   shadowELement.classList.add("shadowHidden")
})

shadowELement.addEventListener("click", (evt) => {
   menuElement.classList.add("hidden")
   shadowELement.classList.toggle("shadowHidden")
   settingsModalElement.classList.add("settingsHidden")
   menuElement.style.transform = "translateX(-100%)"
   chatModal.classList.add('chatHidden')
})

hamburgerButtonElement.addEventListener("click", evt => {
   menuElement.classList.remove("hidden")
   shadowELement.classList.remove("shadowHidden")
   menuElement.style.transform = "translateX(0)"
})

settingsElement.addEventListener("click", evt => {
   settingsModalElement.classList.remove("settingsHidden")
   menuElement.classList.add("hidden")
   menuElement.style.transform = "translateX(-100%)"
})

closeSettings.addEventListener("click", evt => {
   settingsModalElement.classList.add("settingsHidden")
   shadowELement.classList.toggle("shadowHidden")
})

threeDot.addEventListener("click", event => {
   threedotList.classList.toggle("threedotHidden")
})

searchInputElement.addEventListener("click", event => {
   event.target.classList.add("border-input")
})

const DATA = [
   {
      id: 1, name: "John", photo: "./images/account__image1.jpg", date: moment(Date.now()).format('dddd'), number: "+998 00 000 00 00", message: [{
         body: "Salom qalaysan?", isMine: true
      },
      {
         body: "Rahmat", isMine: false
      }]
   },
   {
      id: 2, name: "ADAM", photo: "./images/account__image2.jpg", date: moment(Date.now()).startOf('day').fromNow(), number: "+998 11 111 11 11", message: [{
         body: "Salom?", isMine: true
      },
      {
         body: "Salom...", isMine: false
      }]
   },
   {
      id: 3, name: "Dwane", photo: "./images/account__image4.jpg", date: moment(Date.now()).endOf('day').fromNow(), number: "+998 22 222 22 22", message: [{
         body: "Assalomu alaykum", isMine: true
      },
      {
         body: "Qalaysan?", isMine: false
      }]
   },
   {
      id: 4, name: "Bill", photo: ".//images/picsum-rand3.jpg", date: moment(Date.now()).startOf('hour').fromNow(), number: "+998 33 333 33 33", message: [{
         body: "Will you come to the party?", isMine: true
      },
      {
         body: "I don't know...", isMine: false
      }]
   },
   {
      id: 5, name: "Johnson", photo: ".//images/picsum-rand2.jpg", date: moment(Date.now()).calendar(), number: "+998 44 444 44 44", message: [{
         body: "How do you do?", isMine: true
      },
      {
         body: "Well, and you?", isMine: false
      }]
   },
   {
      id: 6, name: "Adam", photo: ".//images/picsum-rand1.jpg", date: moment(Date.now()).format('LT'), number: "+998 55 555 55 55", message: [{
         body: "Where would you visit tomorrow?", isMine: true
      },
      {
         body: "Tashkent", isMine: false
      }]
   },
   {
      id: 7, name: "Ronk", photo: ".//images/picsum-rand4.jpg", date: moment(Date.now()).startOf('day').fromNow(), number: "+998 66 666 66 66", message: [{
         body: "Are you okay?", isMine: true
      },
      {
         body: "I'm fine, how is it going, Baxtiyor", isMine: false
      }]
   },
   {
      id: 8, name: "King", photo: ".//images/picsum-rand5.jpg", date: moment(Date.now()).format("MMM Do YY"), number: "+998 77 777 77 77", message: [{
         body: "Align - items ni flex-end qilasiz", isMine: true
      },
      {
         body: "rahmat", isMine: false
      }]
   },
   {
      id: 9, name: "Johny", photo: ".//images/picsum-rand6.jpg", date: moment(Date.now()).format('dddd'), number: "+998 88 888 88 88", message: [{
         body: "Assalomu alaykum", isMine: true
      },
      {
         body: "Va aleykum assalom", isMine: false
      }]
   },
   {
      id: 10, name: "Barbara", photo: ".//images/picsum-rand7.jpg", date: moment(Date.now()).startOf('hour').fromNow(), number: "+998 99 999 99 99", message: [{
         body: "Еще точно не знаю", isMine: true
      },
      {
         body: "Хорошо,тогда  вы сообщите об этом.", isMine: false
      }]
   }
]