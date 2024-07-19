import Image from "next/image";
import { ContentWrapper } from "$/components/content-wrapper";

import { PageLayout } from "$/components/page-layout";
import { Address } from "$/components/address";

export default function SuperVision() {
  return (
    <PageLayout>
      <ContentWrapper>
        <Address />
      </ContentWrapper>
    </PageLayout>
  );
}
