"use client";
import { useEffect, useState } from "react";
import { Curve } from "@/components";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Curve backgroundColor="linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)">
        <div className="text-white text-4xl font-bold">Test Page</div>
      </Curve>
    </div>
  );
}
