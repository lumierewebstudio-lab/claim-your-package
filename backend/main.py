from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

BASE = Path(__file__).resolve().parent.parent
PUBLIC = BASE / "frontend" / "public"

app = FastAPI(title="Claim Your Package")

app.mount("/assets", StaticFiles(directory=PUBLIC / "assets"), name="assets")

@app.get("/")
async def home():
    return FileResponse(PUBLIC / "index.html")

@app.get("/claim.html")
async def claim():
    return FileResponse(PUBLIC / "claim.html")

@app.get("/health")
async def health():
    return {"status": "ok"}
