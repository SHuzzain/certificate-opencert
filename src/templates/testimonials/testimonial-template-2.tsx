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

export const TestimonialTemplate2: FunctionComponent<TemplateProps<Testimonial>> = ({ document }) => (
  <PageContainer>
    <Page>
      <div
        css={css`
          padding: 2cm;
          height: 100%;
          background: linear-gradient(45deg, #ffeef7 0%, #f0f8ff 100%);
          
          .decorative-border {
            border: 3px solid #d63384;
            padding: 1.5rem;
            height: calc(100% - 3rem);
            position: relative;
          }
          
          .corner-decoration {
            position: absolute;
            width: 20px;
            height: 20px;
            background: #d63384;
            transform: rotate(45deg);
          }
          
          .corner-decoration.top-left {
            top: -10px;
            left: -10px;
          }
          
          .corner-decoration.top-right {
            top: -10px;
            right: -10px;
          }
          
          .corner-decoration.bottom-left {
            bottom: -10px;
            left: -10px;
          }
          
          .corner-decoration.bottom-right {
            bottom: -10px;
            right: -10px;
          }
          
          .title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            color: #d63384;
            margin-bottom: 2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          
          .content {
            text-align: center;
            padding: 1rem;
          }
          
          .recipient-name {
            font-size: 2rem;
            font-weight: bold;
            color: #333;
            margin: 1rem 0;
          }
          
          .testimonial-text {
            font-size: 1.1rem;
            line-height: 1.6;
            margin: 2rem 0;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 10px;
            font-style: italic;
          }
          
          .issuer-signature {
            margin-top: 2rem;
            text-align: right;
            font-weight: bold;
          }
        `}
      >
        <div className="decorative-border">
          <div className="corner-decoration top-left"></div>
          <div className="corner-decoration top-right"></div>
          <div className="corner-decoration bottom-left"></div>
          <div className="corner-decoration bottom-right"></div>
          
          <div className="content">
            <div className="title">Testimonial</div>
            
            <div>This is to testify that</div>
            <div className="recipient-name">{document.recipient.name}</div>
            <div>{document.recipient.position}</div>
            
            <div className="testimonial-text">
              "{document.testimonial}"
            </div>
            
            <div className="issuer-signature">
              {document.issuer.name}<br/>
              {document.issuer.position}<br/>
              {document.issuer.organisation}
            </div>
          </div>
        </div>
      </div>
    </Page>
  </PageContainer>
);