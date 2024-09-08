import Image from "next/image";
import { ContentWrapper } from "$/components/content-wrapper";
import { PageLayout } from "$/components/page-layout";
import { Listing } from "$/components/listing";

export default function SuperVision() {
  return (
    <PageLayout>
      <ContentWrapper>
        <div className={"grid grid-cols-1 xl:grid-cols-2"}  >
        <Listing>
          <li className="list-disc">Studium der Sozialen Arbeit, Hochschule Ludwigshafen am Rhein
          </li>
          <li className="list-disc">
            Thesis zum "Paradigmenwechsel in der Suchthilfe"
          </li>
          <li className="list-disc">
            Langjährige Tätigkeit in der  Suchthilfe (ambulant und stationär)
          </li>
          <li className="list-disc">Fachliche Leitung und Geschäftsführung</li>
          <li className="list-disc">
            Master of Arts Coaching, Supervision und Organisationsberatung, DGSv (i.A.), Universität Kassel
          </li>
          <li className="list-disc">
            Regelmäßige Weiterbildung und Teilnahme an Tagungen und Kongressen; Qualitätssicherung durch Reflexion der eigenen Arbeit in unterschiedlichen Settings
          </li>
          <li className="list-disc">Meditation und Buddhismus</li>
          <li className="list-disc">Mutter einer Tochter</li>
        </Listing>
        <Image
          className="p-4 mx-auto"
          src={"/me-new.jpeg"}
          alt={"Isabella Heilig"}
          width={400}
          height={400}
        />
        </div>
      </ContentWrapper>
    </PageLayout>
  );
}
