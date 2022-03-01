export function getActiveToken (input, cursorPosition) {
  // recuperamos la posición actual del cursor
  if (cursorPosition === undefined) return undefined
  // creamos un array temporal para guardar las palabras
  const words = []
  // recorremos el texto y lo separamos por espacios y saltos de línea
  input.split(/[\s\n]/).forEach((word, index) => {
    // recuperamos la palabra anterior
    const previous = words[index - 1]
    // calculamos el rango de la palabra
    // recuperamos el índice inicial de la palabra
    const start = index === 0 ? index : previous.range[1] + 1
    // recuperamos donde termina la palabra
    const end = start + word.length
    // guardamos la palabra y su rango en el texto
    words.push({ word, range: [start, end] })
  })

  // buscamos en qué palabra estamos dependiendo de la posición del cursor
  return words.find(
    ({ range }) => range[0] <= cursorPosition && range[1] >= cursorPosition
  )
}

// "Hola @midudev"
// getActiveToken("Hola @midudev, cómo está @I", 27)
// { word: '@I', range: [ 25, 27 ] }
