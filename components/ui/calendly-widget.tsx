"use client";

import { InlineWidget } from "react-calendly";

interface CalendlyWidgetProps {
  url: string;
}

export function CalendlyWidget({ url }: CalendlyWidgetProps) {
  return (
    <div className="calendly-wrapper">
      <InlineWidget
        url={url}
        styles={{
          height: "630px",
          minWidth: "320px",
        }}
      />
    </div>
  );
}
