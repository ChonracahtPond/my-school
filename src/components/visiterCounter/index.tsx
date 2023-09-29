import { useState, useEffect } from 'react';
import axios from "axios";

interface IpDbItem {
  id: string;
  ipAddress: string;
}

function VisiterCounter() {
  const [ipAddress, setIpAddress] = useState('');
  const [ipDb, setIpDb] = useState<IpDbItem[]>([]);

  const fetchIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchIpDb = async () => {
    try {
      const response = await axios.get("/api/IPAddress");
      if (response.status === 200) {
        const data = response;
        setIpDb(data.data.iPAddress);
      } else {
        throw new Error("API request failed with status code " + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
    fetchIpDb();
  }, []);

  useEffect(() => {
    if (ipAddress && ipDb) {
      if (ipDb.some(dbIp => dbIp.ipAddress === ipAddress)) {
        // console.log("ใช่");
      } else {
        // console.log("ไม่");
        axios.post("/api/IPAddress", { ipAddress: ipAddress })
          .then(response => {
            if (response.status === 201) {
              //console.log("Added IP address to the database:", ipAddress);
            } else {
              throw new Error("API request failed with status code " + response.status);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }, [ipAddress, ipDb]);

  return (
    <>
    </>
  );
}

export default VisiterCounter;
