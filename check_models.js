const apiKey = "AIzaSyAb0Wtek3e9borAIOckpsAb6FVjEKleBqo"; 

async function listModels() {
  console.log("Asking Google for available models...");
  
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    
    const data = await response.json();
    
    if (data.models) {
      console.log("✅ SUCCESS! Here are your available models:");
      data.models.forEach(m => {
        // We only care about models that can "generateContent"
        if (m.supportedGenerationMethods.includes("generateContent")) {
          console.log(" -> " + m.name); // This will print names like 'models/gemini-pro'
        }
      });
    } else {
      console.log("❌ ERROR:", data);
    }
  } catch (err) {
    console.error("❌ NETWORK ERROR:", err.message);
  }
}

listModels();