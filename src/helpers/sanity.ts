import { useSanityClient, createImageBuilder, portableTextToHtml } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source: string) {
  return imageBuilder.image(source);
}

const customComponents = {
  /* your custom components here */
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}
