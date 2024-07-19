import Image from "next/image";
import { ContentWrapper } from "$/components/content-wrapper";

import { PageLayout } from "$/components/page-layout";
import { Address } from "$/components/address";

export default function SuperVision() {
  return (
    <PageLayout>
      <ContentWrapper>
        <div className="space-y-8">
          <section>
            <h2 className="font-bold text-3xl mb-2">Impressum</h2>
            <p>Isabella Heilig</p>
            <p>
              isabella Heilig - Supervision I Coaching I Organisationsberatung
            </p>
            <p>Hahnenstr. 33</p>
            <p>75179 Pforzheim</p>
          </section>
          <section>
            <h2 className="font-bold text-3xl mb-2">Kontakt</h2>
            <p>Telefon: 0173 9968129</p>
            <a href="mailto:beratung.heilig@cloudmail.de">
              E-Mail: beratung.heilig@cloudmail.de
            </a>
          </section>
          <section>
            <h2 className="font-bold text-3xl mb-2">
              Redaktionell verantwortlich
            </h2>
            <p>Isabella Heilig</p>
            <p>Hahnenstr. 33</p>
            <p>75179 Pforzheim</p>
          </section>
          <section>
            <h2 className="font-bold text-3xl mb-2">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                className="text-[var(--primary-color)]"
                href="https://ec.europa.eu/consumers/odr/"
              >
                https://ec.europa.eu/consumers/odr
              </a>{" "}
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>
          <section>
            <h2 className="font-bold text-3xl mb-2">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </div>
      </ContentWrapper>
    </PageLayout>
  );
}
