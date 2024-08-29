import React from "react";

const AnimationTemplateLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default AnimationTemplateLayout;
