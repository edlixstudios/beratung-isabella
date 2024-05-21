// import Image from "next/image";
import { ContentWrapper } from "./components/content-wrapper";
import { PageLayout } from "./components/page-layout";

export default function Home() {
    return (
        <PageLayout>
            {/* <Image
                src={"/pic.jpeg"}
                className="float-start mr-5"
                alt={"Image"}
                width={250}
                height={500}
            /> */}
            <ContentWrapper>
                <p>
                    In meiner Arbeit als Coach und Supervisor bewege ich mich stets im Spannungsfeld
                    zwischen unterstützender Begleitung und zielgerichteter Strukturierung. Mit
                    einem feinen Gespür für die Bedürfnisse und Dynamiken meiner Klienten helfe ich,
                    Klarheit zu schaffen und eigene Werte sowie eine authentische Haltung zu
                    entwickeln. Dabei ist es mir wichtig, nicht nur Strukturen zu schaffen, sondern
                    diese auch so zu verweben, dass sie den individuellen und kollektiven Prozessen
                    dienen.
                </p>
                <br />
                <p>
                    Meine Rolle sehe ich darin, die Suche nach Lösungen und Erkenntnissen zu
                    begleiten. Durch das Schaffen eines sicheren und unterstützenden Rahmens
                    ermögliche ich es meinen Klienten, ihre Potentiale zu entdecken und zu
                    entfalten. So fördere ich nicht nur persönliches Wachstum, sondern auch eine
                    klare, gemeinsame Ausrichtung innerhalb von Teams.
                </p>
                <br />
                <p>
                    Meine professionelle Haltung kommt aus einer psychodynamischen- systemischen
                    Supervisionsausbildung gepaart mit einem humanistischen Menschenbild. Das
                    besagt, dass menschliche Veränderung nicht stetig und linear geradeaus verläuft,
                    sondern in Phasen und Prozessen. Umwege, Kurven und Rückschritte sind dabei zu
                    erwarten. In der Beratung werden vier aufeinander aufbauende und einander
                    bedingende Prozesse durchlaufen, die einem Treppenmodell gleichen. Sie bieten
                    und fördern somit Bewegung in beide Richtungen. Die Grundlage hierzu ist der
                    Aufbau einer guten (Arbeits-)Beziehung. Das Klären eines oder mehrerer Anliegen
                    führt zur Fokussierung auf zumindest ein Thema und ermöglicht das Evozieren bzw.
                    Hervorlocken von Veränderung, die sich im Planen der Veränderung konkretisieren
                    kann.
                </p>
                <br />
                <p>
                    Ein guter Kontakt sowie eine von Kooperation geprägte Beziehung ist die
                    Grundlage und ein Gewinn für alle am Gespräch Beteiligten.
                </p>
            </ContentWrapper>
        </PageLayout>
    );
}
