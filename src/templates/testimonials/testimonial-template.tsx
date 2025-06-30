import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/react";
import { Page, PageContainer } from "../../components/page";

interface Testimonial {
  name: string;
  recipient: {
    name: string;
    position: string;
  };
  issuer: {
    name: string;
    position: string;
    organisation: string;
  };
  testimonial: string;
  issuedOn: string;
}

export const TestimonialTemplate: FunctionComponent<TemplateProps<Testimonial>> = ({ document }) => (
  <PageContainer>
    <Page>
      <div
        css={css`
          padding: 2cm;
          height: 100%;
          background: #f8f9fa;
          
          .header {
            text-align: center;
            margin-bottom: 2rem;
            border-bottom: 2px solid #007bff;
            padding-bottom: 1rem;
          }
          
          .title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #007bff;
            margin-bottom: 0.5rem;
          }
          
          .recipient-info {
            margin: 2rem 0;
            text-align: center;
          }
          
          .recipient-name {
            font-size: 1.8rem;
            font-weight: bold;
            color: #333;
          }
          
          .recipient-position {
            font-size: 1.2rem;
            color: #666;
            margin-top: 0.5rem;
          }
          
          .testimonial-content {
            margin: 2rem 0;
            padding: 1.5rem;
            background: white;
            border-left: 4px solid #007bff;
            font-size: 1.1rem;
            line-height: 1.6;
            font-style: italic;
          }
          
          .issuer-info {
            margin-top: 2rem;
            text-align: right;
          }
          
          .issuer-name {
            font-weight: bold;
            font-size: 1.2rem;
          }
          
          .issuer-details {
            color: #666;
            margin-top: 0.5rem;
          }
          
          .issue-date {
            text-align: center;
            margin-top: 2rem;
            color: #666;
          }
        `}
      >
        <div className="header">
          <div className="title">TESTIMONIAL</div>
        </div>
        
        <div className="recipient-info">
          <div className="recipient-name">{document.recipient.name}</div>
          <div className="recipient-position">{document.recipient.position}</div>
        </div>
        
        <div className="testimonial-content">
          "{document.testimonial}"
        </div>
        
        <div className="issuer-info">
          <div className="issuer-name">{document.issuer.name}</div>
          <div className="issuer-details">
            {document.issuer.position}<br/>
            {document.issuer.organisation}
          </div>
        </div>
        
        <div className="issue-date">
          Issued on: {document.issuedOn}
        </div>
      </div>
    </Page>
  </PageContainer>
);