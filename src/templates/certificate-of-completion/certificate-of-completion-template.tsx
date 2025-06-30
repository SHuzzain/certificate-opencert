import { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { PageContainer } from "../../components/page";

interface CertificateOfCompletion {
  name: string;
  recipient: {
    name: string;
    dimensions: {
      x: string,
      y: string,
    }
  };
  course: {
    name: string;
    dateOfCompletion: string;
  };
  issuedOn: string;
  issuer?: {
    name: string;
    designation?: string;
    organisation?: string;
  };
  signature: {
    signature: string;
  }
}

export const CertificateOfCompletionTemplate: FunctionComponent<TemplateProps> = ({ document }) => {
  const { signature, recipient = { dimensions: { x: 800, y: 800 } } } = document as unknown as CertificateOfCompletion;
  return (
    <PageContainer>
      <img src={signature.signature} alt="Signature" style={{ width: recipient.dimensions.x, height: recipient.dimensions.y }} />
    </PageContainer>
  )
}