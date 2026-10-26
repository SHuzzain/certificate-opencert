import { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CertificateOfAward } from "../samples";
import { PageContainer } from "../../components/page";
import { certificateImage } from "../../lib/base64";

const CertificateOfAwardTemplate = () => {

  // const { signature, recipient } = document as unknown as CertificateOfAward;


  return (
    <PageContainer>
          <img src={certificateImage} alt="Black chain" width="500" height="300" />
      {/* <img src={signature.signature} alt="Signature" style={{ width: recipient?.dimensions?.x || 800, height: recipient?.dimensions?.y || 800 }} /> */}
    </PageContainer>
  );
};

export default CertificateOfAwardTemplate;
