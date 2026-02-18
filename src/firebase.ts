import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://sarko-43d61-default-rtdb.firebaseio.com",
  projectId: "sarko-43d61",
  // ئەگەر API Key ت لایە لێرە دایبنێ، ئەگەر نا چونکە داتابەیسەکەت Public ە کار دەکات
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
