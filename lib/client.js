import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'p9p1v133',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  token: "skB871vfi6QGYZEIAfBttykk96vAaI1TTLEE2N9F9TndkNKED9VGN4shHUmUsEu6IZp1NB9sOAKUFfc9FGh8FgHldr9iuphz1s7D6md8SOo8ZIfjaTfL270qJXTzTNZwgobAVk0RA82jRci3fxnPgKfOzyg3IGxaAfQs1hXCCsUV6MTyJCE6" // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source)