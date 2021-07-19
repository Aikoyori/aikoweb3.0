function dotheredirect(relativeLinkTo) {
  hostnameshit = window.location.origin
  window.location = hostnameshit + relativeLinkTo
}

function mapeverything() {
  const $elems = document.querySelectorAll('a')
  var elems = Array.from($elems)
  elems.map(a => {
    a.onclick = (e) => {
      e.preventDefault()
      console.log("REDIRECT SUCCESS?")

      dotheredirect(a.getAttribute("href"))
    }
  })
}