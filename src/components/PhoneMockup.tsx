import './PhoneMockup.css';

interface PhoneMockupProps {
  image: string;
  alt: string;
}

export function PhoneMockup({ image, alt }: PhoneMockupProps) {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-screen">
          <img src={image} alt={alt} className="phone-image" />
        </div>
      </div>
    </div>
  );
}

