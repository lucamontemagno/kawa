# Kawa — sito statico

Il sito usa Eleventy per generare pagine HTML statiche. Menu e footer sono condivisi nei template; il contenuto delle singole pagine si trova in `src/`.

## Requisiti

- Node.js 18 o superiore
- npm

## Sviluppo e build

```sh
npm install
npm run start
```

Il sito è disponibile all'indirizzo locale mostrato da Eleventy. Per generare i file da pubblicare:

```sh
npm run build
```

Pubblica il contenuto della cartella `_site/` su un hosting statico. Per rigenerare il sito dopo una modifica, esegui di nuovo la build.

## Pagine e risorse

- `src/index.njk`: home
- `src/kawa.md`: presentazione della band
- `src/shows.njk`: date live
- `src/discover.njk`: video
- `src/audio.njk`: ascolto e download dei brani MP3 in `audio/`
- `src/contatti.njk`: contatti
- `src/_includes/menu.njk` e `src/_includes/footer.njk`: elementi condivisi
- `css/`, `img/`, `videos/`: fogli di stile e risorse statiche

La pagina Contatti è pronta per essere completata con i recapiti ufficiali. L'output statico non esegue script PHP né invia moduli lato server.
