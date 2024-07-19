import { ContentWrapper } from "$/components/content-wrapper";
import { PageLayout } from "$/components/page-layout";
import { Listing } from "$/components/listing";

export default function SuperVision() {
  return (
    <PageLayout>
      <ContentWrapper>
        {/* <h2 className="text-4xl font-bold mb-4">Coaching</h2> */}
        <p>
          Coaching ist ein zielgerichteter und individueller Beratungsprozess,
          der Menschen dabei unterstützt, ihre persönlichen und beruflichen
          Ziele zu erreichen. Ein Coach begleitet den Klienten durch Gespräche
          und gezielte Fragen, um Klarheit über eigene Stärken, Ressourcen und
          Entwicklungspotenziale zu gewinnen.
        </p>
        <br />
        <p>
          Im Coaching werden konkrete Herausforderungen und Ziele definiert, und
          es wird gemeinsam an der Entwicklung von Strategien und
          Lösungsansätzen gearbeitet. Der Coach bietet keine fertigen Lösungen
          an, sondern fördert die Selbstreflexion und Eigenverantwortung des
          Klienten.
        </p>
        <br />
        <p>
          Durch diesen Prozess können Fähigkeiten gestärkt, neue Perspektiven
          gewonnen und Handlungsmöglichkeiten erweitert werden. Coaching trägt
          dazu bei, persönliche und berufliche Entwicklungen voranzutreiben, die
          Leistungsfähigkeit zu steigern und das Wohlbefinden zu verbessern.
        </p>
        <br />
        <p>
          Mit der Komplexität der Arbeitswelt wächst der Bedarf an qualitativ
          hochwertiger arbeitsweltlicher Beratung. Als Mitglied der DGSv biete
          ich Coaching in Supervisionsqualität.
        </p>
        <br />
        <p>Folgende Coachingformate biete ich an:</p>
        <Listing>
          <li className="list-disc">Führungskräfte Coaching</li>
          <li className="list-disc">Karriereberatung</li>
          <li className="list-disc">Change Management</li>
          <li className="list-disc">
            Generationswechseln in Führungspositionen
          </li>
        </Listing>
      </ContentWrapper>
    </PageLayout>
  );
}
