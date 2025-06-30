import { FunctionComponent, ReactNode } from "react";

export const pageHeight = "29.7cm";
export const pageWidth = "21cm";

interface PageProps {
  children: ReactNode;
}

export const PageContainer: FunctionComponent<PageProps> = ({ children }) => (
  <div
    className="flex justify-center p-4 bg-gray-100 min-h-screen"
  >
    {children}
  </div>
);

export const Page: FunctionComponent<PageProps> = ({ children }) => (
  <div
    style={{
      width: pageWidth,
      height: pageHeight,
      background: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {children}
  </div>
);