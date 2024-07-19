import Image from "next/image";
import { ContentWrapper } from "$/components/content-wrapper";

import { PageLayout } from "$/components/page-layout";
import { Address } from "$/components/address";
import { ReactNode } from "react";

export default function SuperVision() {
  return (
    <PageLayout>
      <ContentWrapper>
        <div className="space-y-8">
          <section className="space-y-2">
            <h3 className="font-bold text-3xl">
              1. Datenschutz auf einen Blick
            </h3>
            <Title>Allgemeine Hinweise</Title>

            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <Title>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </Title>

            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Hinweis zur Verantwortlichen Stelle“ in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <Title>Wie erfassen wir Ihre Daten?</Title>

            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
              <Break /> Andere Daten werden automatisch oder nach Ihrer
              Einwilligung beim Besuch der Website durch unsere IT-Systeme
              erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
              Website betreten.
            </p>

            <Title>Wofür nutzen wir Ihre Daten?</Title>

            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <Title>Welche Rechte haben Sie bezüglich Ihrer Daten?</Title>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. <Break /> Hierzu sowie zu weiteren Fragen zum
              Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-3xl">2. Hosting</h3>
            <p>
              Wir hosten die Inhalte unserer Website beifolgendem Anbieter:
              Vercel
            </p>
            <Title>Externes Hosting</Title>

            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
              IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
              Daten, die über eine Website generiert werden, handeln. <Break />{" "}
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
              gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs.
              1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
              Speicherung von Cookies oder den Zugriff auf Informationen im
              Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
              TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.{" "}
              <Break /> Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
              verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
              erforderlich ist und unsere Weisungen in Bezug auf diese Daten
              befolgen. <Break /> Vercel.com
            </p>

            <Title>Auftragsverarbeitung</Title>

            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur
              Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
              es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
              der gewährleistet, dass dieser die personenbezogenen Daten unserer
              Websitebesucher nur nach unseren Weisungen und unter Einhaltung
              der DSGVO verarbeitet.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-3xl">
              3. Allgemeine Hinweise und Pflicht¬informationen
            </h3>
            <Title>Datenschutz</Title>

            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              <Break />
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
              <Break />
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.
              B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>

            <Title>Hinweis zur verantwortlichen Stelle</Title>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>

            <p>
              Isabella Heilig <br />
              Hahnenstr. 33
              <br />
              75179 Pforzheim
            </p>

            <p>
              Telefon: 0173 9968129 <br /> E-Mail: beratung.heilig@cloudmail.de
            </p>

            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <Title>Speicherdauer</Title>

            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
              oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
              Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <Title>
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
              auf dieser Website
            </Title>

            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben,
              verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
              besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
              werden. Im Falle einer ausdrücklichen Einwilligung in die
              Übertragung personenbezogener Daten in Drittstaaten erfolgt die
              Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
              DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
              Zugriff auf Informationen in Ihr Endgerät (z. B. via
              Device-Fingerprinting) eingewilligt haben, erfolgt die
              Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG.
              Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
              Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6
              Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten,
              sofern diese zur Erfüllung einer rechtlichen Verpflichtung
              erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
              Die Datenverarbeitung kann ferner auf Grundlage unseres
              berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
              Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird
              in den folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <Title>
              WHinweis zur Datenweitergabe in datenschutzrechtlich nicht sichere
              Drittstaaten sowie die Weitergabe an US-Unternehmen, die nicht
              DPF-zertifiziert sind
            </Title>
            <p>
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in
              datenschutzrechtlich nicht sicheren Drittstaaten sowie US-Tools,
              deren Anbieter nicht nach dem EU-US-Data Privacy Framework (DPF)
              zertifiziert sind. Wenn diese Tools aktiv sind, können Ihre
              personenbezogene Daten in diese Staaten übertragen und dort
              verarbeitet werden. Wir weisen darauf hin, dass in
              datenschutzrechtlich unsicheren Drittstaaten kein mit der EU
              vergleichbares Datenschutzniveau garantiert werden kann.
              <Break /> Wir weisen darauf hin, dass die USA als sicherer
              Drittstaat grundsätzlich ein mit der EU vergleichbares
              Datenschutzniveau aufweisen. Eine Datenübertragung in die USA ist
              danach zulässig, wenn der Empfänger eine Zertifizierung unter dem
              „EU-US Data Privacy Framework“ (DPF) besitzt oder über geeignete
              zusätzliche Garantien verfügt. Informationen zu Übermittlungen an
              Drittstaaten einschließlich der Datenempfänger finden Sie in
              dieser Datenschutzerklärung.
            </p>
            <Title>Empfänger von personenbezogenen Daten</Title>
            <p>
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
              verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
              eine Übermittlung von personenbezogenen Daten an diese externen
              Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
              externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
              verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden),
              wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f
              DSGVO an der Weitergabe haben oder wenn eine sonstige
              Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
              Auftragsverarbeitern geben wir personenbezogene Daten unserer
              Kunden nur auf Grundlage eines gültigen Vertrags über
              Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
              Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung
              geschlossen.
            </p>

            <Title>Widerruf Ihrer Einwilligung zur Datenverarbeitung</Title>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <Title>
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
              sowie gegen Direktwerbung (Art. 21 DSGVO)
            </Title>

            <p>
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
              ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN,
              DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
              VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN;
              DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
              PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
              VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
              WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
              PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
              KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN
              ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
              VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1
              DSGVO). WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
              DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
              WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
              PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN;
              DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER
              DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN
              IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE
              DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2
              DSGVO).
            </p>

            <Title>
              Beschwerde¬recht bei der zuständigen Aufsichts¬behörde
            </Title>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <Title>Recht auf Daten¬übertrag¬barkeit</Title>

            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <Title>Auskunft, Berichtigung und Löschung</Title>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit an uns wenden.
            </p>

            <Title>Recht auf Einschränkung der Verarbeitung</Title>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen:
            </p>

            <ul>
              <li>
                • Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, benötigen wir in der Regel
                Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                • Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                • Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung
                von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                • Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abwägung zwischen Ihren und unseren Interessen
                vorgenommen werden. Solange noch nicht feststeht, wessen
                Interessen überwiegen, haben Sie das Recht, die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>

            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
              abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person oder
              aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>

            <Title>SSL- bzw. TLS-Verschlüsselung</Title>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
              <Break /> Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
              können die Daten, die Sie an uns übermitteln, nicht von Dritten
              mitgelesen werden.
            </p>
            <Title>Widerspruch gegen Werbe-E-Mails</Title>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-3xl">
              4. Datenerfassung auf dieser Website
            </h3>
            <Title>Cookies</Title>

            <p>
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies
              sind kleine Datenpakete und richten auf Ihrem Endgerät keinen
              Schaden an. Sie werden entweder vorübergehend für die Dauer einer
              Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
              Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres
              Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
              Endgerät gespeichert, bis Sie diese selbst löschen oder eine
              automatische Löschung durch Ihren Webbrowser erfolgt.
              <Break />
              ookies können von uns (First-Party-Cookies) oder von
              Drittunternehmen stammen (sog. Third-Party-Cookies).
              Third-Party-Cookies ermöglichen die Einbindung bestimmter
              Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.
              B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
              <Break />
              ookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
              nicht funktionieren würden (z. B. die Warenkorbfunktion oder die
              Anzeige von Videos). Andere Cookies können zur Auswertung des
              Nutzerverhaltens oder zu Werbezwecken verwendet werden.
              <Break />
              ookies, die zur Durchführung des elektronischen
              Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
              erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
              Optimierung der Website (z. B. Cookies zur Messung des
              Webpublikums) erforderlich sind (notwendige Cookies), werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine
              andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat
              ein berechtigtes Interesse an der Speicherung von notwendigen
              Cookies zur technisch fehlerfreien und optimierten Bereitstellung
              seiner Dienste. Sofern eine Einwilligung zur Speicherung von
              Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
              wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
              dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TTDSG); die Einwilligung ist jederzeit widerrufbar.
              <Break />
              ie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
              <Break />
              elche Cookies und Dienste auf dieser Website eingesetzt werden,
              können Sie dieser Datenschutzerklärung entnehmen.
            </p>

            <Title>Anfrage per E-Mail und Telefon</Title>

            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
              <Break /> Die Verarbeitung dieser Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
              eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
              Fällen beruht die Verarbeitung auf unserem berechtigten Interesse
              an der effektiven Bearbeitung der an uns gerichteten Anfragen
              (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die
              Einwilligung ist jederzeit widerrufbar.
              <Break /> Die von Ihnen an uns per Kontaktanfragen übersandten
              Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
              die Datenspeicherung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <Title>Kommunikation via WhatsApp</Title>

            <p>
              Für die Kommunikation mit unseren Kunden und sonstigen Dritten
              nutzen wir unter anderem den Instant-Messaging-Dienst WhatsApp.
              Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square,
              Grand Canal Harbour, Dublin 2, Irland.
              <Break /> Die Kommunikation erfolgt über eine
              Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass
              WhatsApp oder sonstige Dritte Zugriff auf die
              Kommunikationsinhalte erlangen können. WhatsApp erhält jedoch
              Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs
              entstehen (z. B. Absender, Empfänger und Zeitpunkt). Wir weisen
              ferner darauf hin, dass WhatsApp nach eigener Aussage,
              personenbezogene Daten seiner Nutzer mit seiner in den USA
              ansässigen Konzernmutter Meta teilt. Weitere Details zur
              Datenverarbeitung finden Sie in der Datenschutzrichtlinie von
              WhatsApp unter:{" "}
              <a href="https://www.whatsapp.com/legal/#privacy-policy">
                https://www.whatsapp.com/legal/#privacy-policy
              </a>
              .
              <Break /> Der Einsatz von WhatsApp erfolgt auf Grundlage unseres
              berechtigten Interesses an einer möglichst schnellen und
              effektiven Kommunikation mit Kunden, Interessenten und sonstigen
              Geschäfts- und Vertragspartnern (Art. 6 Abs. 1 lit. f DSGVO).
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
              die Datenverarbeitung ausschließlich auf Grundlage der
              Einwilligung; diese ist jederzeit mit Wirkung für die Zukunft
              widerrufbar.
              <Break /> Die zwischen Ihnen und uns auf WhatsApp ausgetauschten
              Kommunikationsinhalte verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
              Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
              Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
              unberührt.
              <Break /> Das Unternehmen verfügt über eine Zertifizierung nach
              dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:
              <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt00000011sfnAAA&status=Active">
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt00000011sfnAAA&status=Active
              </a>
              <Break /> Wir nutzen WhatsApp in der Variante „WhatsApp Business“.
              <Break /> Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:
              <a href="https://www.whatsapp.com/legal/business-data-transfer-addendum">
                https://www.whatsapp.com/legal/business-data-transfer-addendum.
              </a>
              <Break /> Wir haben unsere WhatsApp-Accounts so eingestellt, dass
              es keinen automatischen Datenabgleich mit dem Adressbuch auf den
              im Einsatz befindlichen Smartphones macht.
              <Break /> Wir haben einen Vertrag über Auftragsverarbeitung (AVV)
              mit dem oben genannten Anbieter geschlossen.
              <Break /> Google Fonts (lokales Hosting)
              <Break /> Diese Seite nutzt zur einheitlichen Darstellung von
              Schriftarten so genannte Google Fonts, die von Google
              bereitgestellt werden. Die Google Fonts sind lokal installiert.
              Eine Verbindung zu Servern von Google findet dabei nicht statt.
              <Break /> Weitere Informationen zu Google Fonts finden Sie unter
              <a href="https://developers.google.com/fonts/faq">
                https://developers.google.com/fonts/faq
              </a>
              und in der Datenschutzerklärung von Google:
              <a href="https://policies.google.com/privacy?hl=de">
                https://policies.google.com/privacy?hl=de.
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-3xl">
              5. Audio- und Videokonferenzen
            </h3>
            <Title>Datenverarbeitung</Title>

            <p>
              Für die Kommunikation mit unseren Kunden setzen wir unter anderen
              Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten
              Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder
              Audiokonferenz via Internet kommunizieren, werden Ihre
              personenbezogenen Daten von uns und dem Anbieter des jeweiligen
              Konferenz-Tools erfasst und verarbeitet.
              <Break /> Die Konferenz-Tools erfassen dabei alle Daten, die Sie
              zur Nutzung der Tools bereitstellen/einsetzen (E-Mail-Adresse
              und/oder Ihre Telefonnummer). Ferner verarbeiten die
              Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit)
              der Teilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige
              „Kontextinformationen“ im Zusammenhang mit dem
              Kommunikationsvorgang (Metadaten).
              <Break /> Des Weiteren verarbeitet der Anbieter des Tools alle
              technischen Daten, die zur Abwicklung der Online-Kommunikation
              erforderlich sind. Dies umfasst insbesondere IP-Adressen,
              MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp und
              -version, Client-Version, Kameratyp, Mikrofon oder Lautsprecher
              sowie die Art der Verbindung.
              <Break /> Sofern innerhalb des Tools Inhalte ausgetauscht,
              hochgeladen oder in sonstiger Weise bereitgestellt werden, werden
              diese ebenfalls auf den Servern der Tool-Anbieter gespeichert. Zu
              solchen Inhalten zählen insbesondere Cloud-Aufzeichnungen, Chat-/
              Sofortnachrichten, Voicemails hochgeladene Fotos und Videos,
              Dateien, Whiteboards und andere Informationen, die während der
              Nutzung des Dienstes geteilt werden.
              <Break /> Bitte beachten Sie, dass wir nicht vollumfänglich
              Einfluss auf die Datenverarbeitungsvorgänge der verwendeten Tools
              haben. Unsere Möglichkeiten richten sich maßgeblich nach der
              Unternehmenspolitik des jeweiligen Anbieters. Weitere Hinweise zur
              Datenverarbeitung durch die Konferenztools entnehmen Sie den
              Datenschutzerklärungen der jeweils eingesetzten Tools, die wir
              unter diesem Text aufgeführt haben.
            </p>

            <Title>Zweck und Rechtsgrundlagen</Title>

            <p>
              Die Konferenz-Tools werden genutzt, um mit angehenden oder
              bestehenden Vertragspartnern zu kommunizieren oder bestimmte
              Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 lit.
              b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen
              Vereinfachung und Beschleunigung der Kommunikation mit uns bzw.
              unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6
              Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde,
              erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser
              Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die
              Zukunft widerrufbar.
            </p>

            <Title>Eingesetzte Konferenz-Tools</Title>

            <p>
              Zoom
              <Break /> Wir nutzen Zoom. Anbieter dieses Dienstes ist die Zoom
              Communications Inc., San Jose, 55 Almaden Boulevard, 6th Floor,
              San Jose, CA 95113, USA. Details zur Datenverarbeitung entnehmen
              Sie der Datenschutzerklärung von Zoom:
              <a href="https://explore.zoom.us/de/privacy">
                https://explore.zoom.us/de/privacy
              </a>
              <Break /> Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:{" "}
              <a href="https://explore.zoom.us/de/privacy">
                https://explore.zoom.us/de/privacy
              </a>
              .
            </p>
          </section>
        </div>
      </ContentWrapper>
    </PageLayout>
  );
}

const Title = ({ children }: { children: ReactNode }) => {
  return <h4 className="font-bold">{children}</h4>;
};

const Break = () => {
  return (
    <>
      <br />
      <br />
    </>
  );
};
