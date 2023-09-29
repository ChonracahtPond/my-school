import { useState, useEffect } from 'react';
import axios from "axios";
import Loading from '@/components/loading';

interface IpDbItem {
  id: string;
  ipAddress: string;
}

function Visiter() {
  const [ipAddress, setIpAddress] = useState('');
  const [ipDb, setIpDb] = useState<IpDbItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
      setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์
    } catch (error) {
      console.error(error);
      setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

    }
  };

  const fetchIpDb = async () => {
    try {
      const response = await axios.get("/api/IPAddress");
      if (response.status === 200) {
        const data = response;
        setIpDb(data.data.iPAddress);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์
      } else {
        throw new Error("API request failed with status code " + response.status);
        setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

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
              setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

            } else {
              throw new Error("API request failed with status code " + response.status);
              setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อโหลดเสร็จสมบูรณ์

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
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}

      {ipDb.length}
    </>

  );
}

export default Visiter;
