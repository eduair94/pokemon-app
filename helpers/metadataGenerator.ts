export const metadataGenerator = (title: string) => {
  return {
    title,
    description: `Información sobre el pokemon ${title}`,
    keywords: [title, 'pokemon', 'pokedex']
  }
}
