import React, { FunctionComponent, useEffect } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CertificateOfAward } from "../samples";
import { Page, PageContainer } from "../../components/page";

const CertificateOfAwardTemplate: FunctionComponent<TemplateProps<CertificateOfAward>> = ({ document }) => {
  // JSONPlaceholder API call - just console log the response
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('JSONPlaceholder API Response:', data);
      } catch (error) {
        console.error('API call failed:', error);
      }
    };

    fetchData();
  }, []);

  function currentDate() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: "long",
      year: "numeric"
    });
    return formattedDate
  }
  console.log({ document }, "checking")
  return (
    <PageContainer>
      <Page>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #e8f4f8 0%, #d1e7dd 50%, #f8f9fa 100%)',
            position: 'relative',
            padding: '40px',
            boxSizing: 'border-box'
          }}
        >
          {/* Decorative Border */}
          <div
            style={{
              width: '100%',
              height: '100%',
              border: '8px solid #8B4513',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)'
            }}
          >
            {/* Header with centered SMU Logo only */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px 60px',
                borderBottom: '1px solid #ddd',
                marginBottom: '20px'
              }}
            >
              {/* SMU Logo - Centered and Bigger */}
              <img
                src="https://www.sgcodecampus.com/static/e6c0572d572e712178020c7e015efba2/dcf86/smu.webp"
                alt="SMU Logo"
                style={{
                  width: '421px',
                  height: '200px',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Main Content */}
            <div
              style={{
                padding: '40px 80px 60px 80px',
                textAlign: 'center',
                height: 'calc(100% - 280px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Certificate Content */}
              <div>
                {/* Certificate Title */}
                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: '#B8860B',
                    letterSpacing: '4px',
                    marginBottom: '40px',
                    textTransform: 'uppercase'
                  }}
                >
                  GRADUATE CERTIFICATE
                </div>

                {/* Certification Text */}
                <div
                  style={{
                    fontSize: '18px',
                    color: '#333',
                    marginBottom: '30px'
                  }}
                >
                  It is hereby certified that
                </div>

                {/* Recipient Name */}
                <div
                  style={{
                    fontSize: '42px',
                    fontWeight: 'bold',
                    color: '#1e3a8a',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}
                >
                  {document.recipient.name}
                </div>

                {/* Underline */}
                <div
                  style={{
                    width: '400px',
                    height: '2px',
                    background: '#B8860B',
                    margin: '0 auto 30px auto'
                  }}
                />

                {/* Description */}
                <div
                  style={{
                    fontSize: '16px',
                    color: '#333',
                    lineHeight: '1.6',
                    marginBottom: '30px',
                    maxWidth: '600px',
                    margin: '0 auto 30px auto'
                  }}
                >
                  having attended all necessary modules and having satisfied all<br />
                  requirement has officially completed the programme
                </div>

                {/* Course Name */}
                <div
                  style={{
                    fontSize: '24px',
                    color: '#B8860B',
                    fontWeight: '500',
                    marginBottom: '40px',
                    fontStyle: 'italic'
                  }}
                >
                  Graduate certificate in {document.award.achievementArea}
                </div>
              </div>

              {/* Bottom Section - Signature and Date aligned properly */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  marginTop: '40px',
                  paddingLeft: '20px',
                  paddingRight: '20px'
                }}
              >
                {/* Signature Section */}
                <div style={{ textAlign: 'left', width: '300px' }}>
                  {/* Signature Image Container - Fixed height for alignment */}
                  <div
                    style={{
                      width: '200px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '5px'
                    }}
                  >
                    <img
                      src={document.signature.signature}
                      alt="Signature"
                      style={{
                        maxWidth: '180px',
                        maxHeight: '50px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  {/* Signature Line - Aligned with date line */}
                  <div
                    style={{
                      width: '200px',
                      height: '1px',
                      background: '#333',
                      marginBottom: '8px'
                    }}
                  />
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#333',
                      fontWeight: 'bold',
                      marginBottom: '5px'
                    }}
                  >
                    {document.signature.name}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#B8860B',
                      marginBottom: '2px'
                    }}
                  >
                    {document.signature.designation}, SMU Academy
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#B8860B'
                    }}
                  >
                    Singapore Management University
                  </div>
                </div>

                {/* Date Section - Aligned with signature */}
                <div style={{ textAlign: 'right', width: '200px' }}>
                  {/* Empty space to match signature image height */}
                  <div style={{ height: '65px' }}></div>
                  <div
                    style={{
                      fontSize: '18px',
                      color: '#B8860B',
                      fontWeight: 'bold',
                      marginBottom: '5px'
                    }}
                  >

                    {currentDate()}
                  </div>
                  {/* Date Line - Aligned with signature line */}
                  <div
                    style={{
                      width: '150px',
                      height: '1px',
                      background: '#333',
                      marginBottom: '8px',
                      marginLeft: 'auto'
                    }}
                  />
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#B8860B'
                    }}
                  >
                    Date of Completion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </PageContainer>
  );
};

export default CertificateOfAwardTemplate;