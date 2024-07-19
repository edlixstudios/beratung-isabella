import { ContentWrapper } from "$/components/content-wrapper";
import { PageLayout } from "$/components/page-layout";
import { Listing } from "$/components/listing";

export default function SuperVision() {
  return (
    <PageLayout>
      <ContentWrapper>
        {/* <h2 className="text-4xl font-bold mb-4">Supervision</h2> */}
        <p>
          Supervision heißt: komplexe Beziehungen gestalten. Supervision ist
          Beratung für Personen in Organisationen, deren primäre Aufgabe die
          Arbeit mit und am Menschen ist. Eine höchst anspruchsvolle
          Beziehungsarbeit, für die regelmäßige Supervision immer wichtig und
          manchmal sehr nötig ist. Durch die gezielte Auseinandersetzung mit
          beruflichen Herausforderungen und Arbeitsprozessen bietet Supervision
          die Möglichkeit, neue Perspektiven zu gewinnen und effektive Lösungen
          zu entwickeln.
        </p>
        <br />
        <p>
          Ein Supervisor begleitet und unterstützt die Supervisanden dabei, ihre
          beruflichen Rollen und Aufgaben klarer zu definieren und besser zu
          bewältigen. Dabei steht die Förderung von Selbstreflexion, die
          Stärkung der beruflichen Identität und die Entwicklung von
          Handlungskompetenzen im Mittelpunkt. Supervision trägt dazu bei,
          Konflikte zu klären, Kommunikationsprozesse zu verbessern und die
          Zusammenarbeit im Team zu optimieren.
        </p>
        <br />
        <p>
          Zusammengefasst ist Supervision ein wertvolles Instrument zur
          Steigerung der beruflichen Zufriedenheit und zur Förderung einer
          konstruktiven und produktiven Arbeitsatmosphäre. Somit ist sie immer
          auch ein Betrag zur Organisationsentwicklung
        </p>
        <br />
        <p>Folgende Supervisionsformate biete ich an:</p>
        <Listing>
          <li className="list-disc">Leitungssupervision</li>
          <li className="list-disc">Teamsupervision</li>
          <li className="list-disc">Projektsupervision</li>
          <li className="list-disc">Fallsupervision</li>
        </Listing>
      </ContentWrapper>
    </PageLayout>
  );
}
