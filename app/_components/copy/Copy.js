import styles from './Copy.module.css'
import { Source_Sans_3 } from "next/font/google";

const sans = Source_Sans_3({ subsets: ["latin"] });

const Copy = () => {
  return (
    <div className={`my-32 ${styles.copy} py-24`}>
    <p className="text-center text-4xl m-0">Copy</p>
    <p className={`mx-6 text-justify text-xl text-gray-500 font-light ${sans.className}`}>
      Hai davvero intenzione di affidarti al caso?

      La tua attività, il tuo sudore, le tue notti insonni... meritano davvero un approccio così incerto?

      Il mondo del marketing è cambiato.

      Non si tratta più di lanciare un messaggio nel vento e sperare che qualcuno lo raccolga.

      Ora si tratta di precisione, di colpire il bersaglio giusto, al momento giusto.

      È un gioco di scacchi, non un tiro a segno nel buio.

      Noi di SMMA International abbiamo maturato una vasta esperienza, servendo centinaia di clienti in svariati settori.

      Dai parruccheri, centri estetici, B&B, Palestre, centri dimagrimento, alle assicurazioni e ristoranti.

      Abbiamo visto e affrontato ogni sfida possibile, e siamo pronti a portare tutta questa esperienza al tuo servizio.

      Ma perché dovresti scegliere noi?

      Il nostro Framework SMMA non è solo un metodo.

      È una promessa.

      Una promessa di trasformazione, una promessa di scalabilità.

      Una promessa che la tua attività non rimarrà più ferma, ma troverà un nuovo slancio, un nuovo ritmo.

      Perché sappiamo che non stai cercando solo di sopravvivere nel mercato.

      Stai cercando di prosperare, di crescere, di scalare.

      E noi siamo qui per garantirti che questo accadrà.

      Nel mondo del marketing, nulla è garantito.

      Ma noi non ci limitiamo a sperare in un ritorno sull'investimento.

      Noi lo garantiamo.

      Non ci limitiamo a sognare risultati.

      Noi li consegniamo.

      Non ti chiediamo di fidarti di noi sulla parola.

      Ti chiediamo di guardare i fatti.

      Di guardare i risultati che abbiamo ottenuto per i nostri clienti.

      Di guardare l'esperienza e l'abilità che mettiamo al tuo servizio.

      Il nostro obiettivo non è solo farti ottenere più clienti.

      È fare in modo che la tua attività diventi una potenza inarrestabile.

      Perché quando tu vinci, noi vinciamo.

      Quindi, sei pronto per il prossimo livello?

      Sei pronto a lasciare alle spalle gli approcci antiquati e ad abbracciare il futuro del marketing?

      Scopri come il nostro Framework SMMA può dare una svolta alla tua attività.

      Non accontentarti di meno. Richiedi di più.
    </p>
  </div>
  )
}

export default Copy