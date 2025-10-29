import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { initDb } from "../src/db/db";

export default function RootLayout() {
  useEffect(() => {
    initDb();
  }, []);

  return <Slot />;
}
