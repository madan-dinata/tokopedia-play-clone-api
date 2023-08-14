export const UserEntity = (id, username, urlImage) => ({
  id,
  username,
  urlImage,
})

export const createUser = (id, username, password, urlImage) => ({
  id,
  username,
  password,
  urlImage,
})
