import { show, showError } from "./renderUserAndError"

//? Named export
export const getUsers = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Hata: ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      show(data)
    })
    .catch((err) => showError(err))
}
