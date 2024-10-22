export default function Loading() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(<h1>Loading</h1>)
    })
  })
}
