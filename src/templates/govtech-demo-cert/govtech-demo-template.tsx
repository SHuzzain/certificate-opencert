import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/react";
import { Page, PageContainer } from "../../components/page";

interface GovtechDemo {
  name: string;
  recipient: {
    name: string;
  };
  course: {
    name: string;
    dateOfCompletion: string;
  };
  issuedOn: string;
}

export const GovtechDemoTemplate: FunctionComponent<TemplateProps<GovtechDemo>> = ({ document }) => (
  <PageContainer>
    <Page>
      <div
        css={css`
          padding: 2cm;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          
          .title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 2rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
          
          .recipient {
            font-size: 2rem;
            margin: 1rem 0;
            text-decoration: underline;
          }
          
          .course {
            font-size: 1.5rem;
            margin: 1rem 0;
          }
          
          .date {
            font-size: 1rem;
            margin-top: 2rem;
            opacity: 0.9;
          }
        `}
      >
        <div className="title">CERTIFICATE OF COMPLETION</div>
        <div>This is to certify that</div>
        <div className="recipient">{document.recipient.name}</div>
        <div>has successfully completed</div>
        <div className="course">{document.course.name}</div>
        <div className="date">Issued on: {document.issuedOn}</div>
      </div>
    </Page>
  </PageContainer>
);