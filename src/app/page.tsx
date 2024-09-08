// import Image from "next/image";
import { ContentWrapper } from "$/components/content-wrapper";
import { PageLayout } from "$/components/page-layout";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
      <ContentWrapper>
        <div className={"flex justify-center"} >
          <Image className={"mb-4"} src={"/me-new-small.jpeg"} alt={"Isabella"} width={200} height={200} />
        </div>
        <p>
          In meiner psychodynamisch- systemischen Arbeit als Coach und Supervisorin bewege ich mich stets im Spannungsfeld zwischen unterstützender Begleitung und zielgerichteter Strukturierung. Mit einem feinen Gespür für die Bedürfnisse und Dynamiken moderner Arbeitskontexte hilft Supervision Klarheit zu schaffen und eigene Werte sowie eine authentische berufliche Haltung zu entwickeln.
        </p>
        <br />
        <p>
          Dabei ist es mir wichtig, dass der Beratungsprozess nicht nur Strukturen schafft, sondern es auch gelingt diese so zu verweben, dass diese den individuellen und kollektiven Interessen dienen.
        </p>
        <br />
        <p>
          Meine Rolle als Supervisorin sehe ich darin, die Suche nach Lösungen und Erkenntnissen zu begleiten. Durch das Schaffen eines sicheren und unterstützenden Rahmens ermögliche ich es meinen Klienten, ihre Potentiale zu entdecken und zu entfalten. So fördere ich nicht nur persönliches Wachstum, sondern auch eine klare, gemeinsame Ausrichtung innerhalb von Teams.
        </p>
        <br />
        <p>
          "Supervision ist Führungskräfteentwicklung, Führungskräfteentwicklung ist Teamentwicklung und Teamentwicklung ist Organisationsentwicklung" DGSv
        </p>
      </ContentWrapper>
    </PageLayout>
  );
}
