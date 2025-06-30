export interface CertificateOfAward {
  name: string;
  recipient: {
    name: string;
    dimensions: {
      x: string;
      y: string;
    };
  };
  award: {
    achievementArea: string;
    instituteName: string;
  };
  signature: {
    signature: string;
    name: string;
    designation: string;
  };
}

export interface CertificateOfCompletion {
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

export interface GovtechDemo {
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

export interface Testimonial {
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

// Sample data for testing
export const sampleCertificateOfAward: CertificateOfAward = {
  name: "Certificate of Excellence",
  recipient: {
    name: "John Doe",
  },
  award: {
    achievementArea: "Outstanding Academic Performance",
    instituteName: "Singapore International School",
  },
  signature: {
    signature:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjAgNDAgQyA0MCAyMCA4MCAyMCAxMDAgNDAgQyAxMjAgNjAgMTYwIDYwIDE4MCA0MCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz4KPC9zdmc+",
    name: "Dr. Jane Smith",
    designation: "Principal",
  },
};

export const sampleCertificateOfCompletion: CertificateOfCompletion = {
  name: "Certificate of Completion",
  recipient: {
    name: "Alice Johnson",
  },
  course: {
    name: "Advanced Digital Skills Program",
    dateOfCompletion: "2024-01-15",
  },
  issuedOn: "2024-01-15",
  issuer: {
    name: "Dr. Sarah Wilson",
    designation: "Program Director",
    organisation: "Digital Learning Institute",
  },
};

export const sampleGovtechDemo: GovtechDemo = {
  name: "Digital Transformation Course",
  recipient: {
    name: "Alice Johnson",
  },
  course: {
    name: "Advanced Digital Skills Program",
    dateOfCompletion: "2024-01-15",
  },
  issuedOn: "2024-01-15",
};

export const sampleTestimonial: Testimonial = {
  name: "Professional Testimonial",
  recipient: {
    name: "Michael Chen",
    position: "Senior Developer",
  },
  issuer: {
    name: "Sarah Wilson",
    position: "Technical Director",
    organisation: "Tech Solutions Pte Ltd",
  },
  testimonial:
    "Michael has consistently demonstrated exceptional technical skills and leadership abilities throughout his tenure with our organization. His innovative approach to problem-solving and dedication to excellence make him a valuable asset to any team.",
  issuedOn: "2024-01-20",
};
