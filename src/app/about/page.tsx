import Image from "next/image";
import { ContentWrapper } from "../components/content-wrapper";
import { PageLayout } from "../components/page-layout";

export default function SuperVision() {
    return (
        <PageLayout>
            <ContentWrapper>
                <h2 className="text-4xl font-bold mb-4">Über mich</h2>
                <ul className="py-4 px-8">
                    <li className="list-disc">Studium der sozialen Arbeit</li>
                    <li className="list-disc">Thesis zum "Paradigmenwechsel in der Suchthilfe</li>
                    <li className="list-disc">
                        Langjährige Tätigkeit in der Suchthilfe (ambulant und stationär)
                    </li>
                    <li className="list-disc">Fachliche Leitung und Geschäftsführung</li>
                    <li className="list-disc">
                        Master of Arts Coaching, Supervision und Organisationsberatung, DGSv (i.A.)
                    </li>
                    <li className="list-disc">
                        Regelmäßige Weiterbildung und Teilnahme an Tagungen und Kongressen;
                        Qualitätssicherung durch Reflexion der eigenen Arbeit in unterschiedlichen
                        Settings
                    </li>
                    <li className="list-disc">Mediation und Buddhismus</li>
                    <li className="list-disc">Mutter einer Tochter</li>
                </ul>
                <Image
                    className="p-4 mx-auto"
                    src={"/me.jpg"}
                    alt={"Isabella Heilig"}
                    width={800}
                    height={800}
                />
            </ContentWrapper>
        </PageLayout>
    );
}
