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