
import { Connection } from "@solana/web3.js";

const RPC_URL = "https://api.mainnet-beta.solana.com";

const connection = new Connection(RPC_URL, "confirmed");

console.log("================================");
console.log("       FLASHX ENGINE");
console.log("================================");
console.log("Network: Solana Mainnet");
console.log("Mode: READ ONLY");
console.log("Trading: DISABLED");
console.log("");

async function scanSolana() {
      try {
            const start = Date.now();

                const slot = await connection.getSlot();

                    const latency = Date.now() - start;

                        console.log("Scanner Status: CONNECTED");
                            console.log("Latest Slot:", slot);
                                console.log("RPC Latency:", latency, "ms");
                                    console.log("Time:", new Date().toLocaleTimeString());
                                        console.log("-------------------------------");

      } catch (error) {
            console.log("Connection Error:", error.message);
      }
    }

    scanSolana();

    setInterval(scanSolana, 10000);
    
      }
}