from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add this test endpoint
@app.get("/test")
async def test():
    return {"status": "working"}  # Simple test route

# Your existing prediction endpoint
@app.post("/predict")
async def predict(reactants: str):
    # ... (keep your existing prediction logic)
