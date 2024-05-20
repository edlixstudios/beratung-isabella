import Image from "next/image";
import { ContentWrapper } from "../components/content-wrapper";
import { PageLayout } from "../components/page-layout";

export default function SuperVision() {
    return (
        <PageLayout>
            <ContentWrapper>
                <h2 className="text-4xl font-bold mb-4">Supervision</h2>
                <p>
                    Supervision ist ein professionelles Beratungsformat, das Einzelpersonen, Teams
                    und Organisationen dabei unterstützt, ihre berufliche Praxis zu reflektieren und
                    zu verbessern. Durch die gezielte Auseinandersetzung mit beruflichen
                    Herausforderungen und Arbeitsprozessen bietet Supervision die Möglichkeit, neue
                    Perspektiven zu gewinnen und effektive Lösungen zu entwickeln.
                </p>
                <br />
                <p>
                    Ein Supervisor begleitet und unterstützt die Supervisanden dabei, ihre
                    beruflichen Rollen und Aufgaben klarer zu definieren und besser zu bewältigen.
                    Dabei steht die Förderung von Selbstreflexion, die Stärkung der beruflichen
                    Identität und die Entwicklung von Handlungskompetenzen im Mittelpunkt.
                    Supervision trägt dazu bei, Konflikte zu klären, Kommunikationsprozesse zu
                    verbessern und die Zusammenarbeit im Team zu optimieren.
                </p>
                <br />
                <p>
                    Zusammengefasst ist Supervision ein wertvolles Instrument zur Steigerung der
                    beruflichen Zufriedenheit und zur Förderung einer konstruktiven und produktiven
                    Arbeitsatmosphäre.
                </p>
                <br />
                <p>Folgende Supervisionsformate biete ich an:</p>
                <ul className="py-4 px-8">
                    <li className="list-disc">Leitungssupervision</li>
                    <li className="list-disc">Teamsupervision</li>
                    <li className="list-disc">Fallsupervision</li>
                </ul>
            </ContentWrapper>
        </PageLayout>
    );
}
