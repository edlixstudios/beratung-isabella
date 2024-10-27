import { ContentWrapper } from "$/components/content-wrapper";
import { PageLayout } from "$/components/page-layout";
import { Listing } from "$/components/listing";

export default function Organisationsberatung() {
  return (
    <PageLayout>
      <ContentWrapper>
        {/* <h2 className="text-4xl font-bold mb-4">Coaching</h2> */}
        <p>
          Organisationen stehen oft vor großen Veränderungen, wie Digitalisierung, Marktveränderungen 
          oder neuen regulatorischen Anforderungen. Auch Kulturwandel, Fachkräftemangel und strategische 
          Ausrichtungen können Inhalte von Organisationsberatung sein. Organisationsberatung kann dabei 
          einen wichtig Beitrag leisten, weil sie Unternehmen dabei unterstützt, effizienter, agiler und 
          erfolgreicher auf interne sowie externe Herausforderungen zu reagieren. 
        </p>
        <br />
        <p>
          Im Weiteren kann Beratung dabei helfen die Organisationskultur und Mitarbeiterzufriedenheit zu 
          analysieren und positive Veränderungen anzustoßen. Eine unterstützende, aufgeschlossene Kultur 
          kann die Motivation und Zufriedenheit der Mitarbeiter steigern, 
          was wiederum die Fluktuation verringert und die Produktivität steigert.
        </p>
        <br />
        <p>
          Die neutrale Perspektive einer Beratung bringen eine objektive Außensicht ein. 
          Diese Unabhängigkeit hilft, blinde Flecken und systemische Probleme zu erkennen, 
          die intern oft übersehen werden, und ermöglicht dadurch eine umfassendere Analyse und Lösungsentwicklung.
          Professionelle Arbeitsweltberatung vermittelt Fachwissen und Methoden, die Unternehmen und Mitarbeiter für die eigene 
          Entwicklung nutzen können. Dies stärkt die Kompetenzen der Belegschaft und hilft, zukünftige Herausforderungen besser zu bewältigen.
        </p>
        <br />
        <p>
          Insgesamt trägt Organisationsberatung zur langfristigen Stabilität, Innovationskraft und 
          Zufriedenheit innerhalb eines Unternehmens bei und schafft damit eine Basis für nachhaltigen Erfolg.
          Sie nimmt Organisation oder Organisationseinheiten als Ganzes in den Blick. Vorrangiges Ziel ist, die Funktions- und Leistungsfähigkeit 
          einer Organisation bzw. Organisationseinheit zu erhalten oder zu steigern. Organisationsberatung ist die professionelle Beratung und 
          Begleitung von Veränderungsprozessen. Sie bedient sich verschiedenster Formate, mit denen in die Organisation hinein Wirkung entfaltet wird. 
          Auch Supervision und Coaching können in Organisationsberatungs-Prozesse integriert werden.
        </p>
        <br />
        <p>Folgende Inhalte werden mit Organisationsberatung adressiert:</p>
        <Listing>
          <li className="list-disc">Strukturentwicklung</li>
          <li className="list-disc">Konzeptionsentwicklung</li>
          <li className="list-disc">Teamentwicklung</li>
          <li className="list-disc">Change Management</li>
          <li className="list-disc">Fachkräftemangel</li>
           <li className="list-disc">Generationswechseln und demographischer Wandel
          </li>
          <li className="list-disc">Organisationskultur und Marke</li>
        </Listing>
      </ContentWrapper>
    </PageLayout>
  );
}
