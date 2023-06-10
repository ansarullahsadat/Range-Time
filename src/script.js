"use strict"

const times = document.querySelector(".times")
const fro = document.querySelector("#from")
const fro2 = document.querySelector("#from-2")
const to = document.querySelector("#to")
const to2 = document.querySelector("#to-2")
const form = document.querySelector(".form")
const form2 = document.querySelector(".form-2")
// const select = document.querySelector('#select')
const selectTime = document.querySelectorAll(".select-time")

const content = document.querySelectorAll(".content")
const load = document.querySelector(".load")
const change = document.querySelector(".change")
const close = document.querySelector(".close")
const mainContent = document.querySelector(".main-content")
const range = document.querySelector(".range")

const now = new Date()
const hours = now.getHours()
const min = now.getMinutes()

const view = document.querySelector(".view")

fro.value = hours
fro2.value = min

const changeTime = function (e) {
  // e.preventDefault()

  selectTime.forEach((t) => {
    t.classList.toggle("hidden")
  })

  content.forEach((c) => {
    c.classList.toggle("hidden")
  })
}

select.addEventListener("click", changeTime)
change.addEventListener("click", (e) => {
  e.preventDefault()
  changeTime()
})

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (!to.value) {
    alert("Fill The Form 😊")
  } else {
    const html = ` <p class="py-2 px-3 rounded-3xl hover:bg-[#1c1a31] transition-all  text-sm cursor-pointer">Last ${
      fro.value - to.value
    } hours</p>`

    times.insertAdjacentHTML("beforeend", html)

    to.value = ""
  }
})

form2.addEventListener("submit", (e) => {
  e.preventDefault()

  if (!to2.value) {
    alert("Fill The Form 😊")
  } else {
    const html2 = ` <p class="py-2 px-3 rounded-3xl hover:bg-[#1c1a31] transition-all  text-sm cursor-pointer">Last ${
      fro2.value - to2.value
    } minutes</p>`

    times.insertAdjacentHTML("beforeend", html2)

    to2.value = ""
  }
})

load.addEventListener("click", (e) => {
  e.preventDefault()

  times.classList.remove("overflow-hidden")
  times.classList.add("overflow-auto")
})

close.addEventListener("click", (e) => {
  mainContent.classList.add("translate-x-[-200%]", "opacity-0")
  range.classList.remove("translate-x-[200%]", "opacity-0", "-z-10")
  range.classList.add("-translate-x-1/2", "left-1/2")
})

range.addEventListener("click", (e) => {
  mainContent.classList.remove("translate-x-[-200%]", "opacity-0")
  range.classList.add("translate-x-[200%]", "opacity-0", "-z-10")
  range.classList.remove("-translate-x-1/2", "left-1/2")
})
