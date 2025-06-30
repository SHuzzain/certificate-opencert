import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/react";
import { Page, PageContainer } from "../../components/page";

interface CertificateOfCompletion {
  name: string;
  recipient: {
    name: string;
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
}

export const CertificateOfCompletionTemplate: FunctionComponent<TemplateProps<CertificateOfCompletion>> = ({ document }) => (
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
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          text-align: center;
          
          .decorative-border {
            border: 4px solid #2c3e50;
            padding: 2rem;
            width: 100%;
            max-width: 600px;
            background: white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          
          .title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 1rem;
          }
          
          .subtitle {
            font-size: 1.2rem;
            color: #7f8c8d;
            margin-bottom: 2rem;
          }
          
          .recipient {
            font-size: 2rem;
            font-weight: bold;
            color: #2c3e50;
            margin: 1.5rem 0;
            text-decoration: underline;
            text-decoration-color: #3498db;
          }
          
          .course {
            font-size: 1.5rem;
            color: #34495e;
            margin: 1.5rem 0;
            font-weight: 600;
          }
          
          .completion-date {
            font-size: 1.1rem;
            color: #7f8c8d;
            margin: 1rem 0;
          }
          
          .issuer-info {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #bdc3c7;
          }
          
          .issuer-name {
            font-weight: bold;
            font-size: 1.1rem;
            color: #2c3e50;
          }
          
          .issuer-details {
            color: #7f8c8d;
            font-size: 0.9rem;
            margin-top: 0.5rem;
          }
          
          .issue-date {
            margin-top: 1.5rem;
            color: #95a5a6;
            font-size: 0.9rem;
          }
        `}
      >
        <div className="decorative-border">
          <div className="title">Certificate of Completion</div>
          <div className="subtitle">This is to certify that</div>
          <div className="recipient">{document.recipient.name}</div>
          <div className="subtitle">has successfully completed</div>
          <div className="course">{document.course.name}</div>
          <div className="completion-date">
            Completed on: {document.course.dateOfCompletion}
          </div>
          
          {document.issuer && (
            <div className="issuer-info">
              <div className="issuer-name">{document.issuer.name}</div>
              {document.issuer.designation && (
                <div className="issuer-details">{document.issuer.designation}</div>
              )}
              {document.issuer.organisation && (
                <div className="issuer-details">{document.issuer.organisation}</div>
              )}
            </div>
          )}
          
          <div className="issue-date">
            Issued on: {document.issuedOn}
          </div>
        </div>
      </div>
    </Page>
  </PageContainer>
);