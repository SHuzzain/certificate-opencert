import { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CertificateOfAward } from "../samples";
import { PageContainer } from "../../components/page";

const CertificateOfAwardTemplate: FunctionComponent<TemplateProps> = ({ document }) => {

  const { signature, recipient } = document as unknown as CertificateOfAward;


  return (
    <PageContainer>
      <img src={signature.signature} alt="Signature" style={{ width: recipient?.dimensions?.x || 800, height: recipient?.dimensions?.y || 800 }} />
    </PageContainer>
  );
};

export default CertificateOfAwardTemplate;